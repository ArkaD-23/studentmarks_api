import express from "express";
import User from "../models/user.models.js"

export const seeUsers = async (req, res) => {
    try {
        const collectionData = await User.find({});
        res.json(collectionData);
    } catch (error) {
        res.send(error);
    }
}