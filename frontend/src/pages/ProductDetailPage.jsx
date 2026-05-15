import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { products } from '../data/products'
import { addToCart } from '../redux/cartSlice'
import { formatCurrency } from '../utils/formatCurrency'

export default function ProductDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const product = useMemo(() => products.find((item) => String(item.id) === id), [id])

  if (!product) return <p>Không tìm thấy sản phẩm.</p>

  return (
    <article className="grid gap-6 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-2">
      <img src={product.image} alt={product.name} className="h-80 w-full rounded-lg object-cover" />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2 text-sm text-slate-500">SKU: {product.sku}</p>
        <p className="mt-2 text-lg font-bold text-primary">{formatCurrency(product.discount)}</p>
        <p className="text-sm text-slate-500 line-through">{formatCurrency(product.price)}</p>
        <p className="mt-4 text-sm">{product.description}</p>
        <ul className="mt-4 space-y-1 text-sm text-slate-700">
          <li>Điện áp: {product.specs.voltage}</li>
          <li>Kích thước: {product.specs.size}</li>
          <li>Bảo hành: {product.specs.warranty}</li>
          <li>Tồn kho: {product.stock}</li>
        </ul>
        <button type="button" onClick={() => dispatch(addToCart(product))} className="mt-6 rounded-lg bg-cta px-4 py-2 font-semibold text-white">
          Thêm vào giỏ
        </button>
      </div>
    </article>
  )
}
