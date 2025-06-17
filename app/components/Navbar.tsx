'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaPhone, 
  FaTable, 
  FaTimes, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaBars,
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaNewspaper,
  FaEnvelope,
  FaCalendarAlt,
  FaImages
} from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY])

  const closeSidebar = () => setIsSidebarOpen(false)

  // Add this function to handle navigation
  const handleNavigation = (path: string) => {
    // Close the menu
    setIsMenuOpen(false)
    // Navigate to the page
    router.push(path)
  }

  return (
    <>
      <style jsx>{`
        /* Base animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(234, 88, 12, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(234, 88, 12, 0.6);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Applied animations */
        .navbar-animation {
          animation: fadeInDown 0.6s ease-out;
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
          backdrop-filter: blur(12px);
          background: rgba(0, 0, 0, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .logo-container {
          position: relative;
          animation: float 5s ease-in-out infinite;
        }

        .logo-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }

        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ea580c;
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .nav-item:hover {
          color: #ea580c;
        }
        
        .nav-item svg {
          transition: all 0.3s ease;
        }

        .nav-item:hover svg {
          transform: translateY(-2px);
        }

        .phone-container {
          animation: float 4s ease-in-out infinite;
        }

        .book-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .book-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.7s;
          z-index: -1;
        }

        .book-button:hover::before {
          left: 100%;
        }

        .sidebar-slide-in {
          animation: slideInRight 0.5s ease-out;
        }

        .mobile-menu-scale {
          animation: scaleIn 0.3s ease-out;
        }

        @media (max-width: 1024px) {
          .navbar-fixed {
            background: rgba(0, 0, 0, 0.98);
          }
        }
      `}</style>

      <div className="relative">
        <nav className={`bg-black text-white px-5 lg:px-10 py-5 navbar-animation ${
          lastScrollY > 50 ? 'navbar-fixed' : ''
        } ${
          isScrollingUp ? 'navbar-scroll-up' : 'navbar-scroll-down'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            {/* Logo Section */}
<Link href="/" className="logo-container flex items-center">
  {/* Replace with your actual logo image */}
  <div className="flex items-center space-x-3">
    <Image
      src="/Untitled_design__5_-removebg-preview.png"
      alt="WellFood Logo"
      width={80}
      height={80}
      className="object-contain rounded-2xl"
      priority
    />
  </div>
</Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/">
                <span className="nav-item text-sm font-medium tracking-wide cursor-pointer flex items-center">
                  <FaHome className="mr-2 text-teal-600" />
                  HOME
                </span>
              </Link>
              
              <Link href="/menu">
                <span className="nav-item text-sm font-medium tracking-wide cursor-pointer flex items-center">
                  <FaUtensils className="mr-2 text-teal-600" />
                  MENU
                </span>
              </Link>
              
              <Link href="/about">
                <span className="nav-item text-sm font-medium tracking-wide cursor-pointer flex items-center">
                  <FaInfoCircle className="mr-2 text-teal-600" />
                  ABOUT
                </span>
              </Link>
              
              <Link href="/blog">
                <span className="nav-item text-sm font-medium tracking-wide cursor-pointer flex items-center">
                  <FaNewspaper className="mr-2 text-teal-600" />
                  BLOG
                </span>
              </Link>
              
              <Link href="/contact">
                <span className="nav-item text-sm font-medium tracking-wide cursor-pointer flex items-center">
                  <FaEnvelope className="mr-2 text-teal-600" />
                  CONTACT
                </span>
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              
              {/* Phone Number */}
              <div className="phone-container flex items-center space-x-3 px-4 py-2 rounded-xl bg-black border border-gray-800 hover:bg-black/80 transition-all duration-300">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <FaPhone className="w-3 h-3 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-300">CALL US</span>
                  <span className="text-sm font-semibold text-white">+880 123 456 88</span>
                </div>
              </div>

              {/* Book Now Button */}
              <Link href="/contact">
                <button className="book-button px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/20 flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  BOOK TABLE
                </button>
              </Link>

              {/* Menu Grid */}
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="p-2 rounded-lg hover:bg-black transition-all duration-300"
                aria-label="Open sidebar menu"
              >
                <FaBars className="w-5 h-5 hover:text-teal-500 transition-colors" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-gray-800 mobile-menu-scale">
              <div className="flex flex-col space-y-4 mt-6">
                {/* Replace each Link with a button that handles navigation */}
                <button 
                  onClick={() => handleNavigation('/')} 
                  className="text-left px-4 py-2 rounded-lg hover:bg-black border border-gray-900 transition-colors flex items-center w-full"
                >
                  <FaHome className="mr-3 text-teal-500" />
                  HOME
                </button>
                
                <button 
                  onClick={() => handleNavigation('/menu')} 
                  className="text-left px-4 py-2 rounded-lg hover:bg-black border border-gray-900 transition-colors flex items-center w-full"
                >
                  <FaUtensils className="mr-3 text-teal-500" />
                  MENU
                </button>
                
                <button 
                  onClick={() => handleNavigation('/about')} 
                  className="text-left px-4 py-2 rounded-lg hover:bg-black border border-gray-900 transition-colors flex items-center w-full"
                >
                  <FaInfoCircle className="mr-3 text-teal-500" />
                  ABOUT
                </button>
                
                <button 
                  onClick={() => handleNavigation('/blog')} 
                  className="text-left px-4 py-2 rounded-lg hover:bg-black border border-gray-900 transition-colors flex items-center w-full"
                >
                  <FaNewspaper className="mr-3 text-teal-500" />
                  BLOG
                </button>
                
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="text-left px-4 py-2 rounded-lg hover:bg-black border border-gray-900 transition-colors flex items-center w-full"
                >
                  <FaEnvelope className="mr-3 text-teal-500" />
                  CONTACT
                </button>
                
                {/* Mobile Contact & Book section */}
                <div className="pt-4 space-y-4 px-4">
                  <div className="flex items-center space-x-3 px-4 py-3 bg-black border border-gray-800 rounded-lg">
                    <FaPhone className="text-teal-500 w-4 h-4" />
                    <span className="text-sm">+880 123 456 88</span>
                  </div>
                  
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold text-sm tracking-wide text-white transition-colors flex items-center justify-center"
                  >
                    <FaCalendarAlt className="mr-2" />
                    BOOK TABLE
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Updated overlay with lower opacity and blur effect */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-all duration-300"
            onClick={closeSidebar}  // Allow clicking the overlay to close the sidebar
          ></div>
          
          <div className="fixed right-0 top-0 h-full w-80 bg-white text-gray-800 p-8 shadow-2xl sidebar-slide-in z-[51]">
            <button 
              onClick={closeSidebar}
              className="absolute top-4 right-4 text-gray-600 hover:text-teal-500 transition-all duration-300 hover:rotate-90"
              aria-label="Close sidebar"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            <div className="text-center mb-8 mt-8">
              <h2 className="text-2xl font-bold tracking-wider text-gray-800">GET APPOINTMENT</h2>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="NAME"
                className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none rounded-lg transition-all duration-300"
              />
              
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none rounded-lg transition-all duration-300"
              />
              
              <textarea
                placeholder="MESSAGE"
                rows={4}
                className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:outline-none resize-none rounded-lg transition-all duration-300"
              />

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 tracking-wider"
              >
                SUBMIT NOW
              </button>
            </form>

            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="social-icon p-2 border border-gray-300 rounded-full hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-gray-600">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon p-2 border border-gray-300 rounded-full hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-gray-600">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon p-2 border border-gray-300 rounded-full hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-gray-600">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-icon p-2 border border-gray-300 rounded-full hover:border-teal-500 hover:text-teal-500 transition-all duration-300 text-gray-600">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}