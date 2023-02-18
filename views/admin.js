//importing dependencies
import express from 'express';
//configuring router
const router=express.Router();

//importing admin controller
import * as adminController from "../controllers/admin.js";

//common endpoint /users
//to create new admin credentials
router.post("/createNewAdmin",adminController.createAdmin);

//homepage after user logs in to display all posts by admin
router.get("/:AdminName",adminController.adminHome);

//to create new blog by admin
router.post("/:AdminName/createBlog",adminController.createBlog);

//to update existing blog by admin
router.put("/:AdminName/updateBlog",adminController.updateBlog);

//to delete existing blog by admin
router.delete("/:AdminName/deleteBlog",adminController.deleteBlog);


export default router;
