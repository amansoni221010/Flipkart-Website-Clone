import User from '../model/user-schema.js'
// this is the api of the backend 
// and it containes two things request and response

export const userSignup= async (request, response)=>{
 try{

    const exist=await User.findOne({ username: request.body.username});
    if(exist){
        return response.status(400).json({message: 'Username already exist'});
    }
     const user=request.body;  
     const newUser= User(user);
     await newUser.save();
     response.status(200).json({message: user});
 }
 catch(error){
    response.status(200).json({message: error.message});
  }
 }
