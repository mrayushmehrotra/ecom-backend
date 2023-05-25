const express =  require("express");
const app =  express();
const errorMiddleware = require('./middleware/error')
app.use(express.json());


//ROute ports
const product = require("./routes/productRoute");
app.use("/api/v1", product);

//MiddleWare For error
app.use(errorMiddleware)


module.exports = app;