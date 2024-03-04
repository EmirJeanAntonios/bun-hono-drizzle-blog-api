import { Hono } from "hono";
import { db } from "../db/db";
import { blogSchema } from "../db/schemas";
import blogSchemaZod from "../zod/blogSchema";

import { validator } from "hono/validator";
import { eq } from "drizzle-orm";

const blogRoute = new Hono(); // Create a new Hono instance

blogRoute.get("/", async (c) => {
  const blogs = await db.select().from(blogSchema.blogs);
  return c.json(blogs);
});

blogRoute.get("/:id", async (c) => {
  const id = c.req.param("id") as string;
  const blog = await db
    .select()
    .from(blogSchema.blogs)
    .where(eq(blogSchema.blogs.id, parseInt(id)));
  return c.json(blog);
});

blogRoute.post(
  "/save",
  validator("form", (value, c) => {
    const parsed = blogSchemaZod.safeParse(value);
    if (!parsed.success) {
      const flattenErrors = parsed.error.flatten();
      return c.json(
        { message: "Invalid form", errors: [flattenErrors.fieldErrors] },
        400
      );
    }

    return parsed.data;
  }),
  async (c) => {
    const value = c.req.valid("form");
    if (value?.id) {
      const blog = await db
        .select()
        .from(blogSchema.blogs)
        .where(eq(blogSchema.blogs.id, value?.id));

      if (blog.length == 0) {
        await db.insert(blogSchema.blogs).values({
          ...value,
          id: undefined,
        });
        return c.json({ message: "Successfuly created!" });
      }

      await db
        .update(blogSchema.blogs)
        .set(value)
        .where(eq(blogSchema.blogs.id, value?.id));
      return c.json({ message: "Successfuly updated!" });
    }

    await db.insert(blogSchema.blogs).values(value);
    return c.json({ message: "Successfuly created!" });
  }
);

export default blogRoute;
