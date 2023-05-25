const Product = require("../models/productModel");
const ErrorHandler = require("../Utils/errorHandler")

//CREATE PRODUCTS --Admin

exports.createProducts = async (req,res,next) =>{
    const product = await Product.create(req.body);

    res.status(200).json({
    message:"Product Created Successfully",
    success:true,
    product})
}

//Get All Product
exports.getAllProducts = async (req,res) =>{

    const products = await Product.find();
    res.status(200).json({success:true,
    products})
}


//Get A Product Details 
exports.getProductDetail = async(req,res,next) =>{
    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler("product not found", 500))
    }
    
    res.status(200).json({success:true,product})
    }




//Update Products --Admin

exports.updateProduct = async (req,res,next) =>{
    let product = Product.findById(req.param.id);
    if(!product){
        return res.status(500).json({success:false,
        message:"Product not found"
    })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body, {new:true,
    runValidators:true,
        useFindAndModify:false
});

res.status(200).json({success:true,
product})
}

//DELETE PRODUCT 

exports.deleteProduct = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product Not Found"
        });
      }
  
      await Product.deleteOne({ _id: req.params.id });
  
      res.status(200).json({
        success: true,
        message: "Product has been deleted successfully"
      });
    } catch (error) {
      // Handle any error that occurs during the deletion process
      next(error);
    }
  };
  




  