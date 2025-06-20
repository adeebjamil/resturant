'use client'
import { useState, useEffect, useMemo, useCallback } from 'react'
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
  FaFire,
  FaPepperHot
} from 'react-icons/fa6'
import { FaCoffee, FaSearch, FaTimes } from 'react-icons/fa'
import { 
  GiNoodles, 
  GiFrenchFries, 
  GiWrappedSweet,
  GiTacos,
  GiChocolateBar,
  GiMilkCarton,
  GiTeapot,
  GiCarrot
} from 'react-icons/gi'
import { IoGridOutline, IoListOutline, IoFilterOutline, IoChevronDown } from 'react-icons/io5'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [showMobileCategories, setShowMobileCategories] = useState(false)
  const [showSearchBar, setShowSearchBar] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  // Memoized static data
  const popularCategories = useMemo(() => ['all', 'porotta-sandwich', 'tea-special', 'soup-point', 'burger-specials'], [])

  const categories = useMemo(() => [
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
    { id: 'special-juices', name: 'Special Juices', icon: GiTeapot },
    { id: 'chrush-milk-shakes', name: 'Chrush Milk Shakes', icon: GiMilkCarton },
    { id: 'passion-mix', name: 'Passion Mix', icon: FaGlassWater },
    { id: 'mojito-juice', name: 'Mojito Juice', icon: FaGlassWater },
    { id: 'health-juice', name: 'Health Juice', icon: GiCarrot },
    { id: 'fruits-bricks', name: 'Fruits Bricks', icon: FaAppleWhole },
    { id: 'dessert-items', name: 'Dessert Items', icon: FaCakeCandles }
  ], [])

  const menuItems = useMemo(() => [
    {
      id: 1,
      name: "Grilled Salmon",
      category: "seafood",
      description: "Fresh Atlantic salmon grilled to perfection with lemon butter sauce and seasonal vegetables",
      image: "/menu/salmon.jpg",
      rating: 4.8,
      reviews: 156,
      tags: ["Popular", "Healthy"],
      spicyLevel: 0,
      calories: 320
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "pizza", 
      description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil on our handmade dough",
      image: "/menu/pizza.webp",
      rating: 4.6,
      reviews: 203,
      tags: ["Vegetarian", "Classic"],
      spicyLevel: 0,
      calories: 280
    },
    {
      id: 3,
      name: "Wagyu Beef Burger",
      category: "burgers",
      description: "Premium wagyu beef patty with truffle aioli, aged cheddar, and caramelized onions",
      image: "/menu/burger.jpg",
      rating: 4.9,
      reviews: 89,
      tags: ["Premium", "Chef's Special"],
      spicyLevel: 1,
      calories: 650
    },
    {
      id: 4,
      name: "Lobster Ravioli",
      category: "pasta",
      description: "Handmade ravioli filled with fresh lobster in a creamy saffron sauce",
      image: "/menu/ravioli.jpg",
      rating: 4.7,
      reviews: 124,
      tags: ["Signature", "Seafood"],
      spicyLevel: 0,
      calories: 420
    },
    {
      id: 5,
      name: "Caesar Salad",
      category: "appetizers",
      description: "Crisp romaine lettuce with our house Caesar dressing, parmesan, and croutons",
      image: "/menu/caesar.jpg",
      rating: 4.4,
      reviews: 67,
      tags: ["Classic", "Healthy"],
      spicyLevel: 0,
      calories: 180
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      category: "desserts",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      image: "/menu/lava-cake.jpg",
      rating: 4.8,
      reviews: 234,
      tags: ["Popular", "Indulgent"],
      spicyLevel: 0,
      calories: 450
    },
    {
      id: 7,
      name: "Craft Beer Selection",
      category: "beverages",
      description: "Rotating selection of local craft beers on tap",
      image: "/menu/beer.jpg",
      rating: 4.5,
      reviews: 98,
      tags: ["Local", "Craft"],
      spicyLevel: 0,
      calories: 150
    },
    {
      id: 8,
      name: "Ribeye Steak",
      category: "mains",
      description: "12oz prime ribeye steak grilled to your preference with garlic mashed potatoes",
      image: "/menu/steak.jpeg",
      rating: 4.9,
      reviews: 176,
      tags: ["Premium", "Bestseller"],
      spicyLevel: 0,
      calories: 720
    },
    {
      id: 9,
      name: "Butter Chicken Porotta",
      category: "porotta-sandwich",
      description: "Crispy porotta served with rich and creamy butter chicken curry",
      image: "/menu/butter-chicken-poratta.webp",
      rating: 4.6,
      reviews: 124,
      tags: ["Popular", "Spicy"],
      spicyLevel: 2,
      calories: 580
    },
    {
      id: 10,
      name: "Chicken Porotta",
      category: "porotta-sandwich",
      description: "Flaky porotta served with spiced chicken curry",
      image: "/menu/chicken-poratta.jpg",
      rating: 4.5,
      reviews: 156,
      tags: ["Popular", "Classic"],
      spicyLevel: 2,
      calories: 540
    },
    {
      id: 11,
      name: "Masala Tea",
      category: "tea-special",
      description: "Traditional spiced tea with aromatic Indian spices",
      image: "/menu/masala-tea.jpeg",
      rating: 4.5,
      reviews: 312,
      tags: ["Traditional", "Hot"],
      spicyLevel: 1,
      calories: 45
    },
    {
      id: 12,
      name: "Cream of Mushroom Soup",
      category: "soup-point",
      description: "Rich and creamy mushroom soup with herbs",
      image: "/menu/mushroom-soup.jpg",
      rating: 4.5,
      reviews: 123,
      tags: ["Creamy", "Vegetarian"],
      spicyLevel: 0,
      calories: 180
    }
  ], [])

  // Memoized filtered items
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const lowerQuery = searchQuery.toLowerCase()
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
      return matchesCategory && matchesSearch
    })
  }, [menuItems, selectedCategory, searchQuery])

  // Memoized sorted items
  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'popular':
        default:
          return b.reviews - a.reviews
      }
    })
  }, [filteredItems, sortBy])

  // Memoized category item counts
  const categoryItemCounts = useMemo(() => {
    const counts: { [key: string]: number } = {}
    categories.forEach(category => {
      counts[category.id] = menuItems.filter(item => 
        category.id === 'all' || item.category === category.id
      ).length
    })
    return counts
  }, [categories, menuItems])

  // Optimized event handlers
  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId)
    setShowMobileCategories(false)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value)
  }, [])

  const resetFilters = useCallback(() => {
    setSelectedCategory('all')
    setSearchQuery('')
  }, [])

  const closeSearchBar = useCallback(() => {
    setShowSearchBar(false)
    setSearchQuery('')
  }, [])

  const toggleMobileFilters = useCallback(() => {
    setShowMobileFilters(prev => !prev)
  }, [])

  const toggleMobileCategories = useCallback(() => {
    setShowMobileCategories(prev => !prev)
  }, [])

  const toggleViewMode = useCallback((mode: string) => {
    setViewMode(mode)
  }, [])

  // Memoized spicy level indicators
  const renderSpicyIndicators = useCallback((spicyLevel: number) => {
    if (spicyLevel <= 0) return null
    return Array(spicyLevel).fill(0).map((_, i) => (
      <FaPepperHot key={i} className="text-red-500 text-xs" />
    ))
  }, [])

  return (
    <>
      <style jsx>{`
        /* Basic animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        /* Mobile-specific animations */
        @keyframes slideInBottom {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        
        /* Hide scrollbars */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Text clipping */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Animations */
        .animate-fade-in { animation: fadeIn 0.4s ease forwards; }
        .animate-slide-up { animation: slideUp 0.4s ease forwards; }
        .animate-slide-down { animation: slideDown 0.4s ease forwards; }
        .animate-slide-in-right { animation: slideInRight 0.4s ease forwards; }
        .animate-slide-in-bottom { animation: slideInBottom 0.3s ease forwards; }
        .animate-pulse { animation: pulse 2s ease infinite; }
        
        /* Stagger delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Optional Video Section with proper height */}
        <div className="relative bg-gray-900 text-white py-20 md:py-24 lg:py-28 mb-8">
          <div className="absolute inset-0 overflow-hidden opacity-60">
            <video 
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/restaurant-showcase.mp4" type="video/mp4" />
              <source src="/restaurant-showcase.webm" type="video/webm" />
            </video>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Discover Our Kitchen</h2>
            <p className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl">
              Watch our chefs prepare each dish with passion and authentic flavors
            </p>
          </div>
        </div>

        {/* Modern Header - Desktop & Mobile */}
        <header className="sticky top-0 z-40 bg-white shadow-sm mb-6">
          {/* Desktop Header */}
          <div className="hidden md:block py-4 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-800 bg-clip-text text-transparent">
                  Restaurant Menu
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{filteredItems.length} items</span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-teal-100 text-teal-600' : 'text-gray-400 hover:bg-gray-100'}`}
                      aria-label="Grid view"
                    >
                      <IoGridOutline className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-teal-100 text-teal-600' : 'text-gray-400 hover:bg-gray-100'}`}
                      aria-label="List view"
                    >
                      <IoListOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  />
                  <FaSearch className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden p-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-teal-800 bg-clip-text text-transparent">
                  Menu
                </h1>
                <span className="ml-2 text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded-md">
                  {filteredItems.length}
                </span>
              </div>
              
              <div className="flex items-center space-x-1">
                {!showSearchBar && (
                  <button 
                    onClick={() => setShowSearchBar(true)}
                    className="p-2.5 rounded-full text-gray-600 hover:bg-gray-100"
                    aria-label="Search"
                  >
                    <FaSearch className="w-4 h-4" />
                  </button>
                )}
                <button 
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className={`p-2.5 rounded-full ${showMobileFilters ? 'bg-teal-100 text-teal-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  aria-label="Filter"
                >
                  <IoFilterOutline className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setShowMobileCategories(!showMobileCategories)}
                  className={`p-2.5 rounded-full flex items-center ${showMobileCategories ? 'bg-teal-100 text-teal-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  aria-label="Categories"
                >
                  <FaUtensils className="w-4 h-4" />
                  <IoChevronDown className={`w-3 h-3 ml-1 transform transition-transform ${showMobileCategories ? 'rotate-180' : ''}`} />
                </button>
                <div className="flex items-center border-l border-gray-200 ml-1 pl-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-full ${viewMode === 'grid' ? 'text-teal-500' : 'text-gray-400'}`}
                    aria-label="Grid view"
                  >
                    <IoGridOutline className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-full ${viewMode === 'list' ? 'text-teal-500' : 'text-gray-400'}`}
                    aria-label="List view"
                  >
                    <IoListOutline className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile Search Bar - Expandable */}
            {showSearchBar && (
              <div className="mt-3 animate-slide-down">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-full px-4 py-2.5 pr-10 text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    autoFocus
                  />
                  <button 
                    onClick={() => {
                      setShowSearchBar(false)
                      setSearchQuery('')
                    }}
                    className="absolute right-3 text-gray-400 hover:text-gray-600"
                    aria-label="Close search"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Mobile Filter Panel */}
            {showMobileFilters && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200 animate-slide-down">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Sort by</label>
                  <span className="text-xs text-gray-500">{filteredItems.length} items found</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            )}
            
            {/* Mobile Category Tabs */}
            <div className="mt-3 border-t border-gray-100 pt-2 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-1">
                {categories.filter(cat => popularCategories.includes(cat.id)).map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex-shrink-0 flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${
                        selectedCategory === category.id
                          ? 'bg-teal-500 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <IconComponent className="mr-1.5 text-xs" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Mobile Categories Dropdown Panel */}
            {showMobileCategories && (
              <div className="fixed inset-0 z-50 flex flex-col bg-white">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-bold text-lg">All Categories</h2>
                  <button 
                    onClick={() => setShowMobileCategories(false)}
                    className="p-2 text-gray-500"
                    aria-label="Close categories"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category, index) => {
                      const IconComponent = category.icon;
                      const itemCount = menuItems.filter(item => category.id === 'all' || item.category === category.id).length;
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleCategorySelect(category.id)}
                          className={`flex items-center p-3 rounded-lg animate-fade-in ${
                            selectedCategory === category.id
                              ? 'bg-teal-500 text-white'
                              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                          style={{ animationDelay: `${index * 0.03}s` }}
                        >
                          <IconComponent className="text-lg mr-3" />
                          <div className="text-left">
                            <div className="font-medium text-sm">{category.name}</div>
                            <div className="text-xs opacity-70">{itemCount} items</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
        
        {/* Main Content Wrapper with proper spacing */}
        <div className="md:flex md:container mx-auto px-4 md:px-6 lg:px-8">
          {/* Sidebar Categories - Desktop with fixed height */}
          <aside className="hidden md:block w-64 bg-white border-r border-gray-100 h-[calc(100vh-200px)] sticky top-[120px] overflow-y-auto scrollbar-hide flex-shrink-0 mr-6 rounded-lg shadow-sm">
            <div className="py-6 px-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-6 ml-2">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const itemCount = menuItems.filter(item => category.id === 'all' || item.category === category.id).length;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-teal-500 to-teal-800 text-white'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="text-base" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                        {itemCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content with proper spacing */}
          <main className="flex-1 mb-16">
            {/* Menu Items Grid/List with improved spacing */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {sortedItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up mb-4"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Mobile-friendly tags */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {item.tags.slice(0, 1).map((tag) => (
                          <span key={tag} className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Spicy indicator on image */}
                      {item.spicyLevel > 0 && (
                        <div className="absolute bottom-3 left-3 flex space-x-0.5 bg-white/80 rounded-full py-1 px-2">
                          {Array(item.spicyLevel).fill(0).map((_, i) => (
                            <FaPepperHot key={i} className="text-red-500 text-xs" />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center ml-2 flex-shrink-0">
                          <FaStar className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs text-gray-600 ml-1">{item.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <FaFire className="w-3 h-3 mr-1 opacity-75" />
                          {item.calories} cal
                        </span>
                        <span className="text-xs">{item.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Empty State - Grid */}
                {sortedItems.length === 0 && (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-16 bg-white rounded-xl shadow-sm mt-8">
                    <FaSearch className="text-5xl mb-6 mx-auto text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">No menu items found</h3>
                    <p className="text-gray-600 text-sm mb-6">Try adjusting your search or filter criteria</p>
                    <button 
                      onClick={resetFilters}
                      className="px-6 py-3 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-in-right mb-4"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex">
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Spicy indicator */}
                        {item.spicyLevel > 0 && (
                          <div className="absolute bottom-2 left-2 flex space-x-0.5 bg-white/80 rounded-full py-0.5 px-1.5">
                            {Array(item.spicyLevel).fill(0).map((_, i) => (
                              <FaPepperHot key={i} className="text-red-500 text-xs" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 p-4 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 line-clamp-1">
                              {item.name}
                            </h3>
                            
                            {/* Tags in list view */}
                            <div className="flex flex-wrap gap-1 mb-2">
                              {item.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Rating in top right */}
                          <div className="flex items-center ml-3 flex-shrink-0">
                            <FaStar className="text-yellow-400 w-3 h-3 mr-1" />
                            <span className="text-sm">{item.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{item.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center">
                            <FaFire className="w-3 h-3 mr-1 opacity-75" />
                            {item.calories} cal
                          </span>
                          <span>{item.reviews} reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Empty State - List */}
                {sortedItems.length === 0 && (
                  <div className="text-center py-16 bg-white rounded-xl shadow-sm mt-8">
                    <FaSearch className="text-5xl mb-6 mx-auto text-gray-300" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">No menu items found</h3>
                    <p className="text-gray-600 text-sm mb-6">Try adjusting your search or filter criteria</p>
                    <button 
                      onClick={resetFilters}
                      className="px-6 py-3 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  )
}