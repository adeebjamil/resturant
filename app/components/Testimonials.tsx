'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Import React icons
import { FaStar, FaQuoteRight, FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import { MdFormatQuote } from 'react-icons/md'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { BsArrowRightCircleFill, BsFillCalendarCheckFill } from 'react-icons/bs'

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  comment: string
  avatar: string
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John A. Doe',
      role: 'Food Critic',
      rating: 5,
      comment: 'Amazing food quality! We were impressed by the flavor and presentation of every dish. The service was exceptional and the atmosphere was perfect for our special dinner.',
      avatar: '/testimonials/img1.webp'
    },
    {
      id: 2,
      name: 'Sarah M. Wilson',
      role: 'Regular Customer',
      rating: 5,
      comment: 'Best restaurant in town! The chefs really know how to create magical flavors. Every visit is a new culinary adventure that never disappoints.',
      avatar: '/testimonials/img2.webp'
    },
    {
      id: 3,
      name: 'Mike R. Johnson',
      role: 'Food Blogger',
      rating: 5,
      comment: 'Outstanding experience! From appetizers to desserts, everything was perfectly crafted. The attention to detail and quality ingredients make this place truly special.',
      avatar: '/testimonials/img3.webp'
    }
  ]

  const goToNextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Handle swipe gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeDistance = touchEndX.current - touchStartX.current
    if (swipeDistance > 50) {
      // Swipe right - go to previous
      goToPrevTestimonial()
    } else if (swipeDistance < -50) {
      // Swipe left - go to next
      goToNextTestimonial()
    }
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextTestimonial()
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="testimonials-section bg-black pt-16 pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated shapes */}
        <div className="shape-blob absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="shape-blob absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern w-full h-full" 
              style={{
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px"
              }}>
          </div>
        </div>
        
        {/* Animated text */}
        <div className="absolute top-10 left-0 w-full">
          <p className="moving-text-left whitespace-nowrap text-5xl md:text-7xl font-black text-white/5 uppercase">
            Customer Reviews • Testimonials • Feedback • Experiences
          </p>
        </div>
        <div className="absolute bottom-10 left-0 w-full">
          <p className="moving-text-right whitespace-nowrap text-5xl md:text-7xl font-black text-white/5 uppercase">
            Dubai Cuisine • Exceptional Service • Five Stars • Perfection
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-3 py-1 bg-orange-500/10 rounded-lg mb-4">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Voices of Satisfaction
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Customers <span className="text-orange-500">Love</span> What We Do
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover what our guests have to say about their dining experience at our restaurant in the heart of Dubai.
          </p>
        </div>
        
        {/* Main testimonial display - Redesigned with modern styling */}
        <div 
          className="testimonial-carousel max-w-6xl mx-auto relative" 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Featured testimonial */}
          <div className="relative mb-10">
            <div className="absolute -top-12 left-5 text-6xl text-orange-500/30">
              <BiSolidQuoteAltLeft />
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm shadow-[0_10px_50px_-12px_rgba(255,114,0,0.25)]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Testimonial image */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative group">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-orange-500/30 transform transition-all duration-500 group-hover:scale-105 relative z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                      <Image 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 ring-1 ring-white/20 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-3 rounded-full shadow-lg z-20">
                      <MdFormatQuote size={24} />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity z-0"></div>
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="md:col-span-8">
                  <div className="mb-4">
                    <div className="flex space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`w-6 h-6 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-400'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-lg md:text-xl italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].comment}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <h4 className="text-white font-bold text-xl">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-orange-400">{testimonials[currentTestimonial].role}</p>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="hidden md:block">
                      <div className="text-xs text-white/50">Verified Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-12 right-5 text-6xl text-orange-500/30 transform rotate-180">
              <BiSolidQuoteAltLeft />
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <button 
              onClick={goToPrevTestimonial} 
              className="bg-gray-800/80 hover:bg-orange-500 p-3 md:p-4 rounded-full border border-white/10 transition-all duration-300 transform hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="w-5 h-5 text-white/70 group-hover:text-white" />
            </button>
            
            <div className="flex justify-center space-x-2 md:space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-10 h-3 bg-orange-500 rounded-full' 
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNextTestimonial} 
              className="bg-gray-800/80 hover:bg-orange-500 p-3 md:p-4 rounded-full border border-white/10 transition-all duration-300 transform hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="w-5 h-5 text-white/70 group-hover:text-white" />
            </button>
          </div>
          
          {/* Mobile scrolling indicator */}
          <div className="mt-8 text-center md:hidden">
            <p className="text-white/50 text-sm flex items-center justify-center">
              <span>Swipe</span>
              <FaArrowRight className="mx-2 text-orange-500" />
              <span>to see more reviews</span>
            </p>
          </div>
        </div>
        
      
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-orange-500/10 to-transparent"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes moveLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes moveRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .shape-blob {
          animation: float 10s ease-in-out infinite, pulse 8s ease-in-out infinite;
        }
        
        .shape-blob:nth-child(2) {
          animation-delay: -5s;
        }
        
        .moving-text-left {
          animation: moveLeft 30s linear infinite;
        }
        
        .moving-text-right {
          animation: moveRight 30s linear infinite;
        }
        
        /* Responsive styling */
        @media (max-width: 768px) {
          .testimonial-carousel {
            padding: 0 1rem;
          }
          
          .shape-blob {
            width: 150px;
            height: 150px;
          }
        }
        
        @media (max-width: 640px) {
          .shape-blob {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials