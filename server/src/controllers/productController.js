import { z } from 'zod'
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from '../services/productService.js'
import { HttpError } from '../utils/httpError.js'

const productSchema = z.object({
  name: z.string().min(2),
  sku: z.string().min(3),
  price: z.number().nonnegative(),
  discount: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  category: z.string().min(2),
})

export const getProducts = (req, res) => res.json(listProducts())

export const getProduct = (req, res, next) => {
  try {
    const product = getProductById(req.params.id)
    if (!product) throw new HttpError(404, 'Không tìm thấy sản phẩm')
    return res.json(product)
  } catch (error) {
    return next(error)
  }
}

export const postProduct = (req, res, next) => {
  try {
    const payload = productSchema.parse(req.body)
    return res.status(201).json(createProduct(payload))
  } catch (error) {
    return next(error)
  }
}

export const putProduct = (req, res, next) => {
  try {
    const payload = productSchema.partial().parse(req.body)
    const updated = updateProduct(req.params.id, payload)
    if (!updated) throw new HttpError(404, 'Không tìm thấy sản phẩm')
    return res.json(updated)
  } catch (error) {
    return next(error)
  }
}

export const removeProduct = (req, res, next) => {
  try {
    const deleted = deleteProduct(req.params.id)
    if (!deleted) throw new HttpError(404, 'Không tìm thấy sản phẩm')
    return res.status(204).send()
  } catch (error) {
    return next(error)
  }
}
