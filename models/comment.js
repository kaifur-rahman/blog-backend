import mongoose from "mongoose";
//creating schema
const commentSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    comment:{type:String,required:true},
    commentId:{type:Number,required:true},
    postId:{type:Number,required:true},
});
//exporting  user mongodb model 
export default mongoose.model("Comment",commentSchema);