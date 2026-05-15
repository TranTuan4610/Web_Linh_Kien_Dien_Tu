export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-900 py-8 text-slate-200">
      <div className="container-page grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">LinhKiện247</h3>
          <p className="mt-2 text-sm">Hotline: 1900 1234 • Email: support@linhkien247.vn</p>
        </div>
        <div>
          <h3 className="font-semibold">Chính sách</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Bảo hành</li>
            <li>Đổi trả</li>
            <li>Vận chuyển</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Kết nối</h3>
          <p className="mt-2 text-sm">Facebook • YouTube • Zalo</p>
        </div>
      </div>
    </footer>
  )
}
