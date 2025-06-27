// // import argon2 from "argon2";
// import bcrypt from "bcryptjs";

// async function hashPassword(password){
//     return bcrypt.hash(password,12)
// }

// async function verifyPassword(password,hashPassword) {
//     return bcrypt.compare(password,hashPassword);
// }

// const password1=Array.from({length:71}).fill("x").join("");

// const password2=Array.from({length:71}).fill("x").join("")+Math.random();

// console.log(password1,password2);

// const hashPassword1=await hashPassword(password1);
// const hashPassword2=await hashPassword(password2);

// console.log("1-1",await verifyPassword(password1,hashPassword));
// console.log("2-1",await verifyPassword(password2,hashPassword1));
// console.log("2-2",await verifyPassword(password2,hashPassword2));
// console.log("1-2",await verifyPassword(password1,hashPassword2));


import bcrypt from "bcryptjs";

async function hashPassword(password) {
    return bcrypt.hash(password, 12);
}

async function verifyPassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
}

const password1 = Array.from({ length: 71 }).fill("x").join("");
const password2 = Array.from({ length: 71 }).fill("x").join("") + Math.random();

console.log(password1, password2);

const hashPassword1 = await hashPassword(password1);
const hashPassword2 = await hashPassword(password2);

console.log("1-1", await verifyPassword(password1, hashPassword1));
console.log("2-1", await verifyPassword(password2, hashPassword1));
console.log("2-2", await verifyPassword(password2, hashPassword2));
console.log("1-2", await verifyPassword(password1, hashPassword2));
