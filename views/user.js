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

//logging in user with their details
router.post("/login",userController.loginUser);

    export default router