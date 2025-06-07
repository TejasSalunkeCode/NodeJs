const EmitterEvent=require("events");
const emitter=new EmitterEvent();

const eventCount={
    "user-login":0,
    "user-purchase":0,
    "profile-update":0,
    "user-logout":0,
};



emitter.on("user-login",(username)=>{
    eventCount["user-login"]++;
    console.log(`hello ${username} you are log in`);
    
})

emitter.on("user-purchase",(username,tools)=>{
    eventCount["user-purchase"]++;
    console.log(`hello ${username} you are purchase ${tools}`);
    
})

emitter.on("profile-update",(username,field)=>{
    eventCount["profile-update"]++;
    console.log(`hello ${username} you are in ${field} section`);
    
})

emitter.on("user-logout",(username)=>{
    eventCount["user-logout"]++;
    console.log(`hello ${username} you are log out`);
    
})

emitter.on("summary",()=>{
    console.log(eventCount);
})




emitter.emit("user-login","thapa");
emitter.emit("user-purchase","thapa","Laptop");
// emitter.emit("profile-update","thapa","email");
// emitter.emit("user-logout","thapa");

emitter.emit("summary");