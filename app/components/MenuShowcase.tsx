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
        return <FaDrumstickBite className="text-2xl text-teal-600" />;
      case 'CAMEL BURGER':
        return <GiCamel className="text-2xl text-teal-600" />;
      case 'MACHBOOS':
        return <FaUtensils className="text-2xl text-teal-600" />;
      case 'SAMAK MACHBOOS':
        return <GiFishCooked className="text-2xl text-teal-600" />;
      case 'FALAFEL':
        return <FaLeaf className="text-2xl text-teal-600" />;
      case 'LUQAIMAT':
        return <GiHoneycomb className="text-2xl text-teal-600" />;
      case 'KNAFEH':
        return <FaGem className="text-2xl text-teal-600" />;
      case 'ARABIC BREAD':
        return <FaBreadSlice className="text-2xl text-teal-600" />;
      case 'DATES':
        return <GiPalmTree className="text-2xl text-teal-600" />;
      case 'JUMBO PRAWNS':
        return <GiShrimp className="text-2xl text-teal-600" />;
      case 'GRILLED HAMMOUR':
        return <BiSushi className="text-2xl text-teal-600" />;
      case 'SEAFOOD PLATTER':
        return <GiFishCooked className="text-2xl text-teal-600" />;
      case 'MIXED GRILL':
        return <MdLocalDining className="text-2xl text-teal-600" />;
      case 'LAMB KOFTA':
        return <FaDrumstickBite className="text-2xl text-teal-600" />;
      case 'UMALI':
        return <MdOutlineBakeryDining className="text-2xl text-teal-600" />;
      case 'BAKLAVA':
        return <FaCoffee className="text-2xl text-teal-600" />;
      case 'SAFFRON ICE CREAM':
        return <MdOutlineIcecream className="text-2xl text-teal-600" />;
      default:
        return <FaUtensils className="text-2xl text-teal-600" />;
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
        @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes softFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .menu-section {
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        .menu-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e6f5c' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .heading-text {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        .menu-card {
          background: #ffffff;
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          animation: scaleIn 0.6s ease-out both;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
        }

        .menu-card:nth-child(1) { animation-delay: 0.2s; }
        .menu-card:nth-child(2) { animation-delay: 0.3s; }
        .menu-card:nth-child(3) { animation-delay: 0.4s; }

        .menu-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px -10px rgba(30, 111, 92, 0.15);
          border-color: rgba(30, 111, 92, 0.2);
        }

        .menu-item {
          transition: all 0.3s ease;
          cursor: pointer;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .menu-item:hover {
          background: linear-gradient(90deg, rgba(30, 111, 92, 0.02), rgba(30, 111, 92, 0.07), rgba(30, 111, 92, 0.02));
        }

        .menu-item:hover .menu-image {
          transform: scale(1.1);
          border-color: rgba(30, 111, 92, 0.6);
        }

        .menu-item:hover .icon-highlight {
          animation: softFloat 1s ease-in-out;
          color: #1e6f5c;
        }

        .menu-image {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 2px solid transparent;
        }

        .icon-highlight {
          transition: all 0.3s ease;
        }

        .category-title-wrapper {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .menu-item:hover .category-title {
          color: #1e6f5c;
          transform: translateY(-2px);
        }

        .category-title {
          transition: all 0.3s ease;
          color: #2c3e50;
          transform: translateY(0);
        }

        .brand-highlight {
          font-family: 'Noto Kufi Arabic', sans-serif;
          font-weight: 600;
          color: #1e6f5c;
          font-size: 1.1rem;
        }
        
        .description-text {
          transition: all 0.3s ease;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .menu-item:hover .description-text {
          color: #495057;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-radius: 50%;
          transition: all 0.4s ease;
          transform: rotate(0deg);
        }

        .menu-item:hover .image-container {
          box-shadow: 0 6px 16px rgba(30, 111, 92, 0.15);
          transform: rotate(5deg);
        }

        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0.4) 50%, 
            rgba(255,255,255,0) 100%);
          animation: shimmer 2s infinite;
          pointer-events: none;
        }

        .tab-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          color: #495057;
          font-weight: 500;
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
        }

        .tab-button:hover {
          color: #1e6f5c;
          background-color: rgba(30, 111, 92, 0.05);
        }

        .active-tab {
          color: #1e6f5c;
          background-color: rgba(30, 111, 92, 0.08);
          font-weight: 600;
        }

        .active-tab::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #1e6f5c, #2d5a4f);
        }

        .explore-button {
          background: linear-gradient(135deg, #1e6f5c 0%, #2d5a4f 100%);
          color: white;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(30, 111, 92, 0.3);
        }

        .explore-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.7s;
        }

        .explore-button:hover::before {
          left: 100%;
        }

        .explore-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(30, 111, 92, 0.4);
        }

        .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1e6f5c 0%, #2d5a4f 100%);
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

        .subtle-accent {
          position: absolute;
          background: linear-gradient(135deg, #1e6f5c 0%, #2d5a4f 100%);
          opacity: 0.03;
          pointer-events: none;
        }

        .accent-1 {
          top: 5%;
          left: 5%;
          width: 300px;
          height: 300px;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: softFloat 20s infinite alternate;
        }

        .accent-2 {
          bottom: 10%;
          right: 5%;
          width: 250px;
          height: 250px;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: softFloat 15s infinite alternate-reverse;
        }

        .menu-tabs {
          position: relative;
        }

        .menu-tabs::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(45, 90, 79, 0.1) 50%, 
            transparent 100%);
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40%;
          height: 3px;
          background: linear-gradient(90deg, #1e6f5c, transparent);
          border-radius: 2px;
        }

        .arabic-title {
          font-family: 'Noto Kufi Arabic', sans-serif;
          color: #1e6f5c;
          display: block;
          font-weight: 700;
          margin-top: 0.5rem;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1024px) {
          .menu-card {
            border-radius: 16px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .menu-section {
            padding: 80px 0;
          }
          
          .menu-card {
            border-radius: 12px;
            padding: 1.25rem;
          }
          
          .tab-button {
            padding: 0.5rem 1rem;
            font-size: 0.95rem;
          }
          
          .explore-button {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="menu-section relative">
        <div className="menu-pattern"></div>
        
        {/* Subtle background accents */}
        <div className="subtle-accent accent-1"></div>
        <div className="subtle-accent accent-2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section with Arabic */}
          <div className="text-center mb-16">
            <div className="heading-text">
              <h2 className="section-title text-4xl sm:text-5xl font-bold text-gray-800 mb-3">
                World Cup Menu
                <span className="arabic-title text-2xl sm:text-3xl text-teal-600">قائمة كأس العالم</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Experience the finest selection of authentic Middle Eastern cuisine, expertly crafted with traditional recipes and premium ingredients.
                <span className="block mt-2 brand-highlight">From our kitchen to your table</span>
              </p>
            </div>
          </div>

          {/* Menu Tabs */}
          <div 
            ref={tabsRef} 
            className="menu-tabs flex space-x-2 sm:space-x-4 mb-12 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-hide"
          >
            {tabs.map((tab, index) => (
              <button 
                key={index}
                className={`tab-button font-medium ${activeTab === index ? 'active-tab' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile & Tablet View */}
          <div className="block sm:hidden mb-12">
            {filteredMenuItems.length > 0 ? (
              <div className="space-y-4">
                {filteredMenuItems.map((item, index) => (
                  <div key={`mobile-${index}`} className="menu-card p-4">
                    <div className="menu-item flex items-center p-2">
                      <div className="image-container w-16 h-16 mr-4 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.category}
                          width={64}
                          height={64}
                          className="menu-image w-full h-full object-cover"
                        />
                        <div className="shimmer-effect"></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="category-title-wrapper">
                          <h4 className="category-title text-base font-bold mb-1">
                            {item.category}
                          </h4>
                        </div>
                        <p className="description-text text-gray-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="icon-highlight ml-2">
                        {getIconForCategory(item.category)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="menu-card p-8 text-center">
                <FaUtensils className="mx-auto text-3xl text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-500">No menu items found</h3>
                <p className="text-gray-400 mt-2">Try another category</p>
              </div>
            )}
          </div>

          {/* Desktop View */}
          <div className="hidden sm:grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {filteredMenuItems.length > 0 ? (
              <>
                {/* Column 1 */}
                <div className="menu-card p-6 sm:p-8">
                  <div className="space-y-6">
                    {getColumnItems(0).map((item, index) => (
                      <div key={`col1-${index}`} className="menu-item flex items-center p-3 rounded-lg last:border-b-0">
                        <div className="image-container w-14 h-14 mr-4 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.category}
                            width={56}
                            height={56}
                            className="menu-image w-full h-full object-cover"
                          />
                          <div className="shimmer-effect"></div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="category-title-wrapper">
                            <h4 className="category-title text-base font-bold mb-1">
                              {item.category}
                            </h4>
                          </div>
                          <p className="description-text text-gray-500 text-sm">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="icon-highlight ml-3">
                          {getIconForCategory(item.category)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 */}
                {getColumnItems(1).length > 0 && (
                  <div className="menu-card p-6 sm:p-8">
                    <div className="space-y-6">
                      {getColumnItems(1).map((item, index) => (
                        <div key={`col2-${index}`} className="menu-item flex items-center p-3 rounded-lg last:border-b-0">
                          <div className="image-container w-14 h-14 mr-4 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.category}
                              width={56}
                              height={56}
                              className="menu-image w-full h-full object-cover"
                            />
                            <div className="shimmer-effect"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="category-title-wrapper">
                              <h4 className="category-title text-base font-bold mb-1">
                                {item.category}
                              </h4>
                            </div>
                            <p className="description-text text-gray-500 text-sm">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="icon-highlight ml-3">
                            {getIconForCategory(item.category)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Column 3 */}
                {getColumnItems(2).length > 0 && (
                  <div className="menu-card p-6 sm:p-8">
                    <div className="space-y-6">
                      {getColumnItems(2).map((item, index) => (
                        <div key={`col3-${index}`} className="menu-item flex items-center p-3 rounded-lg last:border-b-0">
                          <div className="image-container w-14 h-14 mr-4 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.category}
                              width={56}
                              height={56}
                              className="menu-image w-full h-full object-cover"
                            />
                            <div className="shimmer-effect"></div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="category-title-wrapper">
                              <h4 className="category-title text-base font-bold mb-1">
                                {item.category}
                              </h4>
                            </div>
                            <p className="description-text text-gray-500 text-sm">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="icon-highlight ml-3">
                            {getIconForCategory(item.category)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="col-span-3 menu-card p-16 text-center">
                <FaUtensils className="mx-auto text-4xl text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-500">No menu items found</h3>
                <p className="text-gray-400 mt-2">Please try selecting another category</p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/menu">
              <button className="explore-button font-medium py-4 px-8 sm:px-12 text-base sm:text-lg group">
                <span className="flex items-center justify-center space-x-3">
                  <span>View Complete Menu</span>
                  <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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