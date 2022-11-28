// here we do the the validation of the data coming from the user by login and signup 

import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    firstname:{
        type:  String,
        required: true,
        trim: true,
        // trim uses if the user give space it remove all the spaces
        min: 5,
        max: 20
    },
    lastname: {
        type:  String,
        required: true,
        trim: true,
        // trim uses if the user give space it remove all the spaces
        min: 5,
        max: 20
    },
    username: {
        type:  String,
        required: true,
        trim: true,
        // trim uses if the user give space it remove all the spaces
        unique: true,
        index: true,
        lowercase: true,

    },
    email: {
        type:  String,
        required: true,
        trim: true,
        // trim uses if the user give space it remove all the spaces
        unique: true,
     
        lowercase: true,
    },
    password:{
        type: String,
        required: true,

    },
    phone:{
        type: String,
        required: true,
    }

});

const user=mongoose.model('user',userSchema); // here in the i written userSchema because we validate this 
export default user;