const { error, log } = require("console");
const fs=require("fs");
const path=require("path");

const filename="fspromises.txt"
const filepath=path.join(__dirname,filename);
console.log(filepath);

const file=__dirname;

// fs.promises.readdir(file).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);  
// })

// fs.promises
// .readdir(file)
// .then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err);
// });

// write file
// fs.promises
// .writeFile(filepath,"this is the intial data 2","utf-8")
// .then(console.log("file created sucessfullly")
// ).catch((err)=>{
//     console.log(err);
// })


//Read file
// fs.promises
// .readFile(filepath,"utf-8")
// .then((data)=>console.log(data)
// ).catch((err)=>console.log(err)
// )

//update file
// fs.promises
// .appendFile(filepath,"\n this is updated data","utf-8")
// .then((data)=>console.log("updated dile")
// ).catch((err)=>{
//     console.log(err);
// })


//delete file
fs.promises
.unlink(filepath,"utf-8")
.then((console.log("file deleted")
)).catch((err)=>{
    console.log(err);
})