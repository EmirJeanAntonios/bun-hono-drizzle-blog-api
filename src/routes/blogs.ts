import { Hono } from "hono";

const blogs = new Hono(); // Create a new Hono instance

blogs.get("/", (c) => {
  return c.json({ message: "Hello Blogs!" }); 
});



export default blogs;