import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const DefaultData=async ()=>{
    try{
        // await Product.deleteMany({}); // it will delete all the objects and then import the data
         await Product.insertMany(products);
console.log('data imported successfully');
    }
    catch(error){
        console.log("error while inserting the data", error.message);
    }
}

export default DefaultData;