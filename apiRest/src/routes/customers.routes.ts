import { Router } from "express"
const router = Router()

import * as customersController from "../controllers/customers.controller"

router.get('/',customersController.getCustomers)
router.get('/:id',customersController.getCustomer)
router.post('/',customersController.createCustomer)
router.put('/:id',customersController.updateCustomer)
router.delete('/:id',customersController.deleteCustomer)

export {router}