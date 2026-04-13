// src/pages/Menu/Menu.jsx
import { useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { FOODS, CATEGORIES } from '../../data/food'
import FoodCard from '../../components/FoodCard/FoodCard'
import './Menu.css'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  // Filter foods by category AND search text
  const filteredFoods = FOODS
    .filter((f) => activeCategory === 'All' ? true : f.category === activeCategory)
    .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>

      {/* ── Hero ── */}
      <div className="text-center py-5 px-3 nj-hero" style={{
        backgroundImage: 'url(/images/ofada-rice.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <h1 className="nj-hero-title mt-2">Authentic Nigerian Food</h1>
        <p className="nj-hero-sub mx-auto mt-2 mb-4">
          From jollof rice to egusi soup — order fresh traditional dishes delivered to your door.
        </p>

        {/* Search bar — Bootstrap input-group */}
        <div className="d-flex justify-content-center">
          <div className="input-group nj-search-group">
            <span className="input-group-text nj-search-icon">
              <Search size={16} color="#c9a87c" />
            </span>
            <input
              type="text"
              className="form-control nj-search-input"
              placeholder="Search for a dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Clear button — only shows when typing */}
            {search && (
              <button className="btn nj-search-clear" onClick={() => setSearch('')}>
                <X size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Category filter bar ── */}
      <div className="nj-filter-bar d-flex align-items-center gap-2 px-3 py-2 overflow-auto">
        <SlidersHorizontal size={15} color="#c9a87c" className="flex-shrink-0" />
        <span className="nj-filter-label flex-shrink-0">Filter:</span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            // Bootstrap btn — add active class for the selected one
            className={`btn btn-sm flex-shrink-0 rounded-pill nj-cat-btn ${activeCategory === cat ? 'nj-cat-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Food grid ── */}
      <div className="container py-4">

        {/* Result count */}
        <p className="nj-result-count mb-3">
          Showing <strong>{filteredFoods.length}</strong> dish{filteredFoods.length !== 1 ? 'es' : ''}
          {activeCategory !== 'All' && ` in "${activeCategory}"`}
          {search && ` matching "${search}"`}
        </p>

        {/* No results */}
        {filteredFoods.length === 0 ? (
          <div className="text-center py-5">
            <Search size={48} color="#3d1f00" />
            <p className="nj-muted mt-3">No dishes found. Try a different search or category.</p>
            <button
              className="btn rounded-pill mt-2 nj-clear-filter-btn"
              onClick={() => { setSearch(''); setActiveCategory('All') }}
            >
              <X size={14} /> Clear filters
            </button>
          </div>
        ) : (
          // Bootstrap grid: 1 col → 2 col → 3 col → 4 col as screen gets bigger
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            {filteredFoods.map((food) => (
              <div key={food.id} className="col">
                <FoodCard food={food} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu