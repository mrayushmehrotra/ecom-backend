const mongoose  = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.DATA_URI, {useNewUrlParser: true,useUnifiedTopology: true}).then((data)=>{
        console.log(`mongodb connect with ${data.connection.host}`);
        
        }).catch((err)=>{
            console.log(err);
        })
}

module.exports =connectDatabase