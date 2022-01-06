import express from "express";

import { editUser, deleteUser, logoutUser, seeUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get('/logout', logoutUser);
userRouter.get('/edit', editUser);
userRouter.get('/delete', deleteUser);
userRouter.get(':id', seeUser);

export default userRouter;