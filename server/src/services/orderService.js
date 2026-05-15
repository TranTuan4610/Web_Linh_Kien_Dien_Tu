const orders = []
let orderIdCounter = 1

export const createOrder = ({ userId, items, paymentMethod, shippingAddress }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const order = {
    id: orderIdCounter++,
    userId,
    items,
    totalPrice,
    paymentMethod,
    shippingAddress,
    status: 'Chờ xác nhận',
    createdAt: new Date().toISOString(),
  }
  orders.push(order)
  return order
}

export const getOrdersByUser = (userId) => orders.filter((order) => order.userId === userId)
