'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Section3() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <style jsx>{`
        /* Core animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Base styling */
        .deal-section {
          background-color: #000;
          background-image: radial-gradient(circle at top right, #111 0%, #000 80%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
        
        /* Text styling */
        .delicious-text {
          font-family: 'Brush Script MT', cursive;
          background: linear-gradient(135deg, #fff, #ffeb3b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #fff, #ffeb3b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .price-text {
          background: linear-gradient(135deg, #fff, #ffeb3b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeIn 0.8s ease-out 0.5s both, pulse 3s ease-in-out 2s infinite;
        }
        
        .order-button {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border: none;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .order-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.5);
        }
        
        /* Desktop images */
        .main-food-container {
          animation: fadeIn 0.8s ease-out 0.3s forwards, float 6s ease-in-out 2s infinite;
        }
        
        .food-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 5s linear infinite;
          z-index: 5;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .deal-section {
            min-height: 100vh;
            padding: 0;
          }
          
          .mobile-content {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 20px;
          }
          
          .mobile-food-section {
            width: 100%;
            max-width: 300px;
            margin: 30px 0;
            position: relative;
            animation: slideInUp 0.8s ease-out 0.4s forwards;
          }
          
          .mobile-main-dish {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid #ff6b35;
            box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
            animation: float 4s ease-in-out infinite;
          }
          
          .mobile-decorative-dots {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
          
          .mobile-dot {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 107, 53, 0.3);
          }
          
          .mobile-dot:nth-child(1) {
            top: 20%;
            left: 10%;
            width: 8px;
            height: 8px;
            animation: float 3s ease-in-out infinite;
          }
          
          .mobile-dot:nth-child(2) {
            top: 60%;
            right: 15%;
            width: 12px;
            height: 12px;
            animation: float 4s ease-in-out infinite 1s;
          }
          
          .mobile-dot:nth-child(3) {
            bottom: 30%;
            left: 20%;
            width: 6px;
            height: 6px;
            animation: float 5s ease-in-out infinite 2s;
          }
          
          .mobile-background-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            font-weight: 900;
            color: rgba(255, 255, 255, 0.05);
            pointer-events: none;
            z-index: 1;
          }
        }
        
        @media (max-width: 480px) {
          .delicious-text {
            font-size: 2.5rem !important;
          }
          
          .main-heading h1 span {
            font-size: 1.8rem !important;
          }
          
          .price-text {
            font-size: 3rem !important;
          }
          
          .order-button {
            width: 100%;
            max-width: 280px;
            padding: 16px 32px !important;
            font-size: 16px !important;
            font-weight: bold;
          }
          
          .mobile-main-dish {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>

      <section className="deal-section">
        {/* Desktop background elements */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-gray-800/20 text-6xl lg:text-9xl font-black select-none">
              SPECIAL DEAL
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-500/20 rounded-full" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
            <div className="absolute bottom-32 left-20 w-8 h-8 bg-yellow-400/30 rounded-full" style={{ animation: 'float 3s ease-in-out infinite 1s' }}></div>
            <div className="absolute top-1/2 right-10 w-4 h-4 bg-white/15 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 2s' }}></div>
          </div>
        </div>

        {/* Mobile Background */}
        <div className="md:hidden">
          <div className="mobile-background-text">DEAL</div>
          <div className="mobile-decorative-dots">
            <div className="mobile-dot"></div>
            <div className="mobile-dot"></div>
            <div className="mobile-dot"></div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="hidden md:block relative z-10 container mx-auto px-4 lg:px-8">
          <div className="deal-content flex flex-col lg:flex-row items-start lg:items-center min-h-screen py-12 lg:py-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
              <div className="delicious-text text-4xl lg:text-6xl font-bold italic">
                Delicious
              </div>

              <div className="main-heading">
                <h1 className="text-2xl lg:text-5xl font-black leading-tight">
                  <span className="block text-white">SPECIAL DEAL</span>
                  <span className="block text-white">OFFER</span>
                  <span className="block gradient-text">FOR THIS WEEK</span>
                </h1>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="space-y-3">
                  <span className="text-yellow-300 text-sm lg:text-lg font-bold tracking-wide block">
                    GRILLED CHICKEN PLATTER
                  </span>
                  <div className="price-text text-4xl lg:text-6xl font-black">
                    $59
                  </div>
                </div>

                <p className="text-white/80 text-sm lg:text-lg leading-relaxed max-w-md">
                  Restaurant, where culinary excellence meets warm hospitality in 
                  every dish we serve nestled in the heart of city.
                </p>

                <div className="pt-4">
                  <button className="order-button px-8 py-3 lg:px-10 lg:py-4 rounded-full text-white font-bold text-sm lg:text-lg group">
                    <span className="flex items-center justify-center space-x-3">
                      <span>ORDER NOW</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Right Content */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative mx-auto">
                <div className="main-food-container relative w-96 h-[480px]">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <Image
                      src="/section3/pizzah.webp"
                      alt="Premium Dish"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <div className="food-shimmer"></div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center text-black shadow-2xl z-20"
                       style={{ 
                         background: 'linear-gradient(135deg, #ffeb3b, #ffc107)', 
                         animation: 'pulse 3s ease-in-out infinite' 
                       }}>
                    <span className="text-sm font-bold">ONLY</span>
                    <span className="text-2xl font-black">$59</span>
                  </div>
                </div>

                <div className="absolute -left-16 top-8 w-32 h-32" 
                     style={{ animation: 'float 4s ease-in-out 3s infinite' }}>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-400/50 shadow-xl">
                    <Image
                      src="/section3/pizza.webp"
                      alt="Delicious Pizza"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    🍕
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="md:hidden relative z-10">
          <div className="mobile-content">
            {/* Mobile Text Content */}
            <div className="space-y-6">
              <div className="delicious-text text-4xl font-bold italic">
                Delicious
              </div>

              <div className="main-heading">
                <h1 className="text-3xl font-black leading-tight">
                  <span className="block text-white">SPECIAL DEAL</span>
                  <span className="block text-white">OFFER</span>
                  <span className="block gradient-text">FOR THIS WEEK</span>
                </h1>
              </div>

              <div className="space-y-4">
                <span className="text-yellow-300 text-lg font-bold tracking-wide block">
                  GRILLED CHICKEN PLATTER
                </span>
                <div className="price-text text-5xl font-black">
                  $59
                </div>
              </div>
            </div>

            {/* Mobile Food Section - Simplified */}
            <div className="mobile-food-section">
              <div className="mobile-main-dish">
                <Image
                  src="/section3/pizzah.webp"
                  alt="Premium Dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile Description and Button */}
            <div className="space-y-6 max-w-sm">
              <p className="text-white/80 text-base leading-relaxed">
                Restaurant, where culinary excellence meets warm hospitality in 
                every dish we serve nestled in the heart of city.
              </p>

              <button className="order-button px-8 py-4 rounded-full text-white font-bold text-lg group w-full">
                <span className="flex items-center justify-center space-x-3">
                  <span>ORDER NOW</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}