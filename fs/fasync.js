// const { log } = require("console");
const { log } = require("console");
const fs=require("fs");
const path=require("path");

const filename="fasync.txt"
const filepath=path.join(__dirname,filename);
console.log(filepath);

//Writing data to file
// fs.writeFile(filepath,"This is the intial Data","utf-8",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file has been saved");  
//     }
// })


// reading data from file
// fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err){
//         console.error(err);
//     }else{
//         console.log(data);        
//     }
// })

//file update
// fs.appendFile(filepath,"\nThis is the intial updated Data","utf-8",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file has been updated");  
//     }
// })

//file  delete
fs.unlink(filepath,(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("file has been deleted");
    }
})