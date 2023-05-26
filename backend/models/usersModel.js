const mongoose = require("mongoose");
const Validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter Your name'],
        maxLength:[30,"Name Cannot exceeds 30 characters"],
        minLength:[4, "Name Should have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true, "please Enter Your Name"],
        unique:true,
        validate:[Validator.isEmail, "please enter a valid email"],
    },
    password:{
        type:String,
        required:[true, "please Enter Your Password"],
        minLength:[8, "Please Should Be Greater Than 8 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"User",
    },
    resetPasswordToken:String,
    reseatPasswordExpire:Date,
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {  
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRE
    })

}

module.exports = mongoose.model("User", userSchema)