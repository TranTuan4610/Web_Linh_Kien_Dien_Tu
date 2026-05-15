import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useCart = () => {
  const items = useSelector((state) => state.cart.items)
  const summary = useMemo(() => {
    const quantity = items.reduce((total, item) => total + item.quantity, 0)
    const total = items.reduce((amount, item) => amount + item.discount * item.quantity, 0)
    return { quantity, total }
  }, [items])

  return { items, ...summary }
}
