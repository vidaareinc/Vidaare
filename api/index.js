const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const port = process.env.PORT || 4000;
const userRoute = require("./routes/user.route.js")

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({extended: false}))
app.use("/api/user", userRoute);

// Connect to Database
connectDB();

app.listen(port, () => console.log(`Server is running on port ${port}`.white.bold));