import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../redux/cartSlice'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const dispatch = useDispatch()
  const { items, total } = useCart()

  if (!items.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <p>Giỏ hàng đang trống.</p>
        <Link to="/products" className="mt-3 inline-block rounded-lg bg-primary px-4 py-2 text-white">
          Mua ngay
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="grid items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 md:grid-cols-5">
          <img src={item.image} alt={item.name} className="h-16 w-full rounded object-cover md:w-24" />
          <p className="md:col-span-2">{item.name}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) || 1 }))}
            className="w-20 rounded-lg border border-slate-300 px-2 py-1"
          />
          <div className="flex items-center justify-between gap-3">
            <p className="font-semibold">{formatCurrency(item.discount * item.quantity)}</p>
            <button type="button" className="text-sm text-red-600" onClick={() => dispatch(removeFromCart(item.id))}>
              Xóa
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between rounded-xl bg-slate-900 p-4 text-white">
        <p>Tổng tiền</p>
        <p className="font-bold">{formatCurrency(total)}</p>
      </div>
      <Link to="/checkout" className="inline-block rounded-lg bg-cta px-4 py-2 font-semibold text-white">
        Tiếp tục thanh toán
      </Link>
    </div>
  )
}
