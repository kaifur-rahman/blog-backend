//configuring environment variables
import * as dotenv from 'dotenv'
dotenv.config();

//importing dependencies
import express from 'express';
import mongoose from 'mongoose';

//configuring app
const app=express();
const port=4000;

//configuring database
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://"+process.env.dbUsername+":"+process.env.dbPass+"@cluster0.179uszz.mongodb.net/?retryWrites=true&w=majority") .then(() => console.log('Database Connected!'));

























//port
 app.listen(port,function(){
    console.log("Server started at port: "+port)
});