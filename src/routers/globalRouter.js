// server.js 에서 express를 import 하였어도 독립적인 새로운 공간이기 때문에
// 새로 express를 improt 해주어야 함
import express from "express";

// 다른 controller에 있는 routers 를 import
import { home, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/join' , join);
globalRouter.get('/login', login);
globalRouter.get('/search', search);

// export router for using server.js
export default globalRouter;

