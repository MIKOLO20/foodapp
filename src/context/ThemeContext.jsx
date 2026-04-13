// src/context/ThemeContext.jsx
//
// This controls the dark/light mode for the whole app.
// It saves the user's choice to localStorage so it's
// remembered even after they refresh the page.

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  // Read saved theme from localStorage, default to 'dark'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('naija-theme') || 'dark'
  )

  // Every time theme changes:
  // 1. Save it to localStorage
  // 2. Add the class to <html> so CSS variables kick in
  useEffect(() => {
    localStorage.setItem('naija-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Flip between dark and light
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Call useTheme() in any component to get theme + toggleTheme
export const useTheme = () => useContext(ThemeContext)