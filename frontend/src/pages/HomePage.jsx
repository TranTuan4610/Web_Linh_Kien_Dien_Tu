import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-500 p-6 text-white">
        <h1 className="text-3xl font-bold">Website linh kiện điện tử hiện đại</h1>
        <p className="mt-2 max-w-3xl text-sm text-blue-100">
          Tìm kiếm sản phẩm theo SKU, mua hàng nhanh, thanh toán online và theo dõi đơn hàng theo thời gian thực.
        </p>
        <Swiper className="mt-4" spaceBetween={16} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }}>
          {products.slice(0, 3).map((product) => (
            <SwiperSlide key={product.id}>
              <img src={product.image} alt={product.name} className="h-56 w-full rounded-xl object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <h2 className="mb-4 text-xl font-bold">Sản phẩm nổi bật</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
