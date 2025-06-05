'use client'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsScrollingUp(true)
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const closeSidebar = () => setIsSidebarOpen(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      setIsSearchOpen(false) // Close search after submitting
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    console.log('Search toggled:', !isSearchOpen) // Debug log
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translate3d(100%, 0, 0);
            visibility: visible;
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -3px, 0);
          }
          70% {
            transform: translate3d(0, -2px, 0);
          }
          90% {
            transform: translate3d(0, -1px, 0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .navbar-animation {
          animation: fadeInDown 0.8s ease-out;
        }

        .navbar-scroll-up {
          transform: translateY(0);
          transition: transform 0.3s ease-in-out;
        }

        .navbar-scroll-down {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }

        .navbar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(15px);
          background: rgba(0, 0, 0, 0.95);
          border-bottom: 1px solid rgba(249, 115, 22, 0.3);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .logo-container {
          animation: bounce 3s infinite;
        }

        .logo-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .brand-text {
          background: linear-gradient(90deg, #f97316, #ea580c, #f97316);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 8px;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::before {
          width: 80%;
        }

        .nav-item:hover {
          color: #f97316;
          transform: translateY(-2px);
          background: rgba(249, 115, 22, 0.1);
        }

        .phone-container {
          animation: float 4s ease-in-out infinite;
        }

        .icon-button {
          transition: all 0.3s ease;
          padding: 8px;
          border-radius: 50%;
        }

        .icon-button:hover {
          background: rgba(249, 115, 22, 0.1);
          color: #f97316;
          transform: scale(1.1) translateY(-2px);
        }

        .search-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 2px solid rgba(249, 115, 22, 0.5);
          padding: 100px 20px 40px 20px;
          z-index: 60;
          animation: slideDown 0.4s ease-out;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(249, 115, 22, 0.4);
          color: white;
          padding: 16px 24px;
          border-radius: 30px;
          font-size: 18px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.4);
          background: rgba(255, 255, 255, 0.15);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .book-button {
          background: linear-gradient(135deg, #f97316, #ea580c);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .book-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .book-button:hover::before {
          left: 100%;
        }

        .book-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(249, 115, 22, 0.4);
        }

        .sidebar-slide-in {
          animation: slideInRight 0.5s ease-out;
        }

        .mobile-menu-scale {
          animation: scaleIn 0.3s ease-out;
        }

        .navbar-container {
          will-change: transform;
        }

        .search-active {
          color: #f97316 !important;
          background: rgba(249, 115, 22, 0.2) !important;
        }

        @media (max-width: 1024px) {
          .navbar-fixed {
            background: rgba(0, 0, 0, 0.98);
          }
          
          .search-container {
            padding: 80px 20px 30px 20px;
          }
        }
      `}</style>

      <div className="relative">
        <nav className={`bg-black text-white px-6 lg:px-12 py-4 navbar-animation navbar-container ${
          lastScrollY > 50 ? 'navbar-fixed' : ''
        } ${
          isScrollingUp ? 'navbar-scroll-up' : 'navbar-scroll-down'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo Section */}
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="logo-container w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center logo-glow">
                  <span className="text-white font-bold text-xl">🍳</span>
                </div>
                <span className="brand-text font-black text-2xl tracking-wider">WELLFOOD</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/">
                <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer">HOME</span>
              </Link>
              
              <Link href="/menu">
                <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer">MENU</span>
              </Link>
              
              <Link href="/about">
                <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer">ABOUT</span>
              </Link>
              
              <Link href="/blog">
                <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer">BLOG</span>
              </Link>
              
      
              
              <Link href="/contact">
                <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer">CONTACT</span>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Phone Number */}
              <div className="phone-container flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-900/50">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">CALL US</span>
                  <span className="text-sm font-semibold text-white">+880 123 456 88</span>
                </div>
              </div>
              
              {/* Search Button */}
              <button 
                className={`icon-button ${isSearchOpen ? 'search-active' : ''}`}
                onClick={toggleSearch}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Book Now Button */}
              <Link href="/reservations">
                <button className="book-button px-6 py-3 rounded-lg font-semibold text-sm tracking-wide text-white">
                  BOOK TABLE
                </button>
              </Link>

              {/* Menu Grid */}
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="icon-button"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden icon-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-gray-800 mobile-menu-scale">
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/">
                  <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer block">HOME</span>
                </Link>
                <Link href="/menu">
                  <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer block">MENU</span>
                </Link>
                <Link href="/about">
                  <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer block">ABOUT</span>
                </Link>
                <Link href="/blog">
                  <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer block">BLOG</span>
                </Link>
                <Link href="/gallery">
                  <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer block">GALLERY</span>
                </Link>
                <Link href="/contact">
                  <span className="nav-item font-semibold text-sm tracking-wide cursor-pointer block">CONTACT</span>
                </Link>
                
                {/* Mobile Search */}
                <div className="pt-4">
                  <form onSubmit={handleSearch} className="flex">
                    <input
                      type="text"
                      placeholder="Search menu, blog..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-gray-900/50 border border-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none rounded-l-lg"
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </form>
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="phone-container flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-900/50">
                    <span className="text-orange-500">📞</span>
                    <span className="text-sm">+880 123 456 88</span>
                  </div>
                  
                  <Link href="/reservations">
                    <button className="book-button w-full px-6 py-3 rounded-lg font-semibold text-sm tracking-wide text-white">
                      BOOK TABLE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Desktop Search Bar - Full Screen Overlay */}
      {isSearchOpen && (
        <div className="search-container">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for? (Menu items, blog posts, etc.)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  <span className="mr-4">Popular searches:</span>
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('Pizza')}
                    className="text-orange-500 hover:text-orange-400 mx-2 hover:underline"
                  >
                    Pizza
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('Burger')}
                    className="text-orange-500 hover:text-orange-400 mx-2 hover:underline"
                  >
                    Burger
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('Pasta')}
                    className="text-orange-500 hover:text-orange-400 mx-2 hover:underline"
                  >
                    Pasta
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setSearchQuery('Desserts')}
                    className="text-orange-500 hover:text-orange-400 mx-2 hover:underline"
                  >
                    Desserts
                  </button>
                </div>
                
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors px-6 py-2 border border-gray-600 rounded-lg hover:border-orange-500"
                >
                  Close (ESC)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="fixed right-0 top-0 h-full w-80 bg-white text-gray-800 p-8 shadow-2xl sidebar-slide-in">
            <button 
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-gray-600 hover:text-orange-500 text-xl font-bold transition-all duration-300 hover:rotate-90 hover:scale-110"
            >
              ✕
            </button>

            <div className="text-center mb-8 mt-8">
              <h2 className="text-2xl font-bold tracking-wider text-gray-800">GET APPOINTMENT</h2>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="NAME"
                className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
              />
              
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
              />
              
              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none resize-none transition-all duration-300"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 transition-all duration-300 tracking-wider hover:scale-105"
              >
                SUBMIT NOW
              </button>
            </form>

            <div className="flex justify-center space-x-4 mt-8">
              {[1,2,3,4].map((item) => (
                <button key={item} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all duration-300 text-gray-600 hover:scale-110">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}