export default function CheckoutPage() {
  return (
    <section className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-2xl font-bold">Thanh toán 3 bước</h1>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
        <li>Nhập thông tin nhận hàng (họ tên, số điện thoại, địa chỉ, ghi chú).</li>
        <li>Chọn phương thức thanh toán (COD / VNPay / MoMo).</li>
        <li>Xác nhận đơn hàng.</li>
      </ol>
      <form className="mt-4 grid gap-3">
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Họ tên" />
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Số điện thoại" />
        <input className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Địa chỉ" />
        <textarea className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Ghi chú" rows="3" />
        <button type="button" className="rounded-lg bg-primary px-4 py-2 font-semibold text-white">
          Xác nhận đơn hàng
        </button>
      </form>
    </section>
  )
}
