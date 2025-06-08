const EventEmitter=require("events");
const emitter=new EventEmitter();

// emitter.on("greet",()=>{
//     console.log("Tejas");
// });

// emitter.emit("greet");


// emitter.on("greet",(username,Prof)=>{
//     console.log(`hello ${username}, you are a ${Prof}`);
// });

// emitter.emit("greet","Tejas","Full Stack Developer");



emitter.on("greet",(arg)=>{
    console.log(`hello ${arg.username}, you are a ${arg.Prof}`);
});

emitter.emit("greet",{username : "Tejas",Prof : "Full Stack Developer"});



