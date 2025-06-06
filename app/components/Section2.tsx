'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Section2() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const foodCategories = [
    {
      id: 1,
      title: "BURGER",
      image: "/section2/burger.webp",
      background: "from-orange-600 to-red-600",
      badge: "HOT",
      badgeColor: "bg-yellow-500",
      textBg: "BURGER"
    },
    {
      id: 2,
      title: "PIZZA",
      image: "/section2/pizza.jpg",
      background: "from-yellow-500 to-orange-500",
      badge: "-10%",
      badgeColor: "bg-red-500",
      textBg: "PIZZA"
    },
    {
      id: 3,
      title: "HOTDOG",
      image: "/section2/hotdog.webp",
      background: "from-red-600 to-orange-600",
      badge: "HOT",
      badgeColor: "bg-yellow-500",
      textBg: "HOTDOG"
    },
    {
      id: 4,
      title: "CHICKENS",
      image: "/section2/chicken.jpg",
      background: "from-yellow-400 to-orange-400",
      badge: "-15%",
      badgeColor: "bg-red-500",
      textBg: "CHICKENS"
    },
    {
      id: 5,
      title: "SEAFOOD",
      image: "/section2/seafood.jpg",
      background: "from-orange-600 to-red-600",
      badge: "HOT",
      badgeColor: "bg-yellow-500",
      textBg: "SEAFOOD"
    }
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .section-container {
          animation: fadeIn 0.8s ease-out;
        }

        .food-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: slideIn 0.6s ease-out both;
          height: 400px;
          flex: 1;
          min-width: 280px;
          cursor: pointer;
        }

        .food-card:nth-child(2) { animation-delay: 0.1s; }
        .food-card:nth-child(3) { animation-delay: 0.2s; }
        .food-card:nth-child(4) { animation-delay: 0.3s; }
        .food-card:nth-child(5) { animation-delay: 0.4s; }

        .food-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .food-image {
          transition: all 0.3s ease;
        }

        .food-card:hover .food-image {
          transform: scale(1.1);
        }

        .badge {
          animation: pulse 2s ease-in-out infinite;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .background-text {
          font-weight: 900;
          letter-spacing: 0.2em;
          opacity: 0.1;
          font-size: 4rem;
          line-height: 1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .food-title {
          transition: all 0.3s ease;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-size: 2.5rem;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .food-card:hover .food-title {
          transform: scale(1.05);
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
        }

        .goodfood-logo {
          font-family: 'Brush Script MT', cursive;
          font-style: italic;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .browse-button {
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(10px);
          backdrop-filter: blur(5px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .food-card:hover .browse-button {
          opacity: 1;
          transform: translateY(0);
        }

        .browse-button:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .food-card {
            min-width: 50%;
            height: 350px;
          }
          
          .background-text {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .food-card {
            min-width: 100%;
            height: 280px;
            margin-bottom: 1px;
          }
          
          .background-text {
            font-size: 2.5rem;
          }
          
          .food-title {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
          }
          
          .badge {
            width: 50px;
            height: 50px;
            font-size: 12px;
          }
          
          .food-image {
            width: 120px !important;
            height: 120px !important;
          }
        }
        
        @media (max-width: 480px) {
          .food-card {
            height: 250px;
          }
          
          .background-text {
            font-size: 2rem;
          }
          
          .food-title {
            font-size: 1.5rem;
          }
          
          .badge {
            width: 45px;
            height: 45px;
            font-size: 11px;
            top: 4px;
            right: 4px;
          }
          
          .goodfood-logo {
            font-size: 1rem !important;
          }
        }
      `}</style>

      <section className="relative bg-white overflow-hidden section-container">
        {/* Food Cards Container - Horizontal Layout */}
        <div className="w-full">
          <div className="flex flex-wrap lg:flex-nowrap">
            {foodCategories.map((category, index) => (
              <div
                key={category.id}
                className={`food-card bg-gradient-to-br ${category.background} relative group`}
              >
                {/* Good Food Logo */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                  <div className="goodfood-logo text-white font-bold text-sm sm:text-xl">
                    ✨GoodFood
                  </div>
                </div>

                {/* Badge */}
                <div className={`badge absolute top-4 sm:top-6 right-4 sm:right-6 ${category.badgeColor} text-white z-20`}>
                  {category.badge}
                </div>

                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="background-text text-white/10 transform -rotate-12">
                    {category.textBg}
                  </div>
                </div>

                {/* Food Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15">
                  <div className="food-image w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 relative rounded-full overflow-hidden border-4 border-white/20">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Title and Button */}
                <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center z-20">
                  <h3 className="food-title text-white mb-2 sm:mb-4">
                    {category.title}
                  </h3>
                </div>

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}