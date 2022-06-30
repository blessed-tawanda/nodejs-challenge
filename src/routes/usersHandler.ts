import { Router } from "express";
import { createUser, deleteUser, getUsers } from "../controllers";

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);

export default router;