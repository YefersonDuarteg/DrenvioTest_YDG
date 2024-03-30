import { Router } from "express"
const router = Router()

import * as brandsController from "../controllers/brands.controller"

router.get('/',brandsController.getBrands)
router.get('/:id',brandsController.getBrand)
router.post('/',brandsController.createBrand)
router.put('/:id',brandsController.updateBrand)
router.delete('/:id',brandsController.deleteBrand)

export {router}