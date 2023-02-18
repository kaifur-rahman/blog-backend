//importing dependecies
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
            const saltRounds=10
            bcrypt.hash(req.body.pass, saltRounds, function(err, hashed) {
               // Store hash in your password DB.
               const newUser=new userSchema({
                  name:req.body.name,
                  email:req.body.email,
                  pass:hashed,
               })
               newUser.save()
           });
          
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
   userSchema.findOne({email:req.body.email},function(err,data){
      if(err){
         console.log("Error in finding user in our database: "+err);
      }else if(data!=null){
         //verifying password
         bcrypt.compare(req.body.pass,data.pass, function(err, result) {
            if(result==true){
               res.send('login success')
            }else{
               res.send('incorrect password')
            }
        });
         //no such email in our database
      }else{
         res.send("No such user exist")
      }
   })
     
 }

export {userHome,createUser,loginUser}