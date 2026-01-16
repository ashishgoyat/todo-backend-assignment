const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

const userroutes = require('./routes/user');
const todoroutes = require('./routes/todo');

// mount the routes
app.use('/user', userroutes);
app.use('/todo', todoroutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MonogoDB connected");
        app.listen(port, () => console.log(`server is running at http://localhost:${port}`));
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err.message);
    })


