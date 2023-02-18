//configuring environment variables
import * as dotenv from 'dotenv'
dotenv.config();

//importing dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//configuring app
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=4000;

//configuring database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://"+process.env.dbUsername+":"+process.env.dbPass+"@cluster0.179uszz.mongodb.net/?retryWrites=true&w=majority") .then(() => console.log('Database Connected!'));

//importing routers/views 
import userRoutes from './views/user.js';
import adminRoutes from './views/admin.js';
import blogRoutes from './views/blog.js';
import commentRoutes from './views/comment.js';

//middlewares
app.get("/",function(req,res){
    res.send('This is homepage: goto /login with email and pass input post method')
});

app.use("/users",userRoutes);
app.use("/admin",adminRoutes);
app.use("/blogs",blogRoutes);
app.use("/comments",commentRoutes);

























//port
 app.listen(port,function(){
    console.log("Server started at port: "+port)
});