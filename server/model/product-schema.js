import mongoose from "mongoose";
// here we validate the push data , or when we put the data in the files
const productSchema =new mongoose.Schema({

id: String,
url: String,
detailUrl: String,
title: Object,
price: Object,
quantity: Number,
description: String,
discount: String,
tagline: String

});

const Product =mongoose.model('product',productSchema);
//  here inside the model i have taken the product by our choice name 
// when we use it it will convert into product's in the mongodb file ecommerce

export default Product;