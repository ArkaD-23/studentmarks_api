import User from "../models/user.models.js";

export const createUsers = async (req, res) => {
    const {username, roll, maths, physics, chemistry} = req.body;
    const user = new User({username, roll, maths, physics, chemistry});
    try {
        await user.save();
        res
            .json(`${user.username} added to db successfully.......`);
    } catch (error) {
        console.log(error);
    }
}


