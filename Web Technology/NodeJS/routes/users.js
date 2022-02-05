import express from "express";
import { createUser , getUsers , getUserById , deleteUser , updateUser } from "../controllers/users.js";


const router = express.Router();

router.get('/', getUsers);
router.post('/',createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;