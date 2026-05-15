import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import { useCart } from '../hooks/useCart'
import { formatCurrency } from '../utils/formatCurrency'

export default function Header() {
  const { quantity, total } = useCart()

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page py-3">
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/" className="text-xl font-bold text-primary">
            LinhKiện247
          </Link>
          <input
            type="search"
            placeholder="Tìm theo tên, SKU, loại..."
            className="min-w-[180px] flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
          <Link className="rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50" to="/login">
            Tài khoản
          </Link>
          <Link className="rounded-lg bg-cta px-3 py-2 text-sm font-semibold text-white" to="/cart">
            Giỏ ({quantity}) • {formatCurrency(total)}
          </Link>
        </div>
        <nav className="mt-3 flex flex-wrap gap-2 text-sm">
          {categories.map((category) => (
            <Link key={category} to={`/products?category=${encodeURIComponent(category)}`} className="rounded-full bg-slate-100 px-3 py-1 hover:bg-slate-200">
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
