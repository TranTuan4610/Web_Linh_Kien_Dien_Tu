import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { formatCurrency } from '../utils/formatCurrency'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <motion.article whileHover={{ y: -4 }} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-40 w-full rounded-lg object-cover" loading="lazy" />
      </Link>
      <h3 className="mt-3 line-clamp-2 text-sm font-semibold">{product.name}</h3>
      <p className="mt-1 text-xs text-slate-500">SKU: {product.sku}</p>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-primary">{formatCurrency(product.discount)}</p>
          <p className="text-xs text-slate-500 line-through">{formatCurrency(product.price)}</p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(addToCart(product))}
          className="rounded-lg bg-cta px-3 py-2 text-xs font-semibold text-white"
        >
          Thêm giỏ
        </button>
      </div>
    </motion.article>
  )
}
