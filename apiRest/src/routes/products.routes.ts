import { Router } from "express"
const router = Router()

import * as productsController from "../controllers/products.controller"

router.get('/',productsController.getProducts)
router.get('/:id',productsController.getProduct)
router.post('/',productsController.createProduct)
router.put('/:id',productsController.updateProduct)
router.delete('/:id',productsController.deleteProduct)

export {router}