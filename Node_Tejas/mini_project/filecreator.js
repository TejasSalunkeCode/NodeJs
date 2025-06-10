import readline from 'readline';
import fs from 'fs';
import { stdout } from 'process';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const filecreation=()=>{
    rl.question('Enter Your filename : ',(filename)=>{
        rl.question("Enter the content for Your file : ",(content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.error(err)
                }else{
                    console.log(`file created succesfully: "${filename}.txt"`);
                    
                }
                rl.close();
            })
        })
    })
}

filecreation();