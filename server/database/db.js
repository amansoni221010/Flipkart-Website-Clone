import mongoose from "mongoose";

export const Connection= async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.be47vux.mongodb.net/?retryWrites=true&w=majority`;
try{
     await mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
     console.log("database connected successfully");
    // usenewparser passes the new url of the mongodb
    // useunifiedtopology is used for using the new server directory 
    // connect is a function in the mongoose
}
catch (error){
    console.log("Error while connecting with the database" ,error.message);
}
}
export default Connection;