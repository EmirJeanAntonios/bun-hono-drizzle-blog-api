import { Hono } from "hono";
import { db } from "../db/db";

const blogs = new Hono(); // Create a new Hono instance

blogs.get("/", (c) => {
  return c.json({ message: "Welcome to the blogs API" });
});

export default blogs;
