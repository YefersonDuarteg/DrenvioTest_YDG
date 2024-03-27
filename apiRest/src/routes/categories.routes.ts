import { Router } from "express"
const router = Router()

import * as categoriesController from "../controllers/categories.controller"

router.get('/',categoriesController.getCategories)
router.get('/:id',categoriesController.getCategory)
router.post('/',categoriesController.createCategory)
router.put('/:id',categoriesController.updateCategory)
router.delete('/:id',categoriesController.deleteCategory)

export {router}