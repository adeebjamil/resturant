'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      nameArabic: "أحمد الراشد",
      position: "Food Blogger",
      image: "/testimonials/ahmed.jpg",
      rating: 5,
      text: "World Cup Coffee serves the most authentic Dubai cuisine I've ever tasted outside of my grandmother's kitchen. The flavors are incredible and the Arabic coffee is perfection!",
      textArabic: "كأس العالم للقهوة يقدم أطيب الأطباق الإماراتية الأصيلة التي تذوقتها خارج مطبخ جدتي",
      location: "Dubai, UAE"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      nameArabic: "سارة جونسون",
      position: "Travel Enthusiast",
      image: "/testimonials/sarah.jpg",
      rating: 5,
      text: "An absolutely stunning experience! World Cup Coffee brought me on a culinary journey through the Middle East. Every dish tells a story of tradition and excellence.",
      textArabic: "تجربة رائعة حقاً! كأس العالم للقهوة أخذتني في رحلة طهي عبر الشرق الأوسط",
      location: "London, UK"
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      nameArabic: "محمد حسن",
      position: "Local Food Critic",
      image: "/testimonials/mohammed.jpg",
      rating: 5,
      text: "The perfect blend of modern dining and traditional flavors. World Cup Coffee has mastered the art of authentic Middle Eastern cuisine with contemporary presentation.",
      textArabic: "المزج المثالي بين تناول الطعام الحديث والنكهات التقليدية في كأس العالم للقهوة",
      location: "Abu Dhabi, UAE"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      nameArabic: "إيما رودريجيز",
      position: "Food Photography",
      image: "/testimonials/emma.jpg",
      rating: 5,
      text: "Not only is the food extraordinary, but the presentation is Instagram-worthy! World Cup Coffee creates dishes that are as beautiful as they are delicious.",
      textArabic: "ليس فقط الطعام استثنائي، بل العرض جميل جداً! كأس العالم للقهوة يبدع في التقديم",
      location: "Barcelona, Spain"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .testimonial-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 30%, #e9ecef 70%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          padding: 120px 0;
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

        .floating-shape {
          position: absolute;
          opacity: 0.05;
        }

        .floating-shape:nth-child(1) {
          top: 10%;
          left: 5%;
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #1e6f5c, #2d5a4f);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .floating-shape:nth-child(2) {
          top: 20%;
          right: 10%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #2d5a4f, #1e6f5c);
          border-radius: 20px;
          transform: rotate(45deg);
          animation: float 6s ease-in-out infinite 2s;
        }

        .floating-shape:nth-child(3) {
          bottom: 30%;
          left: 8%;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #495057, #6c757d);
          border-radius: 50%;
          animation: float 10s ease-in-out infinite 4s;
        }

        .floating-shape:nth-child(4) {
          bottom: 15%;
          right: 15%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #1e6f5c, #495057);
          border-radius: 30px;
          animation: float 7s ease-in-out infinite 1s;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: ${isVisible ? 'fadeInUp 1s ease-out' : 'none'};
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title .dark-text {
          color: #2c3e50;
        }

        .section-title .teal-text {
          background: linear-gradient(135deg, #1e6f5c 0%, #2d5a4f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title .arabic-text {
          font-family: 'Noto Naskh Arabic', serif;
          color: #1e6f5c;
          font-size: clamp(1.8rem, 4vw, 3rem);
          display: block;
          margin-top: 0.5rem;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #495057;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonial-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          animation: ${isVisible ? 'scaleIn 1s ease-out 0.3s both' : 'none'};
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 60px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(30, 111, 92, 0.05), transparent);
          transition: left 0.8s ease;
        }

        .testimonial-card:hover::before {
          left: 100%;
        }

        .testimonial-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          align-items: center;
        }

        .testimonial-text {
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1e6f5c, #2d5a4f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          box-shadow: 0 10px 25px rgba(30, 111, 92, 0.3);
        }

        .testimonial-text-content {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #2c3e50;
          margin-bottom: 30px;
          font-style: italic;
          font-weight: 400;
        }

        .testimonial-text-arabic {
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1.1rem;
          color: #1e6f5c;
          margin-bottom: 30px;
          direction: rtl;
          text-align: right;
          opacity: 0.8;
        }

        .rating-stars {
          display: flex;
          gap: 5px;
          margin-bottom: 20px;
        }

        .star {
          color: #ffd700;
          font-size: 24px;
          animation: pulse 2s ease-in-out infinite;
        }

        .star:nth-child(1) { animation-delay: 0s; }
        .star:nth-child(2) { animation-delay: 0.2s; }
        .star:nth-child(3) { animation-delay: 0.4s; }
        .star:nth-child(4) { animation-delay: 0.6s; }
        .star:nth-child(5) { animation-delay: 0.8s; }

        .testimonial-author {
          position: relative;
          text-align: center;
        }

        .author-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(30, 111, 92, 0.2);
          border: 4px solid #ffffff;
        }

        .author-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(30, 111, 92, 0.1) 70%);
          border-radius: 50%;
        }

        .author-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 5px;
        }

        .author-name-arabic {
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1.1rem;
          color: #1e6f5c;
          margin-bottom: 8px;
        }

        .author-position {
          color: #6c757d;
          font-size: 1rem;
          margin-bottom: 5px;
        }

        .author-location {
          color: #1e6f5c;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .navigation-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 50px;
        }

        .nav-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1e6f5c, #2d5a4f);
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(30, 111, 92, 0.3);
        }

        .nav-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(30, 111, 92, 0.4);
          background: linear-gradient(135deg, #2d5a4f, #1e6f5c);
        }

        .testimonial-indicators {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 40px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e9ecef;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: linear-gradient(135deg, #1e6f5c, #2d5a4f);
          transform: scale(1.3);
        }

        .brand-highlight {
          position: absolute;
          top: -10px;
          right: 30px;
          background: linear-gradient(135deg, #1e6f5c, #2d5a4f);
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(30, 111, 92, 0.3);
        }

        @media (max-width: 1024px) {
          .testimonial-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .testimonial-card {
            padding: 40px;
          }
          
          .quote-icon {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .testimonial-section {
            padding: 80px 0;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .testimonial-card {
            padding: 30px;
            margin: 0 20px;
          }
          
          .testimonial-text-content {
            font-size: 1.1rem;
          }
          
          .navigation-buttons {
            margin-top: 30px;
          }
          
          .nav-button {
            width: 50px;
            height: 50px;
            font-size: 18px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="testimonial-section">
        <div className="floating-elements">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="section-header">
            <h2 className="section-title">
              <span className="dark-text">What Our Guests Say About </span>
              <span className="teal-text">World Cup</span>
              <span className="arabic-text">كأس العالم</span>
            </h2>
            <p className="section-subtitle">
              Discover why food lovers from around the world choose World Cup Coffee 
              for an authentic Middle Eastern dining experience
            </p>
          </div>

          <div className="testimonial-container">
            <div className="brand-highlight">
              ⭐ Featured Restaurant
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <div className="quote-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  <div className="rating-stars">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                      <span key={index} className="star">★</span>
                    ))}
                  </div>

                  <p className="testimonial-text-content">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <p className="testimonial-text-arabic">
                    "{testimonials[currentTestimonial].textArabic}"
                  </p>
                </div>

                <div className="testimonial-author">
                  <div className="author-image">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-name-arabic">{testimonials[currentTestimonial].nameArabic}</p>
                  <p className="author-position">{testimonials[currentTestimonial].position}</p>
                  <p className="author-location">📍 {testimonials[currentTestimonial].location}</p>
                </div>
              </div>
            </div>

            <div className="navigation-buttons">
              <button onClick={prevTestimonial} className="nav-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button onClick={nextTestimonial} className="nav-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}