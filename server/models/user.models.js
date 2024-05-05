import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,
    },
    maths: {
        type: Number,
        integer: true,
    },
    physics: {
        type: Number,
        integer: true,
    },
    chemistry: {
        type: Number,
        integer: true,
    }
} , {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;