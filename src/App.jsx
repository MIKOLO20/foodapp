// src/App.jsx
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar   from './components/Navbar/Navbar'
import Cart     from './components/Cart/Cart'
import Menu     from './pages/Menu/Menu'
import Checkout from './pages/Checkout/Checkout'
import About    from './pages/About/About'
import Contact  from './pages/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [page,     setPage]     = useState('menu')
  const [cartOpen, setCartOpen] = useState(false)

  return (
    // ── IMPORTANT ──────────────────────────────────────────
    // Do NOT use a hardcoded colour here like background: '#0d0500'
    // That would override the theme. Use var(--bg) from globals.css
    // which automatically switches between dark and light.
    // ───────────────────────────────────────────────────────
    <div className="nj-app">

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'var(--card)',
            color: 'var(--accent-light)',
            border: '1px solid var(--accent)',
          }
        }}
      />

      <Navbar onCartOpen={() => setCartOpen(true)} onNavigate={setPage} />

      {page === 'menu' && <Menu />}
      {page === 'checkout' && <Checkout onBack={() => setPage('menu')} />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => setPage('checkout')}
      />
    </div>
  )
}

export default App
