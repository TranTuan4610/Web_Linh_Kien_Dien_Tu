export const errorMiddleware = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error)
  }

  const statusCode = error.statusCode || 500
  return res.status(statusCode).json({
    message: statusCode === 500 ? 'Đã có lỗi máy chủ' : error.message,
  })
}
