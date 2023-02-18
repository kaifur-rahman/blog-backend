import mongoose from "mongoose";
//creating schema
const adminSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    pass:{type:String,required:true},
});
//exporting  user mongodb model 
export default mongoose.model("Admin",adminSchema);