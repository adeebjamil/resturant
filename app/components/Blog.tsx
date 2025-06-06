'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Import React icons for better UI
import { FiSearch, FiFilter, FiX, FiClock, FiChevronRight } from 'react-icons/fi'
import { BsBookmark, BsStarFill, BsTags } from 'react-icons/bs'
import { HiOutlineAdjustments } from 'react-icons/hi'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
  tags: string[]
  featured?: boolean
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [searchTerm, setSearchTerm] = useState('')
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Art of Perfect Pizza Making: Secrets from Italian Masters",
      excerpt: "Discover the centuries-old techniques that make authentic Italian pizza truly exceptional. From dough preparation to the perfect wood-fired oven.",
      author: "Chef Marco Romano",
      date: "June 1, 2025",
      category: "RECIPES",
      image: "/section2/burger.webp",
      readTime: "5 min read",
      tags: ["Italian", "Pizza", "Cooking Tips"],
      featured: true
    },
    {
      id: 2,
      title: "Farm to Table: Our Commitment to Fresh Ingredients",
      excerpt: "Learn about our partnership with local farms and how we ensure the freshest ingredients reach your plate every single day.",
      author: "Sarah Johnson",
      date: "May 28, 2025",
      category: "SUSTAINABILITY",
      image: "/section3/pizza.webp",
      readTime: "3 min read",
      tags: ["Farm Fresh", "Sustainability", "Local"]
    },
    {
      id: 3,
      title: "5 Wine Pairing Secrets Every Food Lover Should Know",
      excerpt: "Elevate your dining experience with these expert wine pairing tips that will transform how you enjoy food and wine together.",
      author: "Wine Expert David Chen",
      date: "May 25, 2025",
      category: "WINE",
      image: "/section2/burger.webp",
      readTime: "7 min read",
      tags: ["Wine", "Pairing", "Expert Tips"]
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Take an exclusive look at what happens behind the scenes in our kitchen, from prep work to the final garnish on your plate.",
      author: "Head Chef Michael Brown",
      date: "May 22, 2025",
      category: "KITCHEN",
      image: "/section3/pizza.webp",
      readTime: "4 min read",
      tags: ["Kitchen", "Behind Scenes", "Chef Life"]
    },
    {
      id: 5,
      title: "Seasonal Menu: Spring's Fresh Flavors",
      excerpt: "Explore our new spring menu featuring the freshest seasonal ingredients and innovative flavor combinations that celebrate the season.",
      author: "Chef Maria Garcia",
      date: "May 19, 2025",
      category: "MENU",
      image: "/section3/pizza.webp",
      readTime: "6 min read",
      tags: ["Seasonal", "Menu", "Spring"]
    },
    {
      id: 6,
      title: "The History of Our Restaurant: 25 Years of Excellence",
      excerpt: "Join us on a journey through our restaurant's history and discover how we became the beloved dining destination we are today.",
      author: "Owner Robert Smith",
      date: "May 15, 2025",
      category: "HISTORY",
      image: "/section3/pizza.webp",
      readTime: "8 min read",
      tags: ["History", "Anniversary", "Story"]
    }
  ]

  const categories = ['ALL', 'RECIPES', 'SUSTAINABILITY', 'WINE', 'KITCHEN', 'MENU', 'HISTORY']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'ALL' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  // Toggle filters visibility on mobile
  const toggleFilters = () => {
    setFiltersVisible(prev => !prev)
  }

  // Focus search input when clicking on the search icon
  const focusSearch = () => {
    setIsSearchFocused(true) // Make the search container visible first
    // Wait for the element to be rendered before focusing
    setTimeout(() => {
      if (searchRef.current) {
        searchRef.current.focus()
      }
    }, 100)
  }

  // Close filters when a category is selected on mobile
  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
    if (window.innerWidth < 768) {
      setFiltersVisible(false)
    }
  }

  // Clear search input
  const clearSearch = () => {
    setSearchTerm('')
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  // Handle click outside to close filters on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (filtersVisible && !target.closest('.category-filters') && !target.closest('.filter-toggle-btn')) {
        setFiltersVisible(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [filtersVisible])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.6); }
        }

        /* Header Animations */
        .hero-title {
          animation: fadeInDown 1s ease-out;
          background: linear-gradient(-45deg, #f97316, #ea580c, #dc2626, #b91c1c);
          background-size: 400% 400%;
          animation: fadeInDown 1s ease-out, gradient 4s ease infinite;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .search-container {
          animation: scaleIn 1s ease-out 0.6s both;
        }

        .category-filters {
          animation: slideInLeft 1s ease-out 0.9s both;
        }

        /* Mobile filter animation */
        .mobile-filters {
          animation: slideInUp 0.3s ease-out forwards;
        }

        /* Featured Post */
        .featured-post {
          animation: scaleIn 1.2s ease-out 1.2s both;
        }

        /* Regular Posts */
        .blog-card {
          animation: fadeInUp 0.8s ease-out both;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog-card:nth-child(1) { animation-delay: 1.5s; }
        .blog-card:nth-child(2) { animation-delay: 1.7s; }
        .blog-card:nth-child(3) { animation-delay: 1.9s; }
        .blog-card:nth-child(4) { animation-delay: 2.1s; }
        .blog-card:nth-child(5) { animation-delay: 2.3s; }

        .blog-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        /* Image Effects */
        .blog-image {
          transition: all 0.5s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.1) rotate(2deg);
        }

        .featured-image {
          transition: all 0.5s ease;
        }

        .featured-post:hover .featured-image {
          transform: scale(1.05);
        }

        /* Interactive Elements */
        .category-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .category-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .category-btn:hover::before {
          left: 100%;
        }

        .category-btn.active {
          animation: glow 2s infinite;
        }

        /* Floating Elements */
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(2) { animation-delay: 2s; }
        .floating-element:nth-child(3) { animation-delay: 4s; }

        /* Tags */
        .tag-item {
          transition: all 0.3s ease;
        }

        .tag-item:hover {
          transform: translateY(-3px) scale(1.1);
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
        }

        /* Search Input */
        .search-input {
          transition: all 0.3s ease;
        }

        .search-input:focus {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.2);
        }

        /* Filter toggle button animation */
        .filter-toggle-btn {
          transition: all 0.3s ease;
        }

        .filter-toggle-btn.active {
          transform: rotate(180deg);
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
        }

        /* No Results Animation */
        .no-results {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Loading States */
        .loading-shimmer {
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero-title { 
            font-size: 2.5rem; 
            line-height: 1.2;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
            padding: 0 0.5rem;
          }
          
          .featured-post { 
            margin-bottom: 2rem; 
          }
          
          .blog-card {
            animation-delay: 0.5s !important;
          }
          
          .search-input {
            font-size: 1rem;
            padding: 0.75rem 1rem;
          }
          
          .search-container {
            padding: 0 0.5rem;
          }
          
          .category-filters.mobile-view {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background: white;
            box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
            border-radius: 1.5rem 1.5rem 0 0;
            padding: 1.5rem 1rem;
            max-height: 70vh;
            overflow-y: auto;
          }
          
          .overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 40;
            animation: fadeIn 0.3s ease-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }

        @media (max-width: 640px) {
          .featured-post-content {
            padding: 1.5rem;
          }
          
          .blog-card-content {
            padding: 1rem;
          }
          
          .filter-controls {
            position: sticky;
            top: 0;
            z-index: 20;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(8px);
            margin: -1rem -1rem 1rem;
            padding: 1rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          
          .search-results-info {
            font-size: 0.875rem;
            margin-top: 0.5rem;
            padding: 0 0.5rem;
          }
        }
      `}</style>

      {/* Blog Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 py-16 sm:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
          <div className="floating-element absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 blur-lg"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-20 blur-md"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-40 left-10 w-32 h-32 border-4 border-orange-500 rounded-full animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 border-4 border-red-500 transform rotate-45"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
              Culinary Chronicles
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Dive into our world of flavors, stories, and culinary adventures
            </p>
            
            {/* FIXED POSITION: Search bar that always appears in this position */}
            <div className="search-container max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search recipes, stories, tips..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input w-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg border-2 border-orange-200 rounded-2xl focus:border-orange-500 focus:outline-none bg-white/80 backdrop-blur-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  {searchTerm && (
                    <button 
                      onClick={clearSearch}
                      className="p-1 mr-1 hover:bg-gray-100 rounded-full"
                    >
                      <FiX size={18} className="text-gray-500" />
                    </button>
                  )}
                  <FiSearch className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
            </div>
            
            {/* REMOVE these mobile filter controls and fullscreen overlay search */}
            {/* Mobile filters controller should be moved elsewhere */}
            <div className="filter-controls flex items-center justify-between gap-4 md:hidden mb-6">
              <button
                onClick={toggleFilters}
                className={`filter-toggle-btn p-2.5 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-orange-200 shadow-sm ${filtersVisible ? 'active' : ''}`}
              >
                <div className="flex items-center space-x-2">
                  <HiOutlineAdjustments size={20} className="text-orange-500" />
                  <span className="text-sm text-gray-700">Filters</span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Filters Overlay */}
          {filtersVisible && (
            <div className="md:hidden">
              <div className="overlay" onClick={() => setFiltersVisible(false)}></div>
              <div className="category-filters mobile-filters mobile-view">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl text-gray-800">Filter by category</h3>
                  <button 
                    onClick={() => setFiltersVisible(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <FiX size={20} />
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`category-btn px-5 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg active'
                          : 'bg-white/80 text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-orange-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Category Filters - Desktop */}
          <div className="category-filters hidden md:flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-btn px-5 py-2.5 md:px-8 md:py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg active'
                    : 'bg-white/80 text-gray-700 hover:bg-orange-100 hover:text-orange-600 border border-orange-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {searchTerm && (
            <div className="search-results-info text-center mb-6">
              <p className="text-gray-600">
                {filteredPosts.length === 0 ? (
                  <span>No results found for "<span className="font-semibold text-orange-600">{searchTerm}</span>"</span>
                ) : (
                  <span>Showing {filteredPosts.length} results for "<span className="font-semibold text-orange-600">{searchTerm}</span>"</span>
                )}
              </p>
            </div>
          )}

          {/* Active Filter Info */}
          {activeCategory !== 'ALL' && (
            <div className="active-filter-info text-center mb-6">
              <div className="inline-flex items-center px-3 py-1.5 bg-orange-500/10 rounded-full">
                <span className="text-orange-600 text-sm font-medium mr-2">
                  Filtering by: {activeCategory}
                </span>
                <button 
                  onClick={() => setActiveCategory('ALL')}
                  className="p-1 hover:bg-orange-500/10 rounded-full"
                >
                  <FiX size={14} className="text-orange-600" />
                </button>
              </div>
            </div>
          )}

          {/* No Results State */}
          {filteredPosts.length === 0 && (
            <div className="no-results flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FiSearch size={36} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No posts found</h3>
              <p className="text-gray-600 text-center max-w-md mb-8">
                We couldn't find any posts matching your current filters. Try adjusting your search or category selection.
              </p>
              <button 
                onClick={() => {
                  setActiveCategory('ALL')
                  setSearchTerm('')
                }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-md"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Featured Post */}
          {featuredPost && (
            <div className="featured-post mb-12 sm:mb-16 md:mb-20">
              <div className="bg-gradient-to-r from-white to-orange-50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-orange-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="featured-image object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center">
                        <BsStarFill className="mr-1" /> FEATURED
                      </span>
                    </div>
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-12 featured-post-content flex flex-col justify-center">
                    <div className="mb-3 sm:mb-4">
                      <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider">Featured Story</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs sm:text-sm">
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm sm:text-base">{featuredPost.author}</p>
                          <p className="text-gray-500 text-xs sm:text-sm">{featuredPost.date}</p>
                        </div>
                      </div>
                      <span className="flex items-center text-orange-500 font-semibold text-sm">
                        <FiClock className="mr-1" /> {featuredPost.readTime}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="tag-item bg-orange-100 text-orange-600 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${featuredPost.id}`}>
                      <button className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>Read Full Story</span>
                        <FiChevronRight className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {regularPosts.map((post, index) => (
              <article key={post.id} className="blog-card group">
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="blog-image object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-black/70 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Read Time */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                      <span className="bg-white/90 text-gray-800 px-2.5 py-1 rounded-full text-xs font-bold flex items-center">
                        <FiClock className="mr-1" size={12} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6 blog-card-content">
                    {/* Author Info */}
                    <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-xs sm:text-sm">{post.author}</p>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag-item bg-gray-100 text-gray-600 px-2 py-0.5 rounded-lg text-xs font-semibold flex items-center">
                          <BsTags className="mr-1" size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Read More Button */}
                    <Link href={`/blog/${post.id}`}>
                      <button className="w-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm">
                        <span>Read More</span>
                        <FiChevronRight className="ml-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Show "Load More" button if there are a lot of posts */}
          {regularPosts.length > 6 && (
            <div className="text-center">
              <button className="px-8 py-4 border-2 border-orange-400 text-orange-500 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog