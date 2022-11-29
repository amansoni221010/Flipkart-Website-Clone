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
    response.status(500).json({message: error.message});
  }
 }

 
export const userLogin= async (request, response)=>{
    try{
   
      
        const username=request.body.username;  
        const password=request.body.password;  
      
    let  user=await User.findOne({ username: username , password: password});

    if(user){  // if the user exist then give this response 
        return response.status(200).json(`${username} login successfully`);
    }
    else{
        return response.status(401).json("Invalid Login ");
    }
        
    }

    catch(error){
       response.status(500).json('Error:' ,error);
     }
    }
   

 