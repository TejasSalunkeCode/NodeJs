const { log } = require("console");
const fs=require("fs");
const path = require("path");


const filename="test.txt";
const filepath=path.join(filename)

// const writefile=fs.writeFileSync(
//     filepath,
//     "this is intial data",
//     "utf-8",
// )

// console.log(writefile);


const readfile=fs.readFileSync(filepath)
console.log(readfile);


const appendfile=fs.appendFileSync(
    filepath,"\n this is updated data",
    "utf-8",
)

console.log(appendfile);

let updatedfile="updatedTest.txt";
const newfile=path.join(__dirname,updatedfile)
const renamefile=fs.renameSync(filepath,newfile)
console.log(renamefile);
