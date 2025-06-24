import mongoose from "mongoose";

try {
     await mongoose.connect("mongodb://127.0.0.1/urlShortner");
        mongoose.set('debug',true);
} catch (error) {
    console.error(error);
    process.exit();
}

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true,min:5},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()},
})

//we will use middleware
userSchema.pre(["updateOne","updateMany","findOneUpdate"],
    function(next){
    this.set({updatedAt:Date.now()});
    // this.updateOne({},{$set:{updateOne}});
    next();
});

//step 2 : creating a model
const Users=mongoose.model("user",userSchema);



//step 3: to insert the data
await Users.updateOne({email:"tejas@gmail.com"},{$set:{age:101}});

await mongoose.connection.close();

// const newUser=new Test({
//     name:"Yash",
//     email:"yash@gail.com",
//     age:25,
// });

// await newUser.save();