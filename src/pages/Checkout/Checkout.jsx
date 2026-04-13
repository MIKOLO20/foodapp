// src/pages/Checkout/Checkout.jsx
import { useState } from 'react'
import { ArrowLeft, User, Phone, MapPin, CreditCard, ClipboardList, CheckCircle2, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import toast from 'react-hot-toast'
import './Checkout.css'

const Checkout = ({ onBack }) => {
  const { cartItems, totalPrice, clearCart } = useCart()

  const [form, setForm]     = useState({ name: '', phone: '', address: '', payment: 'cash' })
  const [errors, setErrors] = useState({})
  const [ordered, setOrdered] = useState(false)

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Please enter your name'
    if (!form.phone.trim())   e.phone   = 'Please enter your phone number'
    if (!form.address.trim()) e.address = 'Please enter your delivery address'
    return e
  }

  const placeOrder = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    clearCart()
    toast.success('Order placed successfully!')
    setOrdered(true)
  }

  const fmt = (p) => `₦${p.toLocaleString()}`

  // ── Success screen ──────────────────────────────────
  if (ordered) {
    return (
      <div className="container py-5 text-center">
        <CheckCircle2 size={72} color="#22c55e" />
        <h2 className="mt-3 nj-success-title">Order Placed!</h2>
        <p className="nj-muted mt-2">Thank you, <strong className="text-warning">{form.name}</strong>!</p>
        <p className="nj-muted">Delivering to: <strong style={{ color: '#e9c46a' }}>{form.address}</strong></p>
        <button className="btn rounded-pill px-5 mt-4 nj-back-btn" onClick={onBack}>
          <ShoppingBag size={18} className="me-2" /> Back to Menu
        </button>
      </div>
    )
  }

  return (
    <div className="container py-4">

      {/* Back button */}
      <button className="btn btn-link p-0 mb-4 d-flex align-items-center gap-1 nj-back-link" onClick={onBack}>
        <ArrowLeft size={18} /> Back to Menu
      </button>

      <h2 className="mb-4 nj-page-title">Checkout</h2>

      {/* Bootstrap row splits left (form) and right (summary) */}
      <div className="row g-4">

        {/* ── Left: delivery form ── */}
        <div className="col-lg-7">
          <div className="p-4 nj-form-card">

            <h5 className="mb-4 d-flex align-items-center gap-2 text-warning">
              <MapPin size={20} color="#e85d04" /> Delivery Details
            </h5>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label nj-label d-flex align-items-center gap-1">
                <User size={13} /> Full Name 
              </label>
              <input
                className={`form-control nj-input ${errors.name ? 'is-invalid' : ''}`}
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label nj-label d-flex align-items-center gap-1">
                <Phone size={13} /> Phone Number 
              </label>
              <input
                className={`form-control nj-input ${errors.phone ? 'is-invalid' : ''}`}
                type="number"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            {/* Address */}
            <div className="mb-3">
              <label className="form-label nj-label d-flex align-items-center gap-1">
                <MapPin size={13} /> Delivery Address 
              </label>
              <textarea
                className={`form-control nj-input ${errors.address ? 'is-invalid' : ''}`}
                rows={3}
                value={form.address}
                onChange={(e) => handleChange('address', e.target.value)}
                style={{ resize: 'none' }}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            {/* Payment */}
            <div className="mb-4">
              <label className="form-label nj-label d-flex align-items-center gap-1">
                <CreditCard size={13} /> Payment Method
              </label>
              {/* Bootstrap d-flex gap-4 for radio options */}
              <div className="d-flex gap-4 flex-wrap">
                {[
                  { value: 'cash',     label: 'Cash on Delivery' },
                  { value: 'transfer', label: 'Bank Transfer' },
                  { value: 'card',     label: 'Card (Soon)', disabled: true },
                ].map((opt) => (
                  <div key={opt.value} className="form-check">
                    <input
                      className="form-check-input" type="radio"
                      name="payment" id={opt.value} value={opt.value}
                      checked={form.payment === opt.value}
                      onChange={(e) => handleChange('payment', e.target.value)}
                      disabled={opt.disabled}
                    />
                    <label className="form-check-label nj-label" htmlFor={opt.value}>
                      {opt.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Place order */}
            <button className="btn w-100 d-flex align-items-center justify-content-center gap-2 nj-order-btn" onClick={placeOrder}>
              <ShoppingBag size={20} /> Place Order
            </button>

          </div>
        </div>

        {/* ── Right: order summary ── */}
        <div className="col-lg-5">
          <div className="p-4 nj-form-card nj-summary">
            <h5 className="mb-3 d-flex align-items-center gap-2 text-warning">
              <ClipboardList size={20} color="#e85d04" /> Order Summary
            </h5>

            {cartItems.map((item) => (
              <div key={item.id} className="d-flex justify-content-between mb-2">
                <small className="nj-muted">{item.name} × {item.qty}</small>
                <small className="nj-gold fw-semibold">{fmt(item.price * item.qty)}</small>
              </div>
            ))}

            <hr className="nj-divider" />

            <div className="d-flex justify-content-between mb-1">
              <small className="nj-muted">Subtotal</small>
              <small className="nj-muted">{fmt(totalPrice)}</small>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <small className="nj-muted">Delivery</small>
              <small className="nj-muted">₦500</small>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fw-bold text-warning">Total</span>
              <span className="fw-bold nj-gold fs-5">{fmt(totalPrice + 500)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout