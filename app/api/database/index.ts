import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  excerpt: text("excerpt"),
  imageURL: text("imageURL"),
});

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);
