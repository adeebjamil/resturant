'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MenuShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const menuItems = [
    {
      id: 1,
      category: "RED KING CRAB",
      price: "$25",
      description: "Native to the icy waters of the Pacific",
      image: "/menu/red-king-crab.jpg",
      link: "/menu/red-king-crab"
    },
    {
      id: 2,
      category: "ALASKAN KING CRAB", 
      price: "$10",
      description: "Native to the icy waters of the Pacific",
      image: "/menu/alaskan-crab.jpg",
      link: "/menu/alaskan-king-crab"
    },
    {
      id: 3,
      category: "PIZZA",
      price: "$22", 
      description: "Native to the icy waters of the Pacific",
      image: "/menu/pizza.jpg",
      link: "/menu/pizza"
    },
    {
      id: 4,
      category: "HAMBURGER",
      price: "$43",
      description: "Native to the icy waters of the Pacific",
      image: "/menu/hamburger.jpg",
      link: "/menu/hamburger"
    },
    {
      id: 5,
      category: "CHICKEN SOUP",
      price: "$77",
      description: "Native to the icy waters of the Pacific",
      image: "/menu/chicken-soup.jpg",
      link: "/menu/chicken-soup"
    }
  ]

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

        .section-container {
          animation: fadeIn 1s ease-out;
        }

        .heading-text {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        .menu-card {
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
          box-shadow: 0 15px 40px rgba(255, 69, 0, 0.15);
        }

        .menu-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .menu-item:hover {
          transform: translateX(5px);
          background: linear-gradient(90deg, transparent, rgba(255, 69, 0, 0.05), transparent);
        }

        .menu-item:hover .menu-image {
          animation: pulse 0.6s ease-in-out;
        }

        .menu-item:hover .price-highlight {
          animation: bounce 0.8s ease-in-out;
        }

        .menu-image {
          transition: all 0.3s ease;
        }

        .menu-image:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .price-highlight {
          color: #ff4500;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation: float 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        .moving-text-left {
          animation: moveLeft 25s linear infinite;
        }

        .moving-text-right {
          animation: moveRight 20s linear infinite;
        }

        .explore-button {
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
          box-shadow: 0 12px 30px rgba(255, 69, 0, 0.4);
          animation: wiggle 0.5s ease-in-out;
        }

        .category-title {
          animation: slideInLeft 0.6s ease-out both;
          transition: all 0.3s ease;
        }

        .category-title:hover {
          color: #ff4500;
          transform: scale(1.05);
        }

        .description-text {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .image-container {
          position: relative;
          overflow: hidden;
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

        /* Responsive */
        @media (max-width: 768px) {
          .moving-text-left,
          .moving-text-right {
            font-size: 3rem;
          }
          
          .menu-card {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <section className="relative min-h-screen bg-gray-50 py-16 overflow-hidden section-container">
        {/* Moving Background Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-10 left-0 w-full">
            <div className="moving-text-left text-6xl md:text-8xl font-black text-gray-400 whitespace-nowrap">
              ITALIAN PIZZA • DELICIOUS FOODS • BURGER KING • COFFEE • SEAFOOD • CRAB •
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 w-full">
            <div className="moving-text-right text-6xl md:text-8xl font-black text-gray-400 whitespace-nowrap">
              DELICIOUS FOODS • BURGER KING • COFFEE • ITALIAN PIZZA • SEAFOOD • CRAB •
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-16 h-16 bg-orange-100 rounded-full opacity-50"></div>
          <div className="floating-element absolute bottom-32 left-20 w-12 h-12 bg-red-100 rounded-full opacity-40"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-100 rounded-full opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="heading-text">
              <span className="text-orange-500 font-bold text-lg tracking-wide block mb-4">
                POPULAR MENU
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
                WE PROVIDE EXCLUSIVE FOOD BASED ON USA
              </h2>
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-700">
                EXPLORE OUR POPULAR FOOD
              </h3>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Column 1 */}
            <div className="menu-card bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <Link key={`col1-${index}`} href={item.link}>
                    <div className="menu-item flex items-center justify-between p-4 rounded-lg border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="image-container w-16 h-16 rounded-full overflow-hidden shadow-md">
                          <Image
                            src={item.image}
                            alt={item.category}
                            width={64}
                            height={64}
                            className="menu-image w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="category-title font-bold text-gray-900 text-lg mb-1">
                            {item.category}
                          </h4>
                          <p className="description-text text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <span className="price-highlight text-xl font-black ml-4">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="menu-card bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <Link key={`col2-${index}`} href={item.link}>
                    <div className="menu-item flex items-center justify-between p-4 rounded-lg border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="image-container w-16 h-16 rounded-full overflow-hidden shadow-md">
                          <Image
                            src={item.image}
                            alt={item.category}
                            width={64}
                            height={64}
                            className="menu-image w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="category-title font-bold text-gray-900 text-lg mb-1">
                            {item.category}
                          </h4>
                          <p className="description-text text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <span className="price-highlight text-xl font-black ml-4">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="menu-card bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <Link key={`col3-${index}`} href={item.link}>
                    <div className="menu-item flex items-center justify-between p-4 rounded-lg border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="image-container w-16 h-16 rounded-full overflow-hidden shadow-md">
                          <Image
                            src={item.image}
                            alt={item.category}
                            width={64}
                            height={64}
                            className="menu-image w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="category-title font-bold text-gray-900 text-lg mb-1">
                            {item.category}
                          </h4>
                          <p className="description-text text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <span className="price-highlight text-xl font-black ml-4">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/menu">
              <button className="explore-button bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg">
                <span className="flex items-center justify-center space-x-3">
                  <span>VIEW FULL MENU</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}