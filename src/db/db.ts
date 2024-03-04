import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { join } from "path";

const sqlite = new Database(join(__dirname, "./blogs.db"));
export const db = drizzle(sqlite);