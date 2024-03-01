const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());

//Route ports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    server_health: "Ecommerce backend is working Fine",
    help: {
      demo: "those are some demo routes, for more check the code at https://github.com/mrayushmehrotra/ecom-backend",
      product_routes: {
        get_All_Products: "/api/v1/products",
        create_New_Product: "/api/v1/product/new",
        update_Delete_Get_Product: "/api/v1/product/:id",
      },
      user_routes: {
        register: "/api/v1/register",
        login: "/api/v1/login",
        forgot_password: "/api/v1/password/forgot",
        reset_password_with_token: "/api/v1/password/reset/:token",
        logout: "/api/v1/logout",
      },
    },
  });
});

//MiddleWare For error
app.use(errorMiddleware);

module.exports = app;
