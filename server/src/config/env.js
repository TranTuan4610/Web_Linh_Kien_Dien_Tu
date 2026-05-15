import dotenv from 'dotenv'

dotenv.config()

if (!process.env.JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET is required in production environment')
  }
  console.warn('JWT_SECRET is not set. Using development fallback secret.')
}

export const env = {
  port: Number(process.env.PORT || 5000),
  jwtSecret: process.env.JWT_SECRET || 'dev_secret_key_change_me',
}
