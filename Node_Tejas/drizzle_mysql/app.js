import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";
import {eq} from "drizzle-orm";
const main = async () => {
    //! 1 : insert
    // const insertUser=await db.insert(usersTable).values({name:"vinod",age:"19",email:"test@thapa.com"});
    // console.log(insertUser);

    //!insert Multiple Users
    // const insertUser = await db.insert(usersTable).values([
    //     { name: "yash", age: "17", email: "yash@thapa.com" },
    //     { name: "om", age: "15", email: "om@thapa.com" },
    //     { name: "sai", age: "13", email: "sai@thapa.com" },
    // ])
    //     console.log(insertUser);

    //!Read all data
    // const users=await db.select().from(usersTable).where({email:"test@thapa.com"});
    // console.log(users);
    
    //!update
    // const updatedUser=await db
    // .update(usersTable)
    // .set({name:"bahdur"})
    // .where(eq(usersTable.email,"test@thapa.com"));
    // console.log(updatedUser);

    //!delete
        await db.delete(usersTable).where({email:"test@thapa.com"})
};

main().catch((error) => {
    console.log(error);
})