import { Router } from 'express'
import { getProduct, getProducts, postProduct, putProduct, removeProduct } from '../controllers/productController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', authMiddleware, adminMiddleware, postProduct)
router.put('/:id', authMiddleware, adminMiddleware, putProduct)
router.delete('/:id', authMiddleware, adminMiddleware, removeProduct)

export default router
