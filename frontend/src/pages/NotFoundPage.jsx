import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-8 text-center">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="mt-2 text-sm">Trang bạn tìm không tồn tại.</p>
      <Link to="/" className="mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-white">
        Về trang chủ
      </Link>
    </section>
  )
}
