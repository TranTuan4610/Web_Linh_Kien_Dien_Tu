import { Router } from 'express'
import { getOrders, postOrder } from '../controllers/orderController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/', authMiddleware, postOrder)
router.get('/', authMiddleware, getOrders)

export default router
