//importing dependecies
import express from 'express';
import mongoose from 'mongoose';

//importing models
import commentSchema from "../models/comment.js";
import userSchema from "../models/user.js";

//to display all the comments in database
function displayAll(req,res){
    commentSchema.find(function(err,comments){
        if(err){
            res.send("Error in finding comments in database: ");
        }else{
            res.send(comments);
        }
    })
    
};
//to post a comment by a specific user
function postComment(req,res){
    const newComment=new commentSchema({
        userName:req.params.UserName,
        userEmail:req.body.userEmail,
        comment:req.body.comment,
        commentId:req.body.commentId,
        postId:req.body.postId,
    })
    newComment.save(function(err){
        if(err){
            res.send("Error in posting a comment: "+err);
        }else{
            res.send("Successfully posted a comment on blog")
        }
    })
   
};
//to delete a comment by a specific user comment id has to be provided
function deleteComment(req,res){
    commentSchema.findOneAndDelete({commentId:req.body.commentId},function(err,deleted){
        if(err){
            res.send("Error in deleteing a comment by user: "+err)
        }else{
            res.send("Successfully deleted a comment"+deleted)
        }
    })
   
};
//to like a post by a specific user
function likePost(req,res){
    //checking whether user has already liked the post or not
    userSchema.findOne({email:req.body.email},function(err,userDetails){
        if(err){
            res.send("Error in finding user in database: "+err)
        }else{
            const likedHistory=userDetails.liked
            //iterating through liked post of user
            for (let i=0; i < likedHistory.length; i++) {
                if (likedHistory[i] == req.body.postId) {
                    //user has already liked the post ;
                    res.send("You have already liked this post")
                    return;
                }else{

                }
            }
                //user has not already liked the post so adding to his/her history
                userSchema.updateOne(
                    { email: req.body.email },
                    { $push: { liked: [req.body.postId] } },
                    function(err, result) {
                      if (err) {
                        res.send('Error in pushing liked post id in database '+err);
                      } else {
                        res.send('Successfully pushed liked post in liked array ');
                      }
                    }
                  )
            }
    })
};
//to unliking post by a specific user
function unlikePost(req,res){
   //finding user's details and deleting particular liked post id from his/her liked history
   userSchema.findOneAndUpdate({email:req.body.email},{$pull:{liked:{$in:[req.body.postId]}}},function(err,result){
    if(err){
        res.send("Error in finding user details from database: ")
    }else{
        res.send("successfully unliked post")

    }
   })
};

export {displayAll,postComment,deleteComment,likePost,unlikePost}