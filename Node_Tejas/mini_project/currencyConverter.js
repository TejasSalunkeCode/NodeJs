import https from "https";
import readline from "readline";
import chalk from "chalk";


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apiKey='1eeccfb59edc61c8c944107e';
const url=`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;



const convertCurrency=(amount,rate)=>{
    return (amount*rate).toFixed(2);
}



https.get(url,(response)=>{
     let data="";
response.on('data',(chunk)=>{
data+=chunk;
})

let result;
response.on('end',()=>{
    const rates=JSON.parse(data).conversion_rates;
    console.log(rates);

    rl.question("Enter amount in USD :",(amount)=>{
        rl.question("Enter currency To convert like (INR,ZMW,NPR)",(content)=>{
           const rate=rates[content.toUpperCase()];
           if(rate){
            console.log(chalk.red.bgGreen.bold(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${content}`));
           }else{
            console.log("Invalid Curreny Code");
           }
           rl.close();
        })
    })
})
  console.log(`${result}`);
  
})