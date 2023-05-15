const Product = require("../models/productModel");


//CREATE PRODUCTS

exports.createProducts = async (req,res,next) =>{
    const product = await Product.create(req.body);

    res.status(200).json({
    message:"Product Created Successfully",
    success:true,
    product})
}

exports.getAllProducts = (req,res) =>{
    res.status(200).json({message: "Route is working fine"})
}