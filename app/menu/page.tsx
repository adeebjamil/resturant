'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaUtensils, 
  FaBreadSlice, 
  FaBowlFood,
  FaBurger,
  FaHotdog,
  FaPizzaSlice,
  FaDrumstickBite,
  FaFish,
  FaAppleWhole,
  FaGlassWater,
  FaCakeCandles,
  FaStar,
  FaClock,
  FaFire,
  FaPepperHot
} from 'react-icons/fa6'
import { FaCoffee, FaSearch } from 'react-icons/fa'
import { 
  GiNoodles, 
  GiFrenchFries, 
  GiWrappedSweet,
  GiTacos,
  GiChocolateBar,
  GiMilkCarton,
  GiOrangeSlice,
  GiCarrot
} from 'react-icons/gi'
import { IoGridOutline, IoListOutline, IoFilterOutline } from 'react-icons/io5'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All Items', icon: FaUtensils },
    { id: 'porotta-sandwich', name: 'Porotta Sandwich', icon: FaBreadSlice },
    { id: 'tea-special', name: 'Tea Special', icon: FaCoffee },
    { id: 'soup-point', name: 'Soup Point', icon: FaBowlFood },
    { id: 'burger-specials', name: 'Burger Specials', icon: FaBurger },
    { id: 'club-sandwich', name: 'Club Sandwich', icon: FaBurger },
    { id: 'wrap-sandwich', name: 'Wrap Sandwich', icon: GiTacos },
    { id: 'shawarma-point', name: 'Shawarma Point', icon: GiTacos },
    { id: 'sandwich', name: 'Sandwich', icon: FaBurger },
    { id: 'brosted-chicken', name: 'Brosted Chicken', icon: FaDrumstickBite },
    { id: 'chicken-strips', name: 'Chicken Strips', icon: FaDrumstickBite },
    { id: 'corn-dog', name: 'Corn Dog', icon: FaHotdog },
    { id: 'pasta-point', name: 'Pasta Point', icon: GiNoodles },
    { id: 'indomie-special', name: 'Indomie Special', icon: GiNoodles },
    { id: 'loaded-fries', name: 'Loaded Fries', icon: GiFrenchFries },
    { id: 'plate-items', name: 'Plate Items', icon: FaUtensils },
    { id: 'fresh-juices', name: 'Fresh Juices', icon: FaGlassWater },
    { id: 'special-juices', name: 'Special Juices', icon: GiOrangeSlice },
    { id: 'chrush-milk-shakes', name: 'Chrush Milk Shakes', icon: GiMilkCarton },
    { id: 'passion-mix', name: 'Passion Mix', icon: FaGlassWater },
    { id: 'mojito-juice', name: 'Mojito Juice', icon: FaGlassWater },
    { id: 'health-juice', name: 'Health Juice', icon: GiCarrot },
    { id: 'fruits-bricks', name: 'Fruits Bricks', icon: FaAppleWhole },
    { id: 'dessert-items', name: 'Dessert Items', icon: FaCakeCandles }
  ]

  const menuItems = [
    {
      id: 1,
      name: "Grilled Salmon",
      category: "seafood",
      price: 28,
      originalPrice: 35,
      description: "Fresh Atlantic salmon grilled to perfection with lemon butter sauce and seasonal vegetables",
      image: "/menu/salmon.jpg",
      rating: 4.8,
      reviews: 156,
      tags: ["Popular", "Healthy"],
      spicyLevel: 0,
      calories: 320,
      cookTime: "15 mins"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "pizza", 
      price: 18,
      originalPrice: null,
      description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil on our handmade dough",
      image: "/menu/pizza.webp",
      rating: 4.6,
      reviews: 203,
      tags: ["Vegetarian", "Classic"],
      spicyLevel: 0,
      calories: 280,
      cookTime: "12 mins"
    },
    {
      id: 3,
      name: "Wagyu Beef Burger",
      category: "burgers",
      price: 32,
      originalPrice: 38,
      description: "Premium wagyu beef patty with truffle aioli, aged cheddar, and caramelized onions",
      image: "/menu/burger.jpg",
      rating: 4.9,
      reviews: 89,
      tags: ["Premium", "Chef's Special"],
      spicyLevel: 1,
      calories: 650,
      cookTime: "18 mins"
    },
    {
      id: 4,
      name: "Lobster Ravioli",
      category: "pasta",
      price: 26,
      originalPrice: null,
      description: "Handmade ravioli filled with fresh lobster in a creamy saffron sauce",
      image: "/menu/ravioli.jpg",
      rating: 4.7,
      reviews: 124,
      tags: ["Signature", "Seafood"],
      spicyLevel: 0,
      calories: 420,
      cookTime: "20 mins"
    },
    {
      id: 5,
      name: "Caesar Salad",
      category: "appetizers",
      price: 14,
      originalPrice: null,
      description: "Crisp romaine lettuce with our house Caesar dressing, parmesan, and croutons",
      image: "/menu/caesar.jpg",
      rating: 4.4,
      reviews: 67,
      tags: ["Classic", "Healthy"],
      spicyLevel: 0,
      calories: 180,
      cookTime: "5 mins"
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: 12,
      originalPrice: null,
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      image: "/menu/lava-cake.jpg",
      rating: 4.8,
      reviews: 234,
      tags: ["Popular", "Indulgent"],
      spicyLevel: 0,
      calories: 450,
      cookTime: "8 mins"
    },
    {
      id: 7,
      name: "Craft Beer Selection",
      category: "beverages",
      price: 8,
      originalPrice: null,
      description: "Rotating selection of local craft beers on tap",
      image: "/menu/beer.jpg",
      rating: 4.5,
      reviews: 98,
      tags: ["Local", "Craft"],
      spicyLevel: 0,
      calories: 150,
      cookTime: "Instant"
    },
    {
      id: 8,
      name: "Ribeye Steak",
      category: "mains",
      price: 45,
      originalPrice: 52,
      description: "12oz prime ribeye steak grilled to your preference with garlic mashed potatoes",
      image: "/menu/steak.jpeg",
      rating: 4.9,
      reviews: 176,
      tags: ["Premium", "Bestseller"],
      spicyLevel: 0,
      calories: 720,
      cookTime: "25 mins"
    },
    // Poratta Items
    {
      id: 9,
      name: "Butter Chicken Poratta",
      category: "porotta-sandwich",
      price: 8.50,
      originalPrice: null,
      description: "Crispy poratta served with rich and creamy butter chicken curry",
      image: "/menu/butter-chicken-poratta.webp",
      rating: 4.6,
      reviews: 124,
      tags: ["Popular", "Spicy"],
      spicyLevel: 2,
      calories: 580,
      cookTime: "15 mins"
    },
    {
      id: 10,
      name: "Chicken Poratta",
      category: "porotta-sandwich",
      price: 7.50,
      originalPrice: null,
      description: "Flaky poratta served with spiced chicken curry",
      image: "/menu/chicken-poratta.jpg",
      rating: 4.5,
      reviews: 156,
      tags: ["Popular", "Classic"],
      spicyLevel: 2,
      calories: 540,
      cookTime: "15 mins"
    },
    {
      id: 11,
      name: "Masala Tea",
      category: "tea-special",
      price: 3.50,
      originalPrice: null,
      description: "Traditional spiced tea with aromatic Indian spices",
      image: "/menu/masala-tea.jpeg",
      rating: 4.5,
      reviews: 312,
      tags: ["Traditional", "Hot"],
      spicyLevel: 1,
      calories: 45,
      cookTime: "5 mins"
    },
    {
      id: 12,
      name: "Cream of Mushroom Soup",
      category: "soup-point",
      price: 6.50,
      originalPrice: null,
      description: "Rich and creamy mushroom soup with herbs",
      image: "/menu/mushroom-soup.jpg",
      rating: 4.5,
      reviews: 123,
      tags: ["Creamy", "Vegetarian"],
      spicyLevel: 0,
      calories: 180,
      cookTime: "10 mins"
    }
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'popular':
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes gentleGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.2);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-gentle-glow:focus {
          animation: gentleGlow 2s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Modern Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 animate-fade-in-down">
          <div className="container mx-auto px-4 py-4">
            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Restaurant Menu
                </h1>
                <div className="flex items-center space-x-4 animate-slide-in-left stagger-1">
                  <span className="text-sm text-gray-600 animate-pulse-gentle">{filteredItems.length} items</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
                    >
                      <IoGridOutline className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-400'}`}
                    >
                      <IoListOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 animate-slide-in-left stagger-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all animate-gentle-glow"
                  />
                  <FaSearch className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 animate-float" />
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                >
                  <option value="popular">Popular</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-low">Price ↑</option>
                  <option value="price-high">Price ↓</option>
                </select>
              </div>
            </div>

            {/* Mobile Header */}
            <div className="md:hidden">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Menu
                </h1>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <IoFilterOutline className="w-5 h-5" />
                  </button>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}
                    >
                      <IoGridOutline className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}
                    >
                      <IoListOutline className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-100 border-0 rounded-full px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500 transition-all"
                />
                <FaSearch className="absolute right-4 top-3.5 w-4 h-4 text-gray-400" />
              </div>

              {/* Mobile Filters */}
              {showMobileFilters && (
                <div className="mb-4 p-4 bg-white rounded-xl border border-gray-200 animate-fade-in-up">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-gray-100 border-0 rounded-lg px-3 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="popular">Popular</option>
                      <option value="rating">Top Rated</option>
                      <option value="price-low">Price ↑</option>
                      <option value="price-high">Price ↓</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Items found: {filteredItems.length}
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar Categories - Desktop Only */}
            <aside className="hidden lg:block w-80 bg-white rounded-2xl p-6 h-fit sticky top-24 shadow-sm animate-slide-in-left stagger-3">
              <h2 className="text-lg font-semibold mb-6 text-gray-900 animate-fade-in-up">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <IconComponent className="text-lg" />
                      <span className="font-medium">{category.name}</span>
                      <span className="ml-auto text-xs opacity-60">
                        {menuItems.filter(item => category.id === 'all' || item.category === category.id).length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Mobile Categories */}
              <div className="lg:hidden mb-6 animate-fade-in-up stagger-4">
                <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex-shrink-0 flex flex-col items-center space-y-1 p-3 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 min-w-[80px] ${
                          selectedCategory === category.id
                            ? 'bg-orange-500 text-white shadow-lg'
                            : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
                        }`}
                      >
                        <IconComponent className="text-lg" />
                        <span className="text-center leading-tight">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Menu Items */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {sortedItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        {/* Tags */}
                        <div className="absolute top-2 md:top-3 left-2 md:left-3 flex flex-wrap gap-1 md:gap-2">
                          {item.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="bg-white/90 text-gray-800 px-2 py-0.5 md:py-1 rounded-full text-xs font-medium animate-scale-in"
                              style={{ animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Price */}
                        <div className="absolute top-2 md:top-3 right-2 md:right-3 animate-scale-in" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 md:px-3 py-1">
                            <div className="flex items-center space-x-1">
                              {item.originalPrice && (
                                <span className="text-gray-500 line-through text-xs md:text-sm">${item.originalPrice}</span>
                              )}
                              <span className="font-bold text-orange-600 text-sm md:text-base">${item.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 md:p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-gray-900 text-base md:text-lg line-clamp-1">{item.name}</h3>
                          {item.spicyLevel > 0 && (
                            <div className="flex space-x-1">
                              {Array(item.spicyLevel).fill(0).map((_, i) => (
                                <FaPepperHot key={i} className="text-red-500 text-xs md:text-sm animate-sparkle" style={{ animationDelay: `${i * 0.2}s` }} />
                              ))}
                            </div>
                          )}
                        </div>

                        <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{item.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 md:space-x-2">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="w-3 h-3 md:w-4 md:h-4 animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
                              ))}
                            </div>
                            <span className="text-xs md:text-sm text-gray-600">{item.rating}</span>
                          </div>
                          <div className="flex items-center space-x-2 md:space-x-3 text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                              <FaClock className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="hidden sm:inline">{item.cookTime}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <FaFire className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="hidden sm:inline">{item.calories}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {sortedItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex gap-3 md:gap-6">
                        <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1 md:mb-2">
                            <h3 className="font-bold text-base md:text-xl text-gray-900 line-clamp-1">{item.name}</h3>
                            <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0 ml-2">
                              {item.originalPrice && (
                                <span className="text-gray-500 line-through text-sm md:text-base">${item.originalPrice}</span>
                              )}
                              <span className="font-bold text-base md:text-xl text-orange-600">${item.price}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-3 line-clamp-2">{item.description}</p>
                          
                          <div className="flex items-center flex-wrap gap-2 md:gap-4">
                            <div className="flex items-center space-x-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar key={i} className="w-3 h-3 md:w-4 md:h-4 animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
                                ))}
                              </div>
                              <span className="text-xs md:text-sm text-gray-600">{item.rating}</span>
                            </div>
                            <span className="text-xs md:text-sm text-gray-500 flex items-center space-x-1">
                              <FaClock className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span>{item.cookTime}</span>
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 flex items-center space-x-1">
                              <FaFire className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span>{item.calories} cal</span>
                            </span>
                            {item.spicyLevel > 0 && (
                              <div className="flex space-x-1">
                                {Array(item.spicyLevel).fill(0).map((_, i) => (
                                  <FaPepperHot key={i} className="text-red-500 text-xs md:text-sm animate-sparkle" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {sortedItems.length === 0 && (
                <div className="text-center py-12 md:py-20 animate-fade-in-up">
                  <FaSearch className="text-4xl md:text-6xl mb-4 mx-auto text-gray-400 animate-float" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">No items found</h3>
                  <p className="text-gray-600 text-sm md:text-base">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}