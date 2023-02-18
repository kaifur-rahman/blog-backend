import mongoose from "mongoose";
//creating schema
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pass:{type:String,required:true},
    liked:{type:[Number]},
});
//exporting  user mongodb model 
export default mongoose.model("User",userSchema);