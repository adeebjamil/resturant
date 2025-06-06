'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Import React icons
import { FaUtensils, FaDrumstickBite, FaLeaf, FaBreadSlice, FaGem, FaArrowRight, FaCoffee } from 'react-icons/fa'
import { GiCamel, GiPalmTree, GiHoneycomb, GiFishCooked, GiShrimp } from 'react-icons/gi'
import { BiSushi } from 'react-icons/bi'
import { MdLocalDining, MdOutlineBakeryDining, MdOutlineIcecream } from 'react-icons/md'

export default function MenuShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    setIsMounted(true)
    
    // Optional: Add scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, { threshold: 0.1 })
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Scroll to active tab
  useEffect(() => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.querySelector('.active-tab')
      if (activeTabElement) {
        const tabsRect = tabsRef.current.getBoundingClientRect()
        const activeTabRect = activeTabElement.getBoundingClientRect()
        const scrollLeft = activeTabRect.left - tabsRect.left - (tabsRect.width / 2) + (activeTabRect.width / 2)
        tabsRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }, [activeTab])
  
  // Map icons to menu items
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'SHAWARMA':
        return <FaDrumstickBite className="text-2xl text-orange-500" />;
      case 'CAMEL BURGER':
        return <GiCamel className="text-2xl text-orange-500" />;
      case 'MACHBOOS':
        return <FaUtensils className="text-2xl text-orange-500" />;
      case 'SAMAK MACHBOOS':
        return <GiFishCooked className="text-2xl text-orange-500" />;
      case 'FALAFEL':
        return <FaLeaf className="text-2xl text-orange-500" />;
      case 'LUQAIMAT':
        return <GiHoneycomb className="text-2xl text-orange-500" />;
      case 'KNAFEH':
        return <FaGem className="text-2xl text-orange-500" />;
      case 'ARABIC BREAD':
        return <FaBreadSlice className="text-2xl text-orange-500" />;
      case 'DATES':
        return <GiPalmTree className="text-2xl text-orange-500" />;
      case 'JUMBO PRAWNS':
        return <GiShrimp className="text-2xl text-orange-500" />;
      case 'GRILLED HAMMOUR':
        return <BiSushi className="text-2xl text-orange-500" />;
      case 'SEAFOOD PLATTER':
        return <GiFishCooked className="text-2xl text-orange-500" />;
      case 'MIXED GRILL':
        return <MdLocalDining className="text-2xl text-orange-500" />;
      case 'LAMB KOFTA':
        return <FaDrumstickBite className="text-2xl text-orange-500" />;
      case 'UMALI':
        return <MdOutlineBakeryDining className="text-2xl text-orange-500" />;
      case 'BAKLAVA':
        return <FaCoffee className="text-2xl text-orange-500" />;
      case 'SAFFRON ICE CREAM':
        return <MdOutlineIcecream className="text-2xl text-orange-500" />;
      default:
        return <FaUtensils className="text-2xl text-orange-500" />;
    }
  };

  const tabs = ["All Menu", "Emirati", "Seafood", "Grills", "Desserts"]

  const menuItems = [
    // Emirati dishes
    {
      id: 1,
      category: "SHAWARMA",
      description: "Succulent marinated meat wrapped in fresh Arabic bread",
      image: "/menu/red-king-crab.jpg",
      type: "Emirati"
    },
    {
      id: 2,
      category: "CAMEL BURGER", 
      description: "Modern twist on local delicacy with Arabic spices",
      image: "/menu/hamburger.jpg",
      type: "Emirati"
    },
    {
      id: 3,
      category: "MACHBOOS",
      description: "Traditional Emirati spiced rice with tender lamb",
      image: "/menu/chicken-soup.jpg",
      type: "Emirati"
    },
    {
      id: 4,
      category: "FALAFEL",
      description: "Crispy chickpea patties with tahini and fresh herbs",
      image: "/menu/alaskan-crab.jpg",
      type: "Emirati"
    },
    // Seafood dishes
    {
      id: 5,
      category: "SAMAK MACHBOOS",
      description: "Fragrant rice with local fish and Emirati spices",
      image: "/menu/red-king-crab.jpg",
      type: "Seafood"
    },
    {
      id: 6,
      category: "JUMBO PRAWNS",
      description: "Grilled jumbo prawns with Arabic spices and lemon",
      image: "/menu/red-king-crab.jpg",
      type: "Seafood"
    },
    {
      id: 7,
      category: "GRILLED HAMMOUR",
      description: "Fresh local hammour grilled with herbs and spices",
      image: "/menu/alaskan-crab.jpg",
      type: "Seafood"
    },
    {
      id: 8,
      category: "SEAFOOD PLATTER",
      description: "Assortment of fresh seafood prepared Arabian style",
      image: "/menu/red-king-crab.jpg",
      type: "Seafood"
    },
    // Grills
    {
      id: 9,
      category: "MIXED GRILL",
      description: "Selection of grilled meats with Arabic spices",
      image: "/menu/hamburger.jpg",
      type: "Grills"
    },
    {
      id: 10,
      category: "LAMB KOFTA",
      description: "Minced lamb skewers with traditional spices",
      image: "/menu/hamburger.jpg",
      type: "Grills"
    },
    // Desserts
    {
      id: 11,
      category: "LUQAIMAT",
      description: "Sweet dumplings drizzled with date syrup and honey",
      image: "/menu/pizza.jpg",
      type: "Desserts"
    },
    {
      id: 12,
      category: "KNAFEH",
      description: "Layers of crispy pastry filled with sweet cheese",
      image: "/menu/pizza.jpg",
      type: "Desserts"
    },
    {
      id: 13,
      category: "UMALI",
      description: "Traditional bread pudding with nuts and rose water",
      image: "/menu/pizza.jpg",
      type: "Desserts"
    },
    {
      id: 14,
      category: "BAKLAVA",
      description: "Layered pastry filled with chopped nuts and honey",
      image: "/menu/pizza.jpg", 
      type: "Desserts"
    },
    {
      id: 15,
      category: "SAFFRON ICE CREAM",
      description: "Homemade ice cream infused with saffron and pistachios",
      image: "/menu/pizza.jpg",
      type: "Desserts"
    }
  ]

  // Filter menu items based on active tab
  const getFilteredMenuItems = () => {
    if (activeTab === 0) {
      return menuItems; // All Menu
    } else {
      return menuItems.filter(item => item.type === tabs[activeTab]);
    }
  }

  // Get filtered menu items
  const filteredMenuItems = getFilteredMenuItems();
  
  // Fixed version of getColumnItems to prevent hydration errors
  const getColumnItems = (colIndex: number) => {
    // Don't use window conditionals during server rendering or initial client render
    // Instead, always use a consistent approach for the initial render
    if (!isMounted) {
      // For consistent initial render - split into 3 columns
      const itemsPerColumn = Math.ceil(filteredMenuItems.length / 3);
      const startIndex = colIndex * itemsPerColumn;
      return filteredMenuItems.slice(startIndex, startIndex + itemsPerColumn);
    }
    
    // After mounting, we can check for actual window width
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      return colIndex === 0 ? filteredMenuItems : [];
    } else {
      const itemsPerColumn = Math.ceil(filteredMenuItems.length / 3);
      const startIndex = colIndex * itemsPerColumn;
      return filteredMenuItems.slice(startIndex, startIndex + itemsPerColumn);
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes moveLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes moveRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* New background patterns */
        .pattern-dots {
          background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .menu-section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          animation: fadeIn 1s ease-out;
        }

        .heading-text {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        /* Menu card styling */
        .menu-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          animation: scaleIn 0.6s ease-out both;
          transition: all 0.4s ease;
        }

        .menu-card:nth-child(1) { 
          animation: slideInLeft 0.8s ease-out 0.3s both;
        }
        .menu-card:nth-child(2) { 
          animation: slideInUp 0.8s ease-out 0.4s both;
        }
        .menu-card:nth-child(3) { 
          animation: slideInRight 0.8s ease-out 0.5s both;
        }

        .menu-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(255, 165, 0, 0.15);
          border-color: rgba(255, 165, 0, 0.3);
        }

        .menu-item {
          transition: all 0.3s ease;
          cursor: pointer;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .menu-item:hover {
          transform: translateX(5px);
          background: linear-gradient(90deg, transparent, rgba(255, 165, 0, 0.05), transparent);
        }

        .menu-item:hover .menu-image {
          animation: pulse 0.6s ease-in-out;
          border: 2px solid rgba(255, 165, 0, 0.8);
        }

        .menu-item:hover .icon-highlight {
          animation: bounce 0.8s ease-in-out;
        }

        .menu-image {
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .menu-image:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-highlight {
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        .floating-element-1 {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }

        .floating-element-2 {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 105, 0, 0.08) 0%, transparent 70%);
          animation: float 7s ease-in-out infinite 1s;
        }

        .moving-text-left {
          animation: moveLeft 50s linear infinite;
          opacity: 0.03;
          font-family: 'Times New Roman', serif;
          color: #000000;
        }

        .moving-text-right {
          animation: moveRight 40s linear infinite;
          opacity: 0.03;
          font-family: 'Times New Roman', serif;
          color: #000000;
        }

        .tab-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          padding: 0.5rem 1rem;
          font-weight: 600;
        }

        .tab-button:hover {
          color: #ff6a00;
        }

        .tab-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #ff6a00;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .tab-button:hover::after {
          width: 80%;
        }

        .active-tab::after {
          width: 80%;
        }

        .active-tab {
          color: #ff6a00;
        }

        .explore-button {
          background: linear-gradient(135deg, #ff6a00 0%, #ff9a00 100%);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          animation: zoomIn 0.8s ease-out 0.6s both;
        }

        .explore-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s;
        }

        .explore-button:hover::before {
          left: 100%;
        }

        .explore-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(255, 165, 0, 0.4);
        }

        .category-title {
          transition: all 0.3s ease;
          color: #222;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .menu-item:hover .category-title {
          color: #ff6a00;
        }

        .description-text {
          animation: fadeIn 0.8s ease-out 0.2s both;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }

        .image-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shine 3s ease-in-out infinite;
        }

        /* Empty menu state */
        .empty-menu {
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 1rem;
          border: 1px dashed rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.5s ease-out;
        }

        /* Mobile optimizations */
        .mobile-menu-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 1rem;
          padding: 1rem;
          margin-bottom: 1rem;
          animation: slideInUp 0.5s ease-out;
        }

        .mobile-menu-item {
          padding: 0.75rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-menu-item:last-child {
          border-bottom: none;
        }

        .mobile-category-title {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: #222;
        }

        .mobile-description {
          font-size: 0.875rem;
          color: #666;
        }

        /* Back to top button */
        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ff6a00;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .menu-section {
            padding: 2rem 0;
          }

          .menu-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .moving-text-left,
          .moving-text-right {
            font-size: 2rem;
          }
          
          .menu-card {
            margin-bottom: 1rem;
            padding: 1rem;
          }

          .menu-tabs {
            padding: 0.5rem 0;
            margin-bottom: 1.5rem;
            justify-content: flex-start;
          }

          .tab-button {
            padding: 0.5rem 0.75rem;
            font-size: 0.9rem;
            margin: 0 0.25rem;
          }

          .heading-title {
            font-size: 2rem;
            line-height: 1.2;
            margin-bottom: 0.5rem;
          }
          
          .heading-subtitle {
            font-size: 1.25rem;
          }

          .explore-button {
            padding: 0.75rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .menu-section {
            padding: 1.5rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .heading-text {
            padding: 0 0.5rem;
          }

          .menu-item {
            flex-direction: row;
            text-align: left;
            padding: 1rem 0;
            align-items: center;
          }

          .menu-item-content {
            display: flex;
            align-items: center;
            width: 100%;
          }
          
          .image-container {
            width: 3rem;
            height: 3rem;
            margin-right: 0.75rem;
            margin-bottom: 0;
          }

          .menu-text {
            flex: 1;
            min-width: 0; /* Ensures text wrapping works with flexbox */
          }

          .category-title {
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
            white-space: normal;
            line-height: 1.2;
          }

          .description-text {
            font-size: 0.8rem;
            line-height: 1.3;
          }

          .icon-highlight {
            margin-left: 0.5rem;
          }

          .explore-button {
            width: auto;
            margin: 0 1rem;
          }
          
          .heading-title {
            font-size: 1.6rem;
          }
          
          .heading-subtitle {
            font-size: 1rem;
          }

          .tab-button {
            padding: 0.4rem 0.6rem;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="menu-section pattern-dots relative min-h-screen py-16 sm:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="floating-element-1 top-[10%] left-[5%]"></div>
          <div className="floating-element-2 bottom-[20%] right-[10%]"></div>
          <div className="floating-element-1 bottom-[30%] left-[20%]"></div>
          <div className="floating-element-2 top-[30%] right-[15%]"></div>
        </div>

        {/* Moving Background Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-0 w-full">
            <div className="moving-text-left text-5xl sm:text-7xl md:text-9xl font-black whitespace-nowrap">
              DUBAI FLAVORS • EMIRATI CUISINE • ARABIAN NIGHTS •
            </div>
          </div>
          
          <div className="absolute bottom-20 left-0 w-full">
            <div className="moving-text-right text-5xl sm:text-7xl md:text-9xl font-black whitespace-nowrap">
              SHAWARMA • MACHBOOS • LUQAIMAT • CAMEL •
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-16">
            <div className="heading-text">
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black text-xs sm:text-sm font-bold tracking-wide mb-4 sm:mb-6">
                AUTHENTIC EMIRATI CUISINE
              </span>
              <h2 className="heading-title text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-3 sm:mb-6">
                <span className="relative">
                  EXPERIENCE THE FLAVORS OF DUBAI
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></span>
                </span>
                <br/>
                <span className="text-orange-500">TRADITIONAL & MODERN</span>
              </h2>
              <h3 className="heading-subtitle text-xl sm:text-2xl lg:text-4xl font-bold text-gray-700 opacity-90">
                DISCOVER OUR ARABIAN DELICACIES
              </h3>
            </div>
          </div>

          {/* Menu Tabs - Fixed scrollable for mobile */}
          <div ref={tabsRef} className="menu-tabs flex space-x-1 sm:space-x-4 md:space-x-8 mb-8 overflow-x-auto pb-2 px-1 -mx-1 scrollbar-hide">
            {tabs.map((tab, index) => (
              <button 
                key={index}
                className={`tab-button text-gray-800 text-sm sm:text-base font-medium ${activeTab === index ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile & Tablet View (Single Column) */}
          <div className="menu-grid block sm:hidden mb-12">
            {filteredMenuItems.length > 0 ? (
              <>
                {filteredMenuItems.map((item, index) => (
                  <div key={`mobile-${index}`} className="mobile-menu-card">
                    <div className="mobile-menu-item flex items-center">
                      <div className="image-container w-16 h-16 rounded-full overflow-hidden mr-3">
                        <Image
                          src={item.image}
                          alt={item.category}
                          width={64}
                          height={64}
                          className="menu-image w-full h-full object-cover"
                        />
                      </div>
                      <div className="menu-text flex-1 min-w-0">
                        <h4 className="mobile-category-title">
                          {item.category}
                        </h4>
                        <p className="mobile-description">
                          {item.description}
                        </p>
                      </div>
                      <div className="icon-highlight ml-2">
                        {getIconForCategory(item.category)}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // Empty state for mobile
              <div className="empty-menu">
                <div className="text-center py-12">
                  <FaUtensils className="mx-auto text-3xl text-gray-300 mb-3" />
                  <h3 className="text-lg font-medium text-gray-500">No menu items found</h3>
                  <p className="text-gray-400 mt-2">Try another category</p>
                </div>
              </div>
            )}
          </div>

          {/* Desktop View (Three Columns) */}
          <div className="menu-grid hidden sm:grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-16">
            {filteredMenuItems.length > 0 ? (
              <>
                {/* Column 1 */}
                <div className="menu-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                  <div className="space-y-4 sm:space-y-6">
                    {getColumnItems(0).map((item, index) => (
                      <div key={`col1-${index}`} className="menu-item flex items-center justify-between p-3 sm:p-4 rounded-lg last:border-b-0">
                        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                          <div className="image-container w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.category}
                              width={64}
                              height={64}
                              className="menu-image w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="category-title font-bold text-gray-900 text-base sm:text-lg mb-0.5 sm:mb-1">
                              {item.category}
                            </h4>
                            <p className="description-text text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="icon-highlight ml-2 sm:ml-4">
                          {getIconForCategory(item.category)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                {getColumnItems(1).length > 0 && (
                  <div className="menu-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                    <div className="space-y-4 sm:space-y-6">
                      {getColumnItems(1).map((item, index) => (
                        <div key={`col2-${index}`} className="menu-item flex items-center justify-between p-3 sm:p-4 rounded-lg last:border-b-0">
                          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                            <div className="image-container w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.category}
                                width={64}
                                height={64}
                                className="menu-image w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="category-title font-bold text-gray-900 text-base sm:text-lg mb-0.5 sm:mb-1">
                              {item.category}
                            </h4>
                            <p className="description-text text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="icon-highlight ml-2 sm:ml-4">
                          {getIconForCategory(item.category)}
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                )}

                {/* Column 3 */}
                {getColumnItems(2).length > 0 && (
                  <div className="menu-card rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                    <div className="space-y-4 sm:space-y-6">
                      {getColumnItems(2).map((item, index) => (
                        <div key={`col3-${index}`} className="menu-item flex items-center justify-between p-3 sm:p-4 rounded-lg last:border-b-0">
                          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                            <div className="image-container w-12 sm:w-16 h-12 sm:h-16 rounded-full overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.category}
                                width={64}
                                height={64}
                                className="menu-image w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="category-title font-bold text-gray-900 text-base sm:text-lg mb-0.5 sm:mb-1">
                              {item.category}
                            </h4>
                            <p className="description-text text-gray-600 text-xs sm:text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="icon-highlight ml-2 sm:ml-4">
                          {getIconForCategory(item.category)}
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Desktop empty state
              <div className="col-span-3 empty-menu">
                <div className="text-center py-16">
                  <FaUtensils className="mx-auto text-4xl text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-500">No menu items found in this category</h3>
                  <p className="text-gray-400 mt-2">Please try selecting another category</p>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action - With Link to /menu */}
          <div className="text-center">
            <Link href="/menu">
              <button className="explore-button text-black font-bold py-4 px-12 rounded-xl text-lg shadow-lg group">
                <span className="flex items-center justify-center space-x-3">
                  <span>EXPLORE FULL MENU</span>
                  <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
              </button>
            </Link>
          </div>
          
          {/* Back to Top Button */}
          <button 
            className="back-to-top" 
            id="backToTop"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}