//importing dependecies
import express from 'express';
import mongoose from 'mongoose';

//importing models
import userSchema from "../models/user.js";

//logic to display all posts 
function userHome(req,res){
    return(
     res.send('User home page after logging in displaying all posts')
    )
     
 }
//logic to create new user in our database
function createUser(req,res){
   const newUser=new userSchema(req.body)
   newUser.save()
   return(
    res.send("New user created successfully")
   )
    
}
//logic to log in user
function logUser(req,res){
    return(
     res.send('logging')
    )
     
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
export {userHome,createUser,logUser,postComment,deleteComment,likePost,unlikePost}