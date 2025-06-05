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
            transform: scale(0.8);
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
            transform: scale(1.1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }

        .section-container {
          animation: fadeIn 1s ease-out;
        }

        .gradient-background {
          background: linear-gradient(135deg, 
            #ff4500 0%,
            #ff6b00 15%,
            #ff8c00 30%,
            #ffa500 45%,
            #ffb347 60%,
            #ff7f50 75%,
            #ff4500 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        .delicious-text {
          animation: slideInLeft 0.8s ease-out 0.2s both, bounce 2s ease-in-out 3s infinite;
          font-family: 'Brush Script MT', cursive;
          background: linear-gradient(135deg, #fff, #ffeb3b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .main-heading {
          animation: slideInLeft 0.8s ease-out 0.4s both;
        }

        .main-heading span:nth-child(1) {
          animation: zoomIn 0.6s ease-out 0.6s both;
        }

        .main-heading span:nth-child(2) {
          animation: zoomIn 0.6s ease-out 0.8s both;
        }

        .main-heading span:nth-child(3) {
          animation: zoomIn 0.6s ease-out 1s both, shake 0.5s ease-in-out 4s;
        }

        .offer-details {
          animation: slideInLeft 0.8s ease-out 0.6s both;
        }

        .price-text {
          animation: scaleIn 0.8s ease-out 1.2s both, pulse 2s ease-in-out 3s infinite;
        }

        .order-button {
          animation: slideInLeft 0.8s ease-out 0.8s both;
          transition: all 0.3s ease;
        }

        .order-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          animation: shake 0.3s ease-in-out;
        }

        .main-food-image {
          animation: slideInRight 0.8s ease-out 0.5s both, float 4s ease-in-out 2s infinite;
          transition: all 0.4s ease;
        }

        .main-food-image:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .side-food {
          animation: scaleIn 0.8s ease-out 0.9s both, rotate 20s linear 3s infinite;
        }

        .price-badge {
          animation: pulse 3s ease-in-out infinite, bounce 1s ease-out 2s;
          background: linear-gradient(135deg, #ffeb3b, #ffc107);
        }

        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .floating-element:nth-child(3) {
          animation: float 5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff, #ffeb3b);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .background-text {
          animation: fadeIn 2s ease-out 1s both, pulse 8s ease-in-out 5s infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .main-heading h1 {
            font-size: 2rem;
          }
          
          .delicious-text {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="background-text text-white/10 text-6xl lg:text-9xl font-black select-none">
            SPECIAL DEAL
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-6 h-6 bg-white/20 rounded-full"></div>
          <div className="floating-element absolute bottom-32 left-20 w-8 h-8 bg-yellow-400/30 rounded-full"></div>
          <div className="floating-element absolute top-1/2 right-10 w-4 h-4 bg-white/15 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 lg:py-20">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              
              {/* Delicious Script Text */}
              <div className="delicious-text text-4xl lg:text-6xl font-bold italic">
                Delicious
              </div>

              {/* Main Heading */}
              <div className="main-heading">
                <h1 className="text-3xl lg:text-5xl font-black leading-tight">
                  <span className="block text-white">SPECIAL DEAL</span>
                  <span className="block text-white">OFFER</span>
                  <span className="block gradient-text">FOR THIS WEEK</span>
                </h1>
              </div>

              {/* Offer Details */}
              <div className="offer-details space-y-6">
                <div className="space-y-3">
                  <span className="text-yellow-300 text-base lg:text-lg font-bold tracking-wide block">
                    GRILLED BEEF MEAT ONLY
                  </span>
                  <div className="price-text text-5xl lg:text-6xl font-black gradient-text">
                    $59
                  </div>
                </div>

                <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-md">
                  Restaurant, where culinary excellence meets warm hospitality in 
                  every dish we serve nestled in the heart of city.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="order-button bg-black/70 hover:bg-black/80 backdrop-blur-sm px-8 py-3 lg:px-10 lg:py-4 rounded-full text-white font-bold text-base lg:text-lg group shadow-lg border border-white/20">
                  <span className="flex items-center justify-center space-x-3">
                    <span>ORDER NOW</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Food Display */}
            <div className="relative flex items-center justify-center">
              
              {/* Main Food Container */}
              <div className="main-food-image relative">
                
                {/* Main Steak Image */}
                <div className="relative w-80 lg:w-96 h-80 lg:h-96 mx-auto">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <Image
                      src="/section3/steak.webp"
                      alt="Premium Grilled Steak"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Price Badge */}
                  <div className="price-badge absolute -bottom-6 -right-6 w-24 h-24 lg:w-28 lg:h-28 rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-20">
                    <span className="text-xs lg:text-sm font-bold">ONLY</span>
                    <span className="text-xl lg:text-2xl font-black">$59</span>
                  </div>
                </div>
              </div>

              {/* Side Pizza */}
              <div className="side-food absolute -left-12 lg:-left-16 top-8 w-24 h-24 lg:w-32 lg:h-32">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-400/50 shadow-xl">
                  <Image
                    src="/section3/pizza.webp"
                    alt="Delicious Pizza"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Pizza Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 lg:w-8 lg:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  🍕
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 left-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 floating-element"></div>
              </div>
              
              <div className="absolute top-6 -right-6">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-50 floating-element"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border - Seamless connection */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
      </section>
    </>
  )
}