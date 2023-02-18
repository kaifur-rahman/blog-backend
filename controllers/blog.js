import express from 'express';
import mongoose from 'mongoose';

//importing models
import blogModel from "../models/blog.js";

//to display all available post
function getAllPosts(req,res){
    blogModel.find(function(err,data){
        if(err){
            res.send("Error in finding posts from database")
        }else{
            res.send(data);
        }
      })
};

//to create new blog post
function createNew(req,res){
    const newPost=new blogModel(req.body)
    newPost.save()
    return(
     res.send("New blog post created successfully")
    )
};

//to update exisitng blog post must pass postId and admin can update only title or body
function updatePost(req,res){
    blogModel.findOneAndUpdate({postId:req.body.postId},{title:req.body.title,body:req.body.body}, {
        returnOriginal: false
      },function(err,resp){
        //couldnt update
        if(err){
            res.send('Could not update blog');
        }else{
            //successfully updated blog
            res.send('successfully updated blog');
        }
    })

};

//to delete existing blog post must pass postId
function deletePost(req,res){
    blogModel.findOneAndDelete({postId:req.body.postId}, function (err, docs) {
        if (err){
            res.send("Error in deleting blog post")
        }
        else{
            res.send("Successfully deleted blog post")
        }
     });
};

export {getAllPosts,createNew,updatePost,deletePost}