import { Router } from "express"
const router = Router()

import * as customerController from "../controllers/customers.controller"

router.get('/:user_id/:nombre_producto',customerController.getProductSpecialpricing)

export {router}