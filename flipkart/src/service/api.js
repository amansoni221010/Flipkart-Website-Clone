// for api call call a package  npm i axios is used

import axios from 'axios';
// import {user} from '../../../server/model/user-schema';

const URL = 'http://localhost:8000'; 
// this url is the backend url which is running on th localhost: 8000 and we have to hit a end point that is signup so that we havw done in tht axios 

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
export const authenticateLogin=async(user)=>{
    try{

        //now we have to send the data inside the body so we use the POST
        return await axios.post(`${URL}/login`, user);
        // when we call any api all of them are asynchoronoua  
    }
    catch(error){
        console.log('Error while calling login api', error);
    }
}