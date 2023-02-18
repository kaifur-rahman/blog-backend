//importing dependencies
import express from 'express';
//configuring router
const router=express.Router();

//importing blog controller
import * as blogController from "../controllers/blog.js";


//to view all blogpost
router.get("/",blogController.getAllPosts);
//to create new blogpost
router.post("/create",blogController.createNew);
//to update existing blogpost
router.put("/update",blogController.updatePost);
//to delete existing blogpost
router.delete("/delete",blogController.deletePost);

export default router