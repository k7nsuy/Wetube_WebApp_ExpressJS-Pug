import express from "express";

// contorller에서 export한 두 router를 import
import { seeVideo, editVideo, uploadVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/upload', uploadVideo);
videoRouter.get('/:id(\\d+)', seeVideo);
videoRouter.get('/:id/edit' , editVideo);
videoRouter.get('/:id/delete', deleteVideo);

export default videoRouter;