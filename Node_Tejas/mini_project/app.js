import { log } from 'console';
import readline from 'readline';

const rl=readline.createInterface({
      input:process.stdin,
      output:process.stdout
})

const todos=[];
const showMenu=()=>{
      console.log("\n 1:Add a Task");
      console.log("   2:View Task");
      console.log("   3:Exit");
      rl.question("Choose an Option : ",handleinput)
      
}

const handleinput=(Option)=>{
    if(Option==="1"){
        rl.question("Enter the Task ",(task)=>{
            todos.push(task);
            console.log("Task added : ",task);
            showMenu();
        })
    }
    else if(Option==="2"){
        console.log("\n Your Todo List");
        todos.forEach((curTask,index)=>{
            console.log(`${index+1}. ${curTask}`);
        })
        showMenu();
    }
    else if(Option==="3"){
       console.log("Good Bye");
       rl.close();
    }else{
        console.log("Invalid Option.Please Try again");
        showMenu();
        
    }
}

showMenu();