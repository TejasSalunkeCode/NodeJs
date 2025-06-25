import mysql from "mysql2/promise";

//!1 : to connect tp mysql server
const db=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Tejas@1311",
    database:"mysql_db"
})
console.log("MYSQL connected Sucesfully");

//!2 : we need to creare a db
// await db.execute(`create database mysql_db`);
// console.log(await db.execute("SHOW DATABASES"));



//!3 : then we to create a table
// await db.execute(`
//     CREATE TABLE users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
//     );
//     `)



//!4 : is to perform CRUD operation
//?DO NOT USE
// await db.execute(`
//     insert into users(username,email) values('om','om21@gmail.com')
//     `);

//?USING PREPARED STATMENT
// await db.execute(
//   `INSERT INTO users (username, email) VALUES (?, ?)`,
//   ["vinod", "vinod@thapa.com"]
// );

//?best way
// const values=[
// ["sai","sai@gmail.com"],
// ["om","om@gmaiil.com"],
// ["yash","yash@gmail.com"],
// ["mohit","mohit9021@gmail.com"],
// ["shubh","shubh@gmail.com"],
// ];

// await db.query(
//   "INSERT INTO users (username, email) values ? ",[values]);

//!Read
const [rows]=await db.execute(`SELECT * FROM USERS`);
// const [rows]=await db.execute(`SELECT * FROM USERS WHERE username="yash"`);
console.log(rows);


//!Update
// try {
//     const [rows] = await db.execute("UPDATE users SET username='tejas salunke' WHERE email='om21@gmail.com'")
//     console.log("All rows",rows);
    
// } catch (error) {
//     console.log(error);
    
// }

//!Delete

// try {
//     const [rows] = await db.execute("DELETE FROM users users WHERE username='tejas salunke'")
//     console.log("All rows",rows);
    
// } catch (error) {
//     console.log(error);
    
// }

