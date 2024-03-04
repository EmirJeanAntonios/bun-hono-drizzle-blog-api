import { sql } from "drizzle-orm";

import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const blogs = sqliteTable("blogs", {
  id: integer("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  image: text("image"),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
  author: text("author"),
  description: text("description"),
});
