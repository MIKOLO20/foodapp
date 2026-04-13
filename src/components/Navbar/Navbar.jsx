// src/components/Navbar/Navbar.jsx
import { ShoppingCart, UtensilsCrossed, Sun, Moon } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useTheme } from '../../context/ThemeContext'
import './Navbar.css'

const Navbar = ({ onCartOpen, onNavigate }) => {
  const { totalCount }      = useCart()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar navbar-dark sticky-top nj-nav px-3 px-md-4">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <UtensilsCrossed size={26} color="#f4a261" />
          <div>
            <div className="nj-brand">MikkyEats</div>
            <div className="nj-tagline">AUTHENTIC NIGERIAN FOOD</div>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <button
            className="btn btn-link nj-nav-link"
            onClick={() => onNavigate('menu')}
          >
            Menu
          </button>
          <button
            className="btn btn-link nj-nav-link"
            onClick={() => onNavigate('about')}
          >
            About Us
          </button>
          <button
            className="btn btn-link nj-nav-link"
            onClick={() => onNavigate('contact')}
          >
            Contact Us
          </button>
        </div>

        {/* Right side: theme toggle + cart */}
        <div className="d-flex align-items-center gap-2">

          {/* ── Dark/Light mode toggle button ── */}
          {/* Sun icon = currently dark, click for light */}
          {/* Moon icon = currently light, click for dark */}
          <button
            className="btn nj-theme-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark'
              ? <Sun size={20} color="#e9c46a" />
              : <Moon size={20} color="#e9c46a" />
            }
          </button>

          {/* Cart button */}
          <button
            className="btn btn-outline-warning d-flex align-items-center gap-2 position-relative rounded-pill px-3"
            onClick={onCartOpen}
          >
            <ShoppingCart size={18} />
            <span className="fw-semibold d-none d-sm-inline">Cart</span>
            {totalCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar