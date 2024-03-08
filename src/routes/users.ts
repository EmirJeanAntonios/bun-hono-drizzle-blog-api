import { Hono } from "hono";
import { userSchema } from "../db/schemas";
import { db } from "../db/db";
import { eq } from "drizzle-orm";
import { validator } from "hono/validator";
import { loginSchema } from "../zod/userSchema";
import { sign } from "hono/jwt";

const userRoute = new Hono();

userRoute.post(
  "/login",
  validator("form", (value, c) => {
    const parsed = loginSchema.safeParse(value);
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
    const { email, password } = c.req.valid("form") as {
      email: string;
      password: string;
    };

    const user = await db
      .select()
      .from(userSchema.users)
      .where(eq(userSchema.users.email, email));

    const isValidPassword = await Bun.password.verify(password, user[0].password || "");
    if (user.length == 0 ||  !isValidPassword) {
      return c.json({ message: "Incorrect username or password" }, 400);
    }

    const jwtToken = await sign(
      {
        email: user[0].email,
      },
      process.env.JWT_SECRET as string
    );

    return c.json({ accessToken: jwtToken });
  }
);


export default userRoute;