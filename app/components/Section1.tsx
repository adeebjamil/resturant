'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Section1() {
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
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(3deg);
          }
          50% {
            transform: translateY(-30px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -20px, 0);
          }
          70% {
            transform: translate3d(0, -10px, 0);
          }
          90% {
            transform: translate3d(0, -5px, 0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 30px rgba(249, 115, 22, 0);
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

        @keyframes wiggle {
          0%, 7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%, 100% {
            transform: rotateZ(0);
          }
        }

        @keyframes morphing {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
          }
          34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
          }
        }

        @keyframes moveLeft {
          0% {
            transform: translateX(100vw);
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
            transform: translateX(100vw);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .section-container {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .floating-element {
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation-delay: -2s;
        }

        .floating-element:nth-child(3) {
          animation-delay: -4s;
        }

        .floating-element:nth-child(4) {
          animation-delay: -6s;
        }

        .bounce-element {
          animation: bounce 3s infinite;
        }

        .scale-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scale-hover:hover {
          transform: scale(1.1) translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .rotate-hover {
          transition: all 0.5s ease;
        }

        .rotate-hover:hover {
          transform: rotate(10deg) scale(1.1);
        }

        .pulse-effect {
          animation: pulse 3s infinite;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #000 0%,
            #f97316 50%,
            #000 100%
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

        .wiggle-animation {
          animation: wiggle 2s ease-in-out infinite;
        }

        .morphing-shape {
          animation: morphing 8s ease-in-out infinite;
        }

        .chef-image {
          animation: fadeInLeft 1.5s ease-out 0.5s both;
        }

        .content-right {
          animation: fadeInRight 1.5s ease-out 0.7s both;
        }

        .feature-card {
          animation: fadeInUp 1s ease-out both;
        }

        .stagger-1 { animation-delay: 0.2s; }
        .stagger-2 { animation-delay: 0.4s; }
        .stagger-3 { animation-delay: 0.6s; }
        .stagger-4 { animation-delay: 0.8s; }
        .stagger-5 { animation-delay: 1s; }
        .stagger-6 { animation-delay: 1.2s; }

        .gradient-text {
          background: linear-gradient(135deg, #f97316, #fb923c, #fdba74);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glow-effect {
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .glow-effect:hover {
          box-shadow: 0 0 50px rgba(249, 115, 22, 0.6);
        }

        .button-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .button-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .button-hover:hover::before {
          left: 100%;
        }

        .moving-text-left {
          animation: moveLeft 15s linear infinite;
        }

        .moving-text-right {
          animation: moveRight 15s linear infinite;
        }

        .spin-animation {
          animation: spin 10s linear infinite;
        }

        /* Mobile-specific responsive adjustments */
        @media (max-width: 768px) {
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
          
          .scale-hover:hover {
            transform: scale(1.02) translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
          
          .moving-text-left,
          .moving-text-right {
            animation-duration: 20s;
          }
        }

        @media (max-width: 480px) {
          .scale-hover:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="relative min-h-screen bg-gray-50 overflow-hidden section-container">
        {/* Moving Text Background - Mobile Responsive */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Moving Text - Responsive sizes */}
          <div className="absolute top-4 sm:top-8 md:top-16 left-0 w-full">
            <div className="moving-text-left text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-200/20 sm:text-gray-200/25 md:text-gray-200/30 whitespace-nowrap">
              ITALIAN PIZZA • DELICIOUS FOOD • ITALIAN PIZZA • DELICIOUS FOOD • 
            </div>
          </div>
          
          {/* Bottom Moving Text - Responsive sizes */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 left-0 w-full">
            <div className="moving-text-right text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-200/20 sm:text-gray-200/25 md:text-gray-200/30 whitespace-nowrap">
              BURGER • TASTY FOOD • BURGER • TASTY FOOD • BURGER • TASTY FOOD • 
            </div>
          </div>
        </div>

        {/* Animated Background Elements - Mobile Responsive */}
        <div className="absolute inset-0">
          {/* Floating Real Food Images - Responsive positioning and sizes */}
          <div className="floating-element absolute top-8 sm:top-12 md:top-20 left-2 sm:left-4 md:left-10">
            <Image
              src="/section1/chillies.png"
              alt="Chillies"
              width={80}
              height={80}
              className="opacity-20 sm:opacity-25 md:opacity-30 spin-animation w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </div>
          
          <div className="floating-element absolute top-16 sm:top-24 md:top-40 right-2 sm:right-8 md:right-20">
            <Image
              src="/section1/tomato.png"
              alt="Tomato"
              width={100}
              height={100}
              className="opacity-15 sm:opacity-20 md:opacity-25 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
          </div>
          
          <div className="floating-element absolute bottom-16 sm:bottom-24 md:bottom-40 left-2 sm:left-8 md:left-20">
            <Image
              src="/section1/pizza-three (1).png"
              alt="Pizza"
              width={120}
              height={120}
              className="opacity-10 sm:opacity-15 md:opacity-20 rotate-hover w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </div>
          
          {/* Morphing Background Shapes - Responsive */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-orange-200/20 sm:bg-orange-200/25 md:bg-orange-200/30 morphing-shape"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 sm:w-12 sm:h-12 md:w-18 md:h-18 lg:w-24 lg:h-24 bg-red-200/10 sm:bg-red-200/15 md:bg-red-200/20 morphing-shape" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content - Chef Image Section - Mobile First Design */}
            <div className="chef-image relative order-2 lg:order-1">
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                {/* Main Circle Container with Morphing Effect - Responsive */}
                <div className="relative">
                  {/* Outer Decorative Circles - Responsive */}
                  <div className="absolute inset-0 w-full h-full">
                    {/* Outer Circle 1 */}
                    <div className="absolute top-0 left-0 w-full h-full border border-orange-300/20 sm:border-2 sm:border-orange-300/25 md:border-2 md:border-orange-300/30 rounded-full scale-105 sm:scale-110 pulse-effect"></div>
                    {/* Outer Circle 2 */}
                    <div className="absolute top-0 left-0 w-full h-full border border-orange-200/15 sm:border sm:border-orange-200/20 rounded-full scale-115 sm:scale-125 pulse-effect" style={{animationDelay: '1s'}}></div>
                  </div>

                  {/* Main Chef Image Container - Fully Responsive */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden glow-effect scale-hover">
                    <Image
                      src="/section1/about (1).jpg"
                      alt="Professional Chef"
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Mobile First Responsive Design */}
            <div className="content-right space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
              
              {/* Section Badge - Responsive */}
              <div className="stagger-1 flex justify-center lg:justify-start">
                <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bounce-element">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full pulse-effect"></span>
                  <span>LEARN ABOUT WELLFOOD</span>
                </div>
              </div>

              {/* Main Heading - Fully Responsive Typography */}
              <div className="stagger-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  <span className="block">THE AMAZING &</span>
                  <span className="block shimmer-text">QUALITY FOOD</span>
                  <span className="block gradient-text">FOR YOUR GOOD HEALTH</span>
                </h2>
              </div>

              {/* Description - Responsive */}
              <div className="stagger-3">
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Welcome to our restaurant, where culinary excellence meets warm 
                  hospitality. In every dish we serve, Nestled in the heart of City Name our 
                  eatery invites you on a journey.
                </p>
              </div>

              {/* Action Buttons - Mobile First Design */}
              <div className="stagger-4 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <button className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 button-hover glow-effect scale-hover">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="text-sm sm:text-base">LEARN MORE</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 scale-hover">
                  <span className="flex items-center justify-center space-x-2">
                    <span className="text-sm sm:text-base">ONLINE ORDER</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m0 0l2.5 5" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Feature Cards - Mobile Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="feature-card stagger-5 bg-white p-4 sm:p-6 rounded-lg shadow-lg scale-hover">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center bounce-element flex-shrink-0">
                      <span className="text-orange-500 text-lg sm:text-2xl">👨‍🍳</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">BEST QUALITY FOOD</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Our talented chefs craft each dish with 
                        precision and artistry
                      </p>
                    </div>
                  </div>
                </div>

                <div className="feature-card stagger-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg scale-hover">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center bounce-element flex-shrink-0">
                      <span className="text-orange-500 text-lg sm:text-2xl">🥘</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">EXPERIENCE OUR CHEFS</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Our talented chefs craft each dish with 
                        precision and artistry
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Responsive */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10">
          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-15 sm:opacity-20 pulse-effect"></div>
        </div>
        <div className="absolute top-4 sm:top-6 md:top-10 right-4 sm:right-6 md:right-10">
          <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 sm:opacity-15 pulse-effect" style={{animationDelay: '2s'}}></div>
        </div>
      </section>
    </>
  )
}