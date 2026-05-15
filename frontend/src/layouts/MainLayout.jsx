import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="container-page py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
