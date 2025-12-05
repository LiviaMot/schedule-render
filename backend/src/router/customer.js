import express from "express";
import ControllerCustomer from '../controller/customer.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerCustomer.Login)

router.get('/customers', authMiddleware, ControllerCustomer.FindAll)
router.get('/customer/:id', ControllerCustomer.FindOne)
router.post('/customer', ControllerCustomer.Create)
router.put('/customer/:id', authMiddleware, ControllerCustomer.Update)
router.delete('/customer/:id', authMiddleware, ControllerCustomer.Delete)

export default router