export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-xl font-bold">Đăng nhập</h1>
      <form className="mt-4 space-y-3">
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Email" type="email" />
        <input className="w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Mật khẩu" type="password" />
        <button type="button" className="w-full rounded-lg bg-primary px-4 py-2 font-semibold text-white">
          Đăng nhập
        </button>
      </form>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <button type="button" className="rounded border border-slate-300 px-2 py-2">Google Login</button>
        <button type="button" className="rounded border border-slate-300 px-2 py-2">Facebook Login</button>
      </div>
    </section>
  )
}
