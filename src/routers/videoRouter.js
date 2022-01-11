import express from "express";

// contorller에서 export한 두 router를 import
import { watchVideo, postEdit, getEdit, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;