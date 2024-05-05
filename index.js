import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});