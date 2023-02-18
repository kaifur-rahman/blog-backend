//importing dependecies
import express from 'express';
import mongoose from 'mongoose';

//importing models
import adminSchema from "../models/admin.js";
import blogSchema from "../models/blog.js";


//logic to create new admin credentials
function createAdmin(req,res){
    //it must be done from backend for security purpose
};

//logic to display all post posted by particular admin
function adminHome(req,res){
    blogSchema.find({author:req.params.AdminName},function(err,blogs){
        if(err){
            res.send("error in finding blogs by admin name:"+err)
        }else{
            res.send(blogs);
        }
    })
};

//logic to create new post by particular admin
function createBlog(req,res){
    const blogData={
        postId:req.body.postId,
        title:req.body.title,
        body:req.body.body,
        author:req.params.AdminName,
    }
    const newBlog=new blogSchema(blogData);
    newBlog.save(function(err){
        if(err){
            res.send("Error in creating new blog by admin")
        }else{
            res.send("New blog posted successfully by+ "+req.params.AdminName);
        }
    })
};

//logic to update existing post by particular admin he/she can update only body or title of post
//using post id and authorname==adminName
function updateBlog(req,res){
    blogSchema.findOneAndUpdate({postId:req.body.postId,author:req.params.AdminName},{title:req.body.title,body:req.body.body}, {
        returnOriginal: false
      },function(err,resp){
        //couldnt update
        if(err){
            res.send('Error in updating the blog by admin maybe blog doesn blog to admin ');
        }else{
            //successfully updated blog
            res.send('successfully updated blog');
        }
    })
};

//logic to delete exisiting post by particular admin
function deleteBlog(req,res){
    blogSchema.findOneAndDelete({postId:req.body.postId,author:req.params.AdminName}, function (err, docs) {
        if (err){
            res.send("Error in deleting blog post by admin")
        }
        else{
            res.send("Successfully deleted blog post")
        }
     });
   
};


export {adminHome,createAdmin,createBlog,updateBlog,deleteBlog}