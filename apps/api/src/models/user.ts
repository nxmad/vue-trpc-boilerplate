import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	nickname: varchar("nickname", {
		length: 255,
	}),
	email: varchar("email", {
		length: 255,
	}).unique(),
	password: text("password"),
});


export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
