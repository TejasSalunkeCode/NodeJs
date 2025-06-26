import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";


// export const usersTable=mysqlTable("users_table",{
//   id:serial().primaryKey(),
//   name:varchar({length:255}).notNull(),
//   age:int().notNull(),
//   email:varchar({length:255}).notNull().unique(),  
// });



export const usersTable = mysqlTable("userss", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});


