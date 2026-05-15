import { z } from 'zod'
import { createOrder, getOrdersByUser } from '../services/orderService.js'

const orderSchema = z.object({
  items: z.array(
    z.object({
      productId: z.number().int().positive(),
      quantity: z.number().int().positive(),
      price: z.number().nonnegative(),
    }),
  ),
  paymentMethod: z.enum(['COD', 'VNPay', 'MoMo']),
  shippingAddress: z.string().min(5),
})

export const postOrder = (req, res, next) => {
  try {
    const payload = orderSchema.parse(req.body)
    const order = createOrder({ ...payload, userId: Number(req.user.sub) })
    return res.status(201).json(order)
  } catch (error) {
    return next(error)
  }
}

export const getOrders = (req, res) => res.json(getOrdersByUser(Number(req.user.sub)))
