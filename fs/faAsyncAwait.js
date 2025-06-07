const { error, log } = require("console");
const fs=require("fs");
const path=require("path");

const filename="faAsyncAwait.txt"
const filepath=path.join(__dirname,filename);
console.log(filepath);

const file=__dirname;

// fs.promises.readdir(file).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);  
// })


//read Directory
// const readFolder=async()=>{
// try {
//    const res=await fs.promises.readdir(file);
//    console.log(res);
   
// } catch (error) {
//     console.error(error);
// }
// }

// readFolder();


///write file

// const writefile=async()=>{
//     try {
//         const res=await fs.promises.writeFile(filepath,"the new file with new data","utf-8")
//         console.log(res);
//     } catch (error) {
//         console.error(error);
//     }
// }

// writefile();



//Read file

// const readfile=async()=>{
// try {
//     const data=await fs.promises.readFile(filepath,"utf-8")
//     console.log(data);
    
// } catch (error) {
//     console.log(error);
// }
// }
// readfile();

//update file

// const updatefile=async()=>{
//     try {
//         const res=await fs.promises.appendFile(filepath,"\n the new data added","utf-8")
//         console.log("data updated");
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatefile();




//delete file

const deletefile=async()=>{
    try {
        fs.promises.unlink(filepath,"utf-8")
        console.log("file deleted");
    } catch (error) {
        console.log(error);
        
    }
}
deletefile();