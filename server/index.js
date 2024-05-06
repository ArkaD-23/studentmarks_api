import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes.js"
dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database is connected ...........");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(bodyParser.json());

app.use("/people", userRoutes);
app.get("/", (req, res) => {res.send("Hello from the user!")});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});