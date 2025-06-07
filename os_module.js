const os=require("os");

console.log("platform",os.platform());
console.log("User : ",os.userInfo());

console.log("CPU Architecture : ",os.arch());

console.log("Free Memory : ",os.freemem(),"bytes");

console.log("Total Memor :",os.totalmem(),"bytes");

console.log("System Uptime :",os.uptime(),"seconds");

console.log("Home Directory :",os.homedir());


console.log("Temporary Directory :",os.tmpdir());
console.log("Operating System :",os.type());







