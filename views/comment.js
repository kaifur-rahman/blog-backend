//importing dependencies
import express from 'express';
//configuring router
const router=express.Router();

//importing user controller
import * as commentController from "../controllers/comment.js";


//common endpoint /users

//to display all the comments stored in database
router.get("/",commentController.displayAll);

//to post a comment by a specific user
router.post("/:UserName/postComment",commentController.postComment);

//to delete a comment by a specific user
router.delete("/:UserName/deleteComment",commentController.deleteComment);

//to like a post by a specific user
router.post("/:UserName/likePost",commentController.likePost);

//to unlike a post by a specific user
router.put("/:UserName/unlikePost",commentController.unlikePost);


export default router