export default function AdminDashboardPage() {
  const cards = [
    { title: 'Doanh thu', value: '125.000.000đ' },
    { title: 'Tổng đơn hàng', value: '1.240' },
    { title: 'Tổng sản phẩm', value: '580' },
    { title: 'Tổng khách hàng', value: '3.410' },
  ]

  return (
    <section>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">{card.title}</p>
            <p className="mt-1 text-xl font-bold text-primary">{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
