import { Hono } from "hono";
import { db } from "../db/db";
import { blogSchema } from "../db/schemas";

const blogRoute = new Hono(); // Create a new Hono instance

blogRoute.get("/", async (c) => {
  const blogs = await db.select().from(blogSchema.blogs);
  return c.json(blogs);
});

export default blogRoute;
