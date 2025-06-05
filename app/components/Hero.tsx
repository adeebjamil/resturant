'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 100px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translate3d(-100px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(100px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
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

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -15px, 0);
          }
          70% {
            transform: translate3d(0, -7px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(249, 115, 22, 0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes rotateY {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
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

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.3);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.3);
          }
          70% {
            transform: scale(1);
          }
        }

        .hero-title {
          animation: fadeInLeft 1.2s ease-out 0.3s both;
        }

        .hero-subtitle {
          animation: fadeInLeft 1.2s ease-out 0.6s both;
        }

        .hero-description {
          animation: fadeInUp 1.2s ease-out 0.9s both;
        }

        .hero-buttons {
          animation: fadeInUp 1.2s ease-out 1.2s both;
        }

        .hero-image {
          animation: fadeInRight 1.5s ease-out 0.5s both;
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation-delay: -2s;
        }

        .floating-element:nth-child(3) {
          animation-delay: -4s;
        }

        .pulse-button {
          animation: pulse 2s infinite;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #fff 0%,
            #f97316 50%,
            #fff 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        .typewriter {
          overflow: hidden;
          border-right: 3px solid #f97316;
          white-space: nowrap;
          animation: typewriter 4s steps(40) 1s 1 normal both,
                     blink 1s steps(40) infinite normal;
        }

        .bounce-element {
          animation: bounce 2s infinite;
        }

        .scale-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scale-hover:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .rotate-hover {
          transition: all 0.3s ease;
        }

        .rotate-hover:hover {
          transform: rotate(5deg) scale(1.1);
        }

        .glow-effect {
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .glow-effect:hover {
          box-shadow: 0 0 40px rgba(249, 115, 22, 0.6);
        }

        .price-badge {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f97316, #fb923c, #fdba74);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .slide-up {
          animation: slideInDown 1s ease-out;
        }

        .zoom-in {
          animation: zoomIn 1s ease-out;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
      `}</style>

      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Shape */}
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-shape2.png"
            alt="Background Shape"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Food Elements */}
          <div className="floating-element absolute top-20 left-10 text-6xl opacity-30">
            🌶️
          </div>
          <div className="floating-element absolute top-40 right-20 text-5xl opacity-20">
            🍅
          </div>
          <div className="floating-element absolute bottom-40 left-20 text-4xl opacity-25">
            🧄
          </div>
          <div className="floating-element absolute top-60 left-1/4 text-3xl opacity-15">
            🌿
          </div>
          <div className="floating-element absolute bottom-20 right-1/4 text-5xl opacity-20">
            🥕
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Content */}
            <div className="space-y-8">
              
              {/* Price Badge with Animation */}
              <div className="hero-subtitle">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 price-badge">
                  <span className="text-orange-400 text-2xl bounce-element">🍔</span>
                  <span className="text-orange-400 font-semibold">Start price Only $25</span>
                </div>
              </div>

              {/* Main Title with Staggered Animation */}
              <div className="hero-title space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="block shimmer-text stagger-1">DELICIOUS</span>
                  <span className="block gradient-text stagger-2">FOOD</span>
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-300 typewriter stagger-3">
                  NEAR YOUR TOWN
                </h2>
              </div>

              {/* Description */}
              <div className="hero-description">
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Welcome to our culinary sanctuary, where every dish tells a story. 
                  Every bite is an adventure at our food website, we invite you to 
                  experience flavors that dance on your palate.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-6">
                <button className="group relative bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 scale-hover glow-effect overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>VIEW ALL MENU</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <Link href="/contact">
                  <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 scale-hover">
                    <span className="flex items-center space-x-2">
                      <span>BOOK NOW</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>

              {/* Stats with Animation */}
              <div className="hero-description grid grid-cols-3 gap-8 pt-8">
                <div className="text-center scale-hover">
                  <div className="text-3xl font-bold gradient-text stagger-1">500+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>
                <div className="text-center scale-hover">
                  <div className="text-3xl font-bold gradient-text stagger-2">50+</div>
                  <div className="text-gray-400 text-sm">Delicious Dishes</div>
                </div>
                <div className="text-center scale-hover">
                  <div className="text-3xl font-bold gradient-text stagger-3">5★</div>
                  <div className="text-gray-400 text-sm">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="hero-image relative">
              <div className="relative">
                {/* Main Food Image */}
                <div className="relative z-10 transform rotate-hover">
                  <div className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-full p-8 glow-effect">
                    <Image
                      src="/hero/hero-right.png"
                      alt="Delicious Food"
                      width={600}
                      height={600}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                    
                    {/* Price Tag using actual price image */}
                    <div className="absolute -top-4 -right-4 price-badge">
                      <Image
                        src="/hero/price.png"
                        alt="Price Tag"
                        width={100}
                        height={100}
                        className="w-20 h-20 drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-orange-500/20 rounded-full blur-xl floating-element"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-red-500/20 rounded-full blur-xl floating-element"></div>
                <div className="absolute top-1/2 -left-12 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg floating-element"></div>
              </div>

              {/* Floating Action Cards */}
              <div className="absolute -left-16 top-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 floating-element scale-hover">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Fresh Ingredients</div>
                    <div className="text-gray-300 text-xs">100% Organic</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-16 bottom-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 floating-element scale-hover">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🚀</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Fast Delivery</div>
                    <div className="text-gray-300 text-xs">30 min or less</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}