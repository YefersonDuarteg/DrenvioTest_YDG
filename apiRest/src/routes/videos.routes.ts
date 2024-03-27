import { Router } from "express"
const router = Router()

import * as videoController from "../controllers/videos.controller"

router.get('/',videoController.getVideos)
router.get('/:id',videoController.getVideo)
router.post('/',videoController.createVideos)
router.put('/:id',videoController.updateVideo)
router.delete('/:id',videoController.deleteVideo)

export {router}