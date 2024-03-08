import { Hono } from "hono";
import { logger } from "hono/logger";
import blogs from "./routes/blogs";
import users from "./routes/users";
const app = new Hono();

const api = new Hono().basePath("/api/v1");

//***** Middlewares *****
app.use(logger());
//***** Middlewares *****

//***** Api Routes *****/
api.route("/blogs", blogs);
api.route("/users", users);

//***** Api Routes *****

//***** App Routes *****
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", api);

//***** App Routes *****

export default app;
