import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function ProductsPage() {
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = useMemo(() => {
    let current = category === 'all' ? [...products] : products.filter((item) => item.category === category)
    if (sortBy === 'priceAsc') current.sort((a, b) => a.discount - b.discount)
    if (sortBy === 'priceDesc') current.sort((a, b) => b.discount - a.discount)
    if (sortBy === 'bestSeller') current.sort((a, b) => b.rating - a.rating)
    return current
  }, [category, sortBy])

  return (
    <div>
      <h1 className="text-2xl font-bold">Danh sách sản phẩm</h1>
      <div className="mt-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <select className="rounded-lg border border-slate-300 px-3 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Tất cả danh mục</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select className="rounded-lg border border-slate-300 px-3 py-2" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Mới nhất</option>
          <option value="bestSeller">Bán chạy</option>
          <option value="priceAsc">Giá tăng dần</option>
          <option value="priceDesc">Giá giảm dần</option>
        </select>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
