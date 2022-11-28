import express from "express";
import Connection from "./database/db.js"; // compulsory to write extension name
import dotenv from "dotenv";
const app=express();
import cors from 'cors';
import bodyParser from "body-parser";
// cors error is occured when we use the frontend and the backend on two diffent portals
//  like here the frontend is opening on the localhost:3000 while the backend is opening on the localhost: 8000 so we have to install the cors package 

import DefaultData from './default.js'  // 8
import Router from './routes/route.js';


// this is the function of the express : 
// app.listen takes two arguments 1. port no
// 2nd argument : call back  function 

dotenv.config();  // line-4


app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);
const PORT=8000; //line-2

const USERNAME=process.env.DB_USERNAME; //5
const PASSWORD=process.env.DB_PASSWORD; //6

Connection( USERNAME, PASSWORD); //line-3 //7

app.listen( PORT,()=>console.log(`server is running successfully on port ${PORT}`) ); //line-1



DefaultData();
// after one time execution if i again save the data it will agin save like if i save the 7 data then it will become 14 data 
//  and for stoping this go to defalut.js file and write await