//importing dependecies
import express from 'express';
import mongoose from 'mongoose';

//importing models
import userSchema from "../models/user.js";
import blogSchema from "../models/blog.js";

//logic to display all blog posts when user logs in
function userHome(req,res){
   blogSchema.find(function(err,blogs){
      if(err){
         res.send("Error in finding blogs from database");
      }else{
         res.send(blogs);
      }
   })
     
 }
//logic to create new user in our database
function createUser(req,res){
   //checking if email already exist in out database 
   userSchema.findOne({email:req.body.email},function(err,result){
      if(err){
         res.send("Error in iterating user's database: "+err);
      }else{
         if(result==null){
            //we can create user with given email id
            const newUser=new userSchema(req.body)
            newUser.save()
            return(
             res.send("New user created successfully")
            )
         }
         else{
            res.send("User already exist with this email id ")
         }
      }
   })

    
}
//logic to log in user
function loginUser(req,res){
   //finding user with email id in our database
   userSchema.findOne({email:req.body.email},function(err,result){
      if(err){
         console.log("Error in finding user in our database: "+err);
      }else if(result!=null){
         //verifying password
         if(result.pass==req.body.pass){
            res.send('login success')
         }
         //wrong password enetered by user
         else{
            res.send('incorrect password')
         }
         //no such email in our database
      }else{
         res.send("No such user exist")
      }
   })
     
 }
 //logic to allow user to post comment 
function postComment(req,res){
    return(
     res.send('Posting comment')
    )
     
 }
  //logic to allow user to delete comment 
function deleteComment(req,res){
    return(
     res.send('Deleting comment')
    )
     
 }
 //logic to allow user to like post 
function likePost(req,res){
    return(
     res.send('Liking post')
    )
     
 }
 //logic  to allow user to unlike post
function unlikePost(req,res){
    return(
     res.send('unlinking post')
    )
 }
export {userHome,createUser,loginUser,postComment,deleteComment,likePost,unlikePost}