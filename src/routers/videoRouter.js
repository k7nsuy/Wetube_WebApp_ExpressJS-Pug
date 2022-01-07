import express from "express";

// contorller에서 export한 두 router를 import
import { watchVideo, postEdit, getEdit, uploadVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/upload', uploadVideo);
videoRouter.get('/:id(\\d+)', watchVideo);
videoRouter.post("/:id(\\d+)/edit", postEdit)
videoRouter.get('/:id/edit' , getEdit);
videoRouter.get('/:id/delete', deleteVideo);

export default videoRouter;