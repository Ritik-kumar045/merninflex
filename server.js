require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//let handle cors
var corsOptions = {
  origin: ["http://localhost:5173", "https://inflex-seven.vercel.app"],
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRouter);

//Admin routes
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
