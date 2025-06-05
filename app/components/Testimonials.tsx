'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John A. Doe',
      role: 'Food Critic',
      rating: 5,
      comment: 'Amazing food quality! We were impressed by the flavor and presentation of every dish. The service was exceptional and the atmosphere was perfect for our special dinner.',
      avatar: '/testimonials/customer1.jpg'
    },
    {
      id: 2,
      name: 'Sarah M. Wilson',
      role: 'Regular Customer',
      rating: 5,
      comment: 'Best restaurant in town! The chefs really know how to create magical flavors. Every visit is a new culinary adventure that never disappoints.',
      avatar: '/testimonials/customer2.jpg'
    },
    {
      id: 3,
      name: 'Mike R. Johnson',
      role: 'Food Blogger',
      rating: 5,
      comment: 'Outstanding experience! From appetizers to desserts, everything was perfectly crafted. The attention to detail and quality ingredients make this place truly special.',
      avatar: '/testimonials/customer3.jpg'
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
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
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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

        @keyframes swing {
          20% {
            transform: rotate3d(0, 0, 1, 15deg);
          }
          40% {
            transform: rotate3d(0, 0, 1, -10deg);
          }
          60% {
            transform: rotate3d(0, 0, 1, 5deg);
          }
          80% {
            transform: rotate3d(0, 0, 1, -5deg);
          }
          100% {
            transform: rotate3d(0, 0, 1, 0deg);
          }
        }

        @keyframes flipInY {
          from {
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            animation-timing-function: ease-in;
            opacity: 0;
          }
          40% {
            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            animation-timing-function: ease-in;
          }
          60% {
            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            opacity: 1;
          }
          80% {
            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          }
          100% {
            transform: perspective(400px);
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

        .testimonial-title {
          animation: fadeInDown 1s ease-out;
        }

        .testimonial-subtitle {
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .testimonial-card {
          animation: flipInY 1s ease-out both;
          transition: all 0.5s ease;
        }

        .testimonial-card:nth-child(1) { animation-delay: 0.4s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.6s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.8s; }

        .testimonial-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .testimonial-avatar {
          animation: bounceIn 1s ease-out both;
          transition: all 0.3s ease;
        }

        .testimonial-avatar:hover {
          animation: swing 1s ease-in-out;
        }

        .testimonial-quote {
          animation: slideInLeft 1s ease-out both;
        }

        .testimonial-name {
          animation: slideInRight 1s ease-out both;
        }

        .testimonial-role {
          animation: fadeInUp 1s ease-out both;
        }

        .rating-stars {
          animation: fadeInUp 1s ease-out both;
        }

        .star-icon {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .star-icon:nth-child(1) { animation-delay: 0s; }
        .star-icon:nth-child(2) { animation-delay: 0.2s; }
        .star-icon:nth-child(3) { animation-delay: 0.4s; }
        .star-icon:nth-child(4) { animation-delay: 0.6s; }
        .star-icon:nth-child(5) { animation-delay: 0.8s; }

        .testimonial-navigation {
          animation: zoomIn 1s ease-out 1.2s both;
        }

        .quote-icon {
          animation: rotateIn 1s ease-out both;
        }

        .moving-text-left {
          animation: moveLeft 20s linear infinite;
        }

        .moving-text-right {
          animation: moveRight 20s linear infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .moving-text-left,
          .moving-text-right {
            font-size: 3rem;
          }
        }
      `}</style>

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 overflow-hidden">
        {/* Background Moving Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div className="absolute top-10 left-0 w-full">
            <div className="moving-text-left text-6xl md:text-8xl font-black text-white whitespace-nowrap">
              CUSTOMER REVIEWS • TESTIMONIALS • HAPPY CUSTOMERS • FEEDBACK •
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 w-full">
            <div className="moving-text-right text-6xl md:text-8xl font-black text-white whitespace-nowrap">
              FIVE STARS • AMAZING FOOD • BEST SERVICE • SATISFIED CUSTOMERS •
            </div>
          </div>
        </div>

        {/* Floating Quote Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="quote-icon absolute top-20 left-20 text-6xl text-orange-500/20">"</div>
          <div className="quote-icon absolute bottom-20 right-20 text-6xl text-orange-500/20">"</div>
          <div className="quote-icon absolute top-1/2 right-40 text-4xl text-orange-500/15">"</div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="testimonial-subtitle text-orange-500 font-bold text-lg mb-4 uppercase tracking-wider">
              What Have Lots of Happy Customer
            </p>
            <h2 className="testimonial-title text-4xl lg:text-6xl font-black text-white mb-8">
              Explore Feedback
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card bg-white rounded-2xl p-8 shadow-2xl transform transition-all duration-500 ${
                  index === currentTestimonial ? 'scale-105 ring-4 ring-orange-500/50' : 'scale-95'
                }`}
              >
                {/* Quote Icon */}
                <div className="quote-icon text-orange-500 text-4xl mb-4">"</div>
                
                {/* Customer Avatar */}
                <div className="testimonial-avatar flex justify-center mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center ring-4 ring-orange-500/20">
                    <span className="text-orange-500 font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="testimonial-quote text-gray-700 text-lg leading-relaxed mb-6 italic">
                  {testimonial.comment}
                </p>

                {/* Rating Stars */}
                <div className="rating-stars flex justify-center mb-4 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i}
                      className="star-icon w-6 h-6 text-yellow-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Customer Info */}
                <div className="text-center">
                  <h3 className="testimonial-name text-xl font-bold text-gray-800 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="testimonial-role text-orange-500 font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="testimonial-navigation flex justify-center space-x-3 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-400 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-white/80 text-lg mb-6">
              Join thousands of satisfied customers who love our food!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
              BOOK A TABLE NOW
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials