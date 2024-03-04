import { Hono } from "hono";
import { logger } from "hono/logger";
import blogs from "./routes/blogs";
const app = new Hono();

const api = new Hono().basePath("/api/v1");

//***** Middlewares *****
app.use(logger());
//***** Middlewares *****

//***** Api Routes *****/
api.route("/blogs", blogs);


//***** Api Routes *****

//***** App Routes *****
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/", api);

//***** App Routes *****

export default app;
