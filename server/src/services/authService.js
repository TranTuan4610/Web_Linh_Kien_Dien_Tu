import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import { HttpError } from '../utils/httpError.js'

const users = []
let idCounter = 1

export const createUser = async ({ name, email, password }) => {
  const existing = users.find((user) => user.email === email)
  if (existing) throw new HttpError(409, 'Email đã tồn tại')

  const passwordHash = await bcrypt.hash(password, 10)
  const user = { id: idCounter++, name, email, passwordHash, role: 'customer' }
  users.push(user)
  return { id: user.id, name: user.name, email: user.email, role: user.role }
}

export const loginUser = async ({ email, password }) => {
  const user = users.find((value) => value.email === email)
  if (!user) throw new HttpError(401, 'Sai thông tin đăng nhập')

  const isMatch = await bcrypt.compare(password, user.passwordHash)
  if (!isMatch) throw new HttpError(401, 'Sai thông tin đăng nhập')

  const token = jwt.sign({ sub: user.id, role: user.role, email: user.email }, env.jwtSecret, { expiresIn: '1d' })
  return {
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  }
}
