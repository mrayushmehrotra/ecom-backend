const mongoose = require("mongoose");

const productScehma = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter the Name of the product"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "please enter the details"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter the Product Price"],
        maxLength:[8,"price cannot exceeds 8 figures"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
      {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
      }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stocks"],
        maxLength:[4,"Stock cannot exceeds 4 characters"],
    default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productScehma);