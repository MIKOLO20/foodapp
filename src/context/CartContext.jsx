// src/context/CartContext.jsx
// Global cart state — any component can read/update the cart using useCart()

import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Add item — if already in cart just increase qty by 1
  const addToCart = (food) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === food.id)
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...food, qty: 1 }]
    })
  }

  // Remove item completely from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  // Change quantity — if qty goes to 0 remove the item
  const updateQty = (id, newQty) => {
    if (newQty <= 0) { removeFromCart(id); return }
    setCartItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, qty: newQty } : item)
    )
  }

  // Empty the whole cart
  const clearCart = () => setCartItems([])

  // Sum of all prices × quantities
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  // Total number of items (shown on the badge)
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalPrice, totalCount }}>
      {children}
    </CartContext.Provider>
  )
}

// Call useCart() in any component to access the cart
export const useCart = () => useContext(CartContext)