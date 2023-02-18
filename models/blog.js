import mongoose from "mongoose";
//creating schema
const blogSchema=new mongoose.Schema({
    postId:{type:Number,required:true},
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:String,required:true},
    likes:{type:Number,default:0},
});
//exporting  user mongodb model 
export default mongoose.model("Blog",blogSchema);