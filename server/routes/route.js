import express from 'express';
 import { userSignup } from '../controller/user-controller.js';
 import {userLogin} from '../controller/user-controller.js';
const router= express.Router();
 router.post ('/signup',userSignup) // if endpoint is equal to signup by this we can route

 router.post ('/login',userLogin) // if endpoint is equal to signup by this we can route

 export default router;

 // and now we have router this from the index.js
