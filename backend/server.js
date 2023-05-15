const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

//Config
dotenv.config({path: "backend/config/config.env"});

//connection to database
connectDatabase();



app.listen(process.env.PORT, ()=>{
    console.log(`server is on http://localhost:${process.env.PORT}`)
});