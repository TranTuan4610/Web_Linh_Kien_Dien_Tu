import { z } from 'zod'
import { createUser, loginUser } from '../services/authService.js'

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(6),
})

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export const register = async (req, res, next) => {
  try {
    const payload = registerSchema.parse(req.body)
    const user = await createUser(payload)
    return res.status(201).json(user)
  } catch (error) {
    return next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const payload = loginSchema.parse(req.body)
    const result = await loginUser(payload)
    return res.json(result)
  } catch (error) {
    return next(error)
  }
}

export const logout = async (req, res) => res.json({ message: 'Đăng xuất thành công phía client' })
