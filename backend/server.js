const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
//handling Unchaught Exceptions 
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Error in Server due to uncaught Exceptions");
    process.exit(1);
});


//Config
dotenv.config({path: "backend/config/config.env"});

//connection to database
connectDatabase();


const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is on http://localhost:${process.env.PORT}`)
});


//unhandled Rejection handle

process.on("unhandledRejection", err=>{
    console.log(`Error ${err.message}`);
    console.log("Shutting Down the server due to unhandled Promise Rejection");
    server.close(()=>{
        process.exit(1);
    });
})