// src/components/FoodCard/FoodCard.jsx
import { Plus, Check } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import './FoodCard.css'

const FoodCard = ({ food }) => {
  const { addToCart, cartItems } = useCart()

  const cartItem = cartItems.find((item) => item.id === food.id)
  const inCart   = !!cartItem

  const formatPrice = (price) => `₦${price.toLocaleString()}`

  return (
    <div className={`card h-100 nj-card ${inCart ? 'nj-card--active' : ''}`}>

      {/* ── Image area ── */}
      <div className="nj-food-img-wrap">
        <img src={food.image} alt={food.name} className="nj-food-img" loading="lazy" />
      </div>

      <div className="card-body d-flex flex-column">
        <span className="badge mb-2 align-self-start nj-cat-badge">{food.category}</span>
        <h5 className="card-title nj-card-title">{food.name}</h5>
        <p className="card-text flex-grow-1 nj-card-desc">{food.desc}</p>

        <div className="d-flex align-items-center justify-content-between mt-3">
          <span className="nj-price">{formatPrice(food.price)}</span>
          <button
            className={`btn btn-sm d-flex align-items-center gap-1 rounded-pill nj-add-btn ${inCart ? 'nj-add-btn--in' : ''}`}
            onClick={() => addToCart(food)}
          >
            {inCart
              ? <><Check size={13} /> In Cart ({cartItem.qty})</>
              : <><Plus size={13} /> Add</>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard