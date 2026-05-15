import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'

export const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization
  if (!authorization?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Thiếu token xác thực' })
  }

  try {
    const token = authorization.slice(7)
    req.user = jwt.verify(token, env.jwtSecret)
    return next()
  } catch {
    return res.status(401).json({ message: 'Token không hợp lệ' })
  }
}
