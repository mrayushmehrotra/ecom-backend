const ErrorHandler = require("../Utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User  = require("../models/usersModel");


//Register A User

exports.registerUser = catchAsyncErrors( async(req,res,next) =>{
    const {name, email, password} = req.body;
    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample Id",
            url:"ProfilePicUrl"
        }
    });
    const token = user.getJWTToken();
    res.status(201).json({
        success:true,
        user,
        token,
    });
});


// Login 