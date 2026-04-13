// src/data/foods.js
// All food items. Think of this as your mini database.
// Later replace this with a real API fetch call.

export const FOODS = [
  { id: 1,  name: 'Jollof Rice',           category: 'Rice',    price: 1800, image: '/images/jollof-rice.jpg', desc: 'Party-style jollof with smoky tomato base and fried plantain.' },
  { id: 2,  name: 'Fried Rice',            category: 'Rice',    price: 1900, image: '/images/fried-rice.jpg', desc: 'Nigerian-style fried rice with mixed veggies, liver and shrimps.' },
  { id: 3,  name: 'Coconut Rice',          category: 'Rice',    price: 2000, image: '/images/coconut-rice.jpg', desc: 'Fragrant rice cooked in coconut milk with bay leaves.' },
  { id: 4,  name: 'Ofada Rice & Stew',     category: 'Rice',    price: 2200, image: '/images/ofada-rice.jpg', desc: 'Local brown rice served with ayamase stew and assorted meat.' },
  { id: 5,  name: 'Egusi Soup',            category: 'Soup',    price: 2500, image: '/images/egusi soup.jpg', desc: 'Ground melon seed soup with spinach, assorted meat and stockfish.' },
  { id: 6,  name: 'Banga Soup',            category: 'Soup',    price: 2800, image: '/images/banga-soup.jpg', desc: 'Delta-style palm nut soup with catfish and periwinkle.' },
  { id: 7,  name: 'Ogbono Soup',           category: 'Soup',    price: 2400, image: '/images/ogbono-soup.jpg', desc: 'Draw soup from wild mango seeds with assorted meat.' },
  { id: 8,  name: 'Oha Soup',              category: 'Soup',    price: 2600, image: '/images/oha-soup.jpg', desc: 'Igbo delicacy with oha leaves, cocoyam and smoked fish.' },
  { id: 9,  name: 'Edikaikong',            category: 'Soup',    price: 2700, image: '/images/Edikaikong.jpg', desc: 'Calabar soup loaded with waterleaf, ugu and periwinkle.' },
  { id: 10, name: 'Pounded Yam',           category: 'Swallow', price: 800,  image: '/images/Pounded Yam.jpg', desc: 'Smooth silky pounded yam — pairs perfectly with any soup.' },
  { id: 11, name: 'Eba (Garri)',           category: 'Swallow', price: 500,  image: '/images/Eba.jpg', desc: 'Classic cassava swallow. Light, filling, best with egusi.' },
  { id: 12, name: 'Amala',                category: 'Swallow', price: 700,  image: '/images/Amala.jpg', desc: 'Yam flour swallow with a smooth dark texture. Yoruba staple.' },
  { id: 13, name: 'Fufu',                 category: 'Swallow', price: 600,  image: '/images/Fufu.jpg', desc: 'Fermented cassava swallow with a slightly sour taste.' },
  { id: 14, name: 'Suya',                 category: 'Protein', price: 1500, image: '/images/Suya.jpg', desc: 'Spiced beef skewers grilled over open flame with onion.' },
  { id: 15, name: 'Peppered Snail',       category: 'Protein', price: 3500, image: '/images/Peppered Snail.jpg', desc: 'Giant snails cooked in a rich pepper sauce. A real delicacy.' },
  { id: 16, name: 'Fried Fish',           category: 'Protein', price: 2000, image: '/images/Fried Fish.jpg', desc: 'Whole tilapia marinated in suya spice and deep fried.' },
  { id: 17, name: 'Asun (Peppered Goat)', category: 'Protein', price: 3000, image: '/images/Asun (Peppered Goat).jpg', desc: 'Smoky roasted goat meat tossed in a fiery pepper sauce.' },
  { id: 18, name: 'Akara',               category: 'Snacks',  price: 600,  image: '/images/Akara.jpg', desc: 'Deep-fried bean cake — crispy outside, soft inside.' },
  { id: 19, name: 'Moi Moi',             category: 'Snacks',  price: 700,  image: '/images/Moi Moi.jpg', desc: 'Steamed bean pudding with egg, fish and peppers.' },
  { id: 20, name: 'Fried Plantain',      category: 'Snacks',  price: 800,  image: '/images/Fried Plantain.jpg', desc: 'Sweet ripe plantain slices fried golden. Goes with everything.' },
  { id: 21, name: 'Puff Puff',           category: 'Snacks',  price: 500,  image: '/images/Puff Puff.jpg', desc: 'Sweet deep-fried dough balls — every Nigerian party staple.' },
  { id: 22, name: 'Bole & Fish',         category: 'Snacks',  price: 1200, image: '/images/Bole & Fish.jpg', desc: 'Roasted plantain and fish with palm oil pepper sauce.' },
  { id: 23, name: 'Zobo Drink',          category: 'Drinks',  price: 500,  image: '/images/Zobo Drink.jpg', desc: 'Chilled hibiscus drink with ginger and cloves.' },
  { id: 24, name: 'Kunu Zaki',           category: 'Drinks',  price: 400,  image: '/images/Kunu Zaki.jpg', desc: 'Northern Nigerian millet drink spiced with ginger.' },
  { id: 25, name: 'Fura da Nono',        category: 'Drinks',  price: 600,  image: '/images/Fura da Nono.jpg', desc: 'Fermented milk blended with millet balls. Thick and creamy.' },
]

// Creates ['All', 'Rice', 'Soup', 'Swallow', 'Protein', 'Snacks', 'Drinks']
export const CATEGORIES = ['All', ...Array.from(new Set(FOODS.map((f) => f.category)))]