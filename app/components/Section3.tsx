'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Section3() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    specialties: 0,
    years: 0,
    customers: 1000,
    halal: 0
  })
  const sectionRef = useRef<HTMLElement>(null)

  // Counter animation function
  const animateCounter = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)
      
      callback(current)
      
      if (progress >= 1) {
        clearInterval(timer)
      }
    }, 16)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            
            // Start counter animations with delays
            setTimeout(() => {
              animateCounter(0, 25, 2000, (value) => 
                setCounters(prev => ({ ...prev, specialties: value }))
              )
            }, 800)

            setTimeout(() => {
              animateCounter(0, 10, 1800, (value) => 
                setCounters(prev => ({ ...prev, years: value }))
              )
            }, 1000)

            setTimeout(() => {
              animateCounter(1000, 5000, 2500, (value) => 
                setCounters(prev => ({ ...prev, customers: value }))
              )
            }, 1200)

            setTimeout(() => {
              animateCounter(0, 100, 2200, (value) => 
                setCounters(prev => ({ ...prev, halal: value }))
              )
            }, 1400)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>World Cup Coffee & Dubai Cuisine Restaurant | Authentic Middle Eastern Food</title>
        <meta name="description" content="Experience authentic Dubai cuisine and premium coffee at World Cup Coffee Restaurant. Fresh Middle Eastern dishes, traditional Arabic coffee, and modern dining experience in the heart of the city." />
        <meta name="keywords" content="World Cup Coffee, Dubai cuisine, Middle Eastern restaurant, Arabic coffee, Dubai food, authentic cuisine, coffee shop, restaurant near me, halal food" />
        <meta name="author" content="World Cup Coffee Restaurant" />
        <meta property="og:title" content="World Cup Coffee & Dubai Cuisine Restaurant" />
        <meta property="og:description" content="Authentic Dubai cuisine and premium coffee experience. Fresh Middle Eastern dishes and traditional Arabic coffee." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://worldcupcoffee.com" />
        <meta property="og:image" content="/section3/dubai-cuisine-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="World Cup Coffee & Dubai Cuisine Restaurant" />
        <meta name="twitter:description" content="Experience authentic Dubai cuisine and premium coffee in a modern dining atmosphere." />
        <link rel="canonical" href="https://worldcupcoffee.com/dubai-cuisine" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "World Cup Coffee Restaurant",
            "description": "Authentic Dubai cuisine and premium coffee restaurant",
            "cuisine": ["Middle Eastern", "Arabic", "Coffee"],
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressCountry": "UAE"
            },
            "telephone": "+971-xxx-xxxx",
            "url": "https://worldcupcoffee.com",
            "image": "/section3/dubai-cuisine-hero.jpg",
            "servesCuisine": ["Arabic", "Middle Eastern", "Coffee"],
            "hasMenu": "https://worldcupcoffee.com/menu"
          })}
        </script>
      </Head>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .showcase-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-dot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
        }

        .floating-dot:nth-child(1) {
          top: 15%;
          left: 8%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #1e6f5c, #2d5a4f);
          animation: float 8s ease-in-out infinite;
        }

        .floating-dot:nth-child(2) {
          top: 55%;
          right: 12%;
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #2d5a4f, #1e6f5c);
          animation: float 6s ease-in-out infinite 2s;
        }

        .floating-dot:nth-child(3) {
          bottom: 25%;
          left: 15%;
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #495057, #6c757d);
          animation: float 10s ease-in-out infinite 4s;
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          margin-bottom: 1rem;
          animation: ${isVisible ? 'slideInLeft 1s ease-out' : 'none'};
        }

        .hero-title .dark-text {
          color: #2c3e50;
        }

        .hero-title .teal-text {
          background: linear-gradient(135deg, #1e6f5c 0%, #2d5a4f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: #2c3e50;
          font-weight: 400;
          margin-bottom: 2rem;
          animation: ${isVisible ? 'slideInLeft 1s ease-out 0.2s both' : 'none'};
        }

        .hero-description {
          color: #495057;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          max-width: 500px;
          animation: ${isVisible ? 'fadeInUp 1s ease-out 0.4s both' : 'none'};
        }

        .cta-button {
          background: linear-gradient(135deg, #1e6f5c 0%, #2d5a4f 100%);
          color: #ffffff;
          border: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(30, 111, 92, 0.3);
          animation: ${isVisible ? 'scaleIn 1s ease-out 0.6s both' : 'none'};
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(30, 111, 92, 0.4);
          background: linear-gradient(135deg, #2d5a4f 0%, #1e6f5c 100%);
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          animation: ${isVisible ? 'slideInRight 1s ease-out 0.3s both' : 'none'};
        }

        .main-showcase {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(44, 62, 80, 0.1);
          border: 1px solid #e9ecef;
        }

        .showcase-image {
          transition: transform 0.5s ease;
        }

        .main-showcase:hover .showcase-image {
          transform: scale(1.05);
        }

        .feature-badge {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #1e6f5c, #2d5a4f);
          color: white;
          padding: 10px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 10px 25px rgba(30, 111, 92, 0.3);
        }

        .side-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 25px rgba(44, 62, 80, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #f1f3f4;
        }

        .side-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(44, 62, 80, 0.15);
        }

        .item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(44, 62, 80, 0.8));
          color: white;
          padding: 20px;
        }

        .item-title {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: #ffffff;
        }

        .item-desc {
          font-size: 0.9rem;
          opacity: 0.9;
          color: #e9ecef;
        }

        .stats-section {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(30, 111, 92, 0.1);
          box-shadow: 0 15px 35px rgba(44, 62, 80, 0.1);
          animation: ${isVisible ? 'fadeInUp 1s ease-out 0.8s both' : 'none'};
        }

        .stat-number {
          color: #1e6f5c;
          font-weight: 900;
          transition: all 0.3s ease;
          animation: ${isVisible ? 'countUp 0.8s ease-out both' : 'none'};
        }

        .stat-label {
          color: #495057;
          font-weight: 500;
        }

        .stat-item {
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-item:hover .stat-number {
          transform: scale(1.1);
          color: #2d5a4f;
        }

        @media (max-width: 1024px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .main-showcase {
            order: 1;
          }
          
          .side-showcase {
            order: 2;
            flex-direction: row;
            overflow-x: auto;
            gap: 15px;
            padding-bottom: 10px;
          }
          
          .side-item {
            min-width: 200px;
            flex-shrink: 0;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            text-align: center;
          }
          
          .hero-subtitle {
            text-align: center;
          }
          
          .hero-description {
            text-align: center;
            margin: 0 auto 2rem;
          }
          
          .cta-button {
            display: block;
            margin: 0 auto;
            width: fit-content;
          }
          
          .showcase-grid {
            margin-top: 3rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="showcase-section">
        <div className="floating-elements">
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
        </div>

        <div className="content-wrapper">
          <div className="container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="hero-title">
                    <span className="dark-text">World Cup Coffee</span>
                    <span className="dark-text"> & </span>
                    <span className="teal-text">Dubai Cuisine</span>
                  </h1>
                  <p className="hero-subtitle">
                    Authentic Middle Eastern Experience
                  </p>
                </div>

                <p className="hero-description">
                  Discover the rich flavors of Dubai cuisine alongside our premium coffee selection. 
                  From traditional Arabic dishes to modern Middle Eastern fusion, we bring you 
                  an authentic culinary journey that celebrates the heritage and innovation of Dubai's 
                  vibrant food culture.
                </p>

                <button className="cta-button group">
                  <span className="flex items-center gap-3">
                    Explore Dubai Cuisine
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Right Content - Showcase */}
              <div className="showcase-grid">
                <div className="main-showcase">
                  <div className="relative h-125">
                    <Image
                      src="/Discover/section2.jpg"
                      alt="Authentic Dubai Mixed Grill Platter"
                      fill
                      className="showcase-image object-cover"
                      priority
                    />
                   
                  </div>
                </div>

                <div className="side-showcase">
                  <div className="side-item">
                    <div className="relative h-36">
                      <Image
                        src="/Discover/shawarma.webp"
                        alt="Traditional Chicken Shawarma"
                        fill
                        className="object-cover"
                      />
                      <div className="item-overlay">
                        <div className="item-title">Chicken Shawarma</div>
                        <div className="item-desc">Traditional Middle Eastern wrap</div>
                      </div>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="relative h-36">
                      <Image
                        src="/Discover/arabian.webp"
                        alt="Fresh Hummus Mezze Platter"
                        fill
                        className="object-cover"
                      />
                      <div className="item-overlay">
                        <div className="item-title">Mezze Platter</div>
                        <div className="item-desc">Fresh hummus & appetizers</div>
                      </div>
                    </div>
                  </div>

                  <div className="side-item">
                    <div className="relative h-36">
                      <Image
                        src="/Discover/coffee.webp"
                        alt="Traditional Arabic Coffee Service"
                        fill
                        className="object-cover"
                      />
                      <div className="item-overlay">
                        <div className="item-title">Arabic Coffee</div>
                        <div className="item-desc">Traditional qahwa service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats with Animated Counters */}
            <div className="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 px-8">
              <div className="text-center stat-item">
                <div className="text-3xl font-bold stat-number mb-2">
                  {counters.specialties}+
                </div>
                <div className="stat-label">Dubai Specialties</div>
              </div>
              <div className="text-center stat-item">
                <div className="text-3xl font-bold stat-number mb-2">
                  {counters.years}+
                </div>
                <div className="stat-label">Years Serving Dubai</div>
              </div>
              <div className="text-center stat-item">
                <div className="text-3xl font-bold stat-number mb-2">
                  {counters.customers.toLocaleString()}+
                </div>
                <div className="stat-label">Satisfied Customers</div>
              </div>
              <div className="text-center stat-item">
                <div className="text-3xl font-bold stat-number mb-2">
                  {counters.halal}%
                </div>
                <div className="stat-label">Halal Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}