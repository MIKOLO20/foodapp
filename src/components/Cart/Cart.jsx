// src/components/Cart/Cart.jsx
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import toast from 'react-hot-toast'
import './Cart.css'

const Cart = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, removeFromCart, updateQty, totalPrice, clearCart } = useCart()

  const formatPrice = (p) => `₦${p.toLocaleString()}`

  const handleRemove = (item) => {
    removeFromCart(item.id)
    toast.error(`${item.name} removed`)
  }

  const handleClear = () => {
    clearCart()
    toast.success('Cart cleared')
  }

  return (
    <>
      {/* Overlay — clicking closes the cart */}
      {isOpen && <div className="nj-overlay" onClick={onClose} />}

      {/* Drawer — slides in from the right */}
      <div className={`nj-drawer d-flex flex-column ${isOpen ? 'nj-drawer--open' : ''}`}>

        {/* ── Header ── Bootstrap d-flex justify-content-between */}
        <div className="d-flex align-items-center justify-content-between p-3 nj-drawer-header">
          <h5 className="m-0 d-flex align-items-center gap-2 text-warning">
            <ShoppingBag size={20} />
            Your Cart
            <span className="badge bg-danger">{cartItems.length}</span>
          </h5>
          <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* ── Items ── Bootstrap overflow-auto flex-grow-1 */}
        <div className="flex-grow-1 overflow-auto p-3">
          {cartItems.length === 0 ? (
            // Empty state — Bootstrap text-center
            <div className="text-center py-5">
              <ShoppingBag size={48} color="#3d1f00" />
              <p className="mt-3 nj-muted">Your cart is empty.<br />Add some delicious food!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="nj-cart-item mb-3 p-3">

                {/* Top: emoji + name + delete */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <div style={{ fontSize: '1rem' }}>{item.name}</div>
                    <div>
                      <div className="fw-semibold nj-item-name">Qty: {item.qty}</div>
                      <small className="nj-muted">₦{item.price.toLocaleString()} each</small>
                    </div>
                  </div>
                  {/* Delete button */}
                  <button className="btn btn-sm nj-delete-btn" onClick={() => handleRemove(item)}>
                    <Trash2 size={14} />
                  </button>
                </div>

                {/* Bottom: qty controls + subtotal */}
                <div className="d-flex align-items-center justify-content-between">
                  {/* Bootstrap input-group for the qty controls */}
                  <div className="input-group input-group-sm nj-qty-group">
                    <button className="btn nj-qty-minus" onClick={() => updateQty(item.id, item.qty - 1)}>
                      <Minus size={12} />
                    </button>
                    <input
                      type="number" min="1" max="20"
                      value={item.qty}
                      onChange={(e) => updateQty(item.id, Number(e.target.value))}
                      className="form-control text-center nj-qty-input"
                    />
                    <button className="btn nj-qty-plus" onClick={() => updateQty(item.id, item.qty + 1)}>
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="fw-bold nj-subtotal">{formatPrice(item.price * item.qty)}</span>
                </div>

              </div>
            ))
          )}
        </div>

        {/* ── Footer ── */}
        {cartItems.length > 0 && (
          <div className="p-3 nj-drawer-footer">

            {/* Bootstrap d-flex justify-content-between for price rows */}
            <div className="d-flex justify-content-between mb-1">
              <small className="nj-muted">Delivery fee</small>
              <small className="nj-muted">₦500</small>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-bold text-warning">Total</span>
              <span className="fw-bold nj-gold fs-5">{formatPrice(totalPrice + 500)}</span>
            </div>

            {/* Checkout — Bootstrap w-100 btn */}
            <button
              className="btn w-100 d-flex align-items-center justify-content-center gap-2 mb-2 nj-checkout-btn"
              onClick={() => { onClose(); onCheckout() }}
            >
              Checkout <ArrowRight size={18} />
            </button>

            {/* Clear cart */}
            <button
              className="btn btn-link w-100 d-flex align-items-center justify-content-center gap-1 nj-clear-btn"
              onClick={handleClear}
            >
              <Trash2 size={13} /> Clear cart
            </button>

          </div>
        )}
      </div>
    </>
  )
}

export default Cart