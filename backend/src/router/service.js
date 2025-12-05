import express from "express";
import ControllerService from '../controller/service.js'

const router = express.Router()

router.get('/services', ControllerService.FindAll)
router.get('/service/:id', ControllerService.FindOne)
router.post('/service', ControllerService.Create)
router.put('/service/:id', ControllerService.Update)
router.delete('/service/:id', ControllerService.Delete)

export default router