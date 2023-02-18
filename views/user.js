//importing dependencies
import express from 'express';
//configuring router
const router=express.Router();

//importing user controller
import * as userController from "../controllers/user.js";


//common endpoint /users

//homepage after user logs in to display all posts
router.get("/",userController.userHome);

//sigining up user with their details
router.post("/signup",userController.createUser);

//user posting a comment
router.post("/postComment",userController.postComment);

//user posting a comment
router.post("/deleteComment",userController.deleteComment);

//user liking a post
router.post("/likePost",userController.likePost);

//user unliking a post
 router.post("/unlikePost",userController.unlikePost);
 
 
    export default router