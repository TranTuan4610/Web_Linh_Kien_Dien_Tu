const products = [
  {
    id: 1,
    name: 'Arduino UNO R3',
    sku: 'ARD-UNO-R3',
    price: 320000,
    discount: 279000,
    stock: 28,
    category: 'Arduino',
  },
  {
    id: 2,
    name: 'Cảm biến DHT22',
    sku: 'SEN-DHT22',
    price: 110000,
    discount: 89000,
    stock: 120,
    category: 'Cảm biến',
  },
]
let productIdCounter = 3

export const listProducts = () => products
export const getProductById = (id) => products.find((item) => item.id === Number(id))

export const createProduct = (payload) => {
  const product = { id: productIdCounter++, ...payload }
  products.push(product)
  return product
}

export const updateProduct = (id, payload) => {
  const index = products.findIndex((item) => item.id === Number(id))
  if (index === -1) return null
  products[index] = { ...products[index], ...payload }
  return products[index]
}

export const deleteProduct = (id) => {
  const index = products.findIndex((item) => item.id === Number(id))
  if (index === -1) return false
  products.splice(index, 1)
  return true
}
