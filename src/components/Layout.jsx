import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import InteractiveBackground from './InteractiveBackground.jsx'

export default function Layout() {
  const location = useLocation()

  // Scroll to top whenever we navigate to a different page/component.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <InteractiveBackground />
      <Nav />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
