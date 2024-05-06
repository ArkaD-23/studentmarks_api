import express from "express";
import { createUsers } from "../controllers/createUsers.js";

const router = express.Router();

//router.get('/', seeUsers);
router.post('/', createUsers);
//router.get('/:id', getUser);
//router.delete('/:id', deleteUser);
//router.patch('/:id', updateUser);

export default router;