import mongoose from "mongoose";
//Step 1 : to connect to mongoDB server
try {
    await mongoose.connect("mongodb://127.0.0.1/urlShortner");
    mongoose.set('debug',true);
} catch (error) {
    console.error(error);
    process.exit();    
}

//step 2 : create schema

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,min:5},
    createdAt:{type:Date,default:Date.now()},
});


//step 3 : creating a model

const Users=mongoose.model("user",userSchema);

await Users.create({name:"Tejas",age:19,email:"tejas@gmail.com"})

await mongoose.connection.close();