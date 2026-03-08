import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyCTA from './StickyCTA'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
