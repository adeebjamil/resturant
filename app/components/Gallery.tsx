'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/section3/pizza.webp',
      alt: 'Grilled Salmon',
      title: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herbs'
    },
    {
      id: 2,
      src: '/gallery/pasta-carbonara.webp',
      alt: 'Pasta Carbonara',
      title: 'Pasta Carbonara',
      description: 'Classic Italian pasta with cream sauce'
    },
    {
      id: 3,
      src: '/gallery/beef-steak.jpg',
      alt: 'Beef Steak',
      title: 'Prime Beef Steak',
      description: 'Tender grilled steak with vegetables'
    },
    {
      id: 4,
      src: '/gallery/caesar-salad.jpg',
      alt: 'Caesar Salad',
      title: 'Caesar Salad',
      description: 'Fresh greens with parmesan cheese'
    },
    {
      id: 5,
      src: '/gallery/chocolate-cake.jpg',
      alt: 'Chocolate Cake',
      title: 'Chocolate Cake',
      description: 'Rich dark chocolate dessert'
    },
    {
      id: 6,
      src: '/gallery/sushi-platter.jpg',
      alt: 'Sushi Platter',
      title: 'Sushi Platter',
      description: 'Fresh sushi and sashimi selection'
    }
  ]

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
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
            transform: translateY(-15px);
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

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gallery-title {
          animation: fadeInDown 1s ease-out;
        }

        .gallery-subtitle {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .gallery-item {
          animation: slideInUp 0.8s ease-out both;
          transition: all 0.4s ease;
        }

        .gallery-item:nth-child(1) { animation-delay: 0.1s; }
        .gallery-item:nth-child(2) { animation-delay: 0.2s; }
        .gallery-item:nth-child(3) { animation-delay: 0.3s; }
        .gallery-item:nth-child(4) { animation-delay: 0.4s; }
        .gallery-item:nth-child(5) { animation-delay: 0.5s; }
        .gallery-item:nth-child(6) { animation-delay: 0.6s; }

        .gallery-item:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .gallery-image {
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-overlay {
          transform: translateY(100%);
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-overlay h3 {
          animation: bounceIn 0.6s ease-out;
        }

        .gallery-overlay p {
          animation: fadeInUp 0.8s ease-out;
        }

        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          animation-delay: 4s;
        }

        .moving-text-left {
          animation: moveLeft 20s linear infinite;
        }

        .moving-text-right {
          animation: moveRight 20s linear infinite;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .stats-number {
          animation: countUp 1s ease-out both;
        }

        .feature-card {
          animation: slideInUp 0.8s ease-out both;
        }

        .feature-card:nth-child(1) { animation-delay: 0.2s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.6s; }
        .feature-card:nth-child(4) { animation-delay: 0.8s; }

        /* New Quality Service Section Animations */
        .service-title {
          animation: slideInLeft 1s ease-out;
        }

        .service-subtitle {
          animation: slideInLeft 1s ease-out 0.2s both;
        }

        .service-description {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .service-button {
          animation: zoomIn 0.8s ease-out 0.6s both;
        }

        .service-profile {
          animation: slideInRight 1s ease-out 0.8s both;
        }

        .stats-item {
          animation: bounceIn 0.8s ease-out both;
        }

        .stats-item:nth-child(1) { animation-delay: 1s; }
        .stats-item:nth-child(2) { animation-delay: 1.2s; }
        .stats-item:nth-child(3) { animation-delay: 1.4s; }

        .feature-icon {
          animation: rotateIn 0.8s ease-out;
        }

        .background-decoration {
          animation: float 6s ease-in-out infinite;
        }

        .background-decoration:nth-child(1) { animation-delay: 0s; }
        .background-decoration:nth-child(2) { animation-delay: 2s; }
        .background-decoration:nth-child(3) { animation-delay: 4s; }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .moving-text-left,
          .moving-text-right {
            font-size: 3rem;
          }
        }
      `}</style>

      {/* Gallery Section */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Moving Background Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-10 left-0 w-full">
            <div className="moving-text-left text-6xl md:text-8xl font-black text-white whitespace-nowrap">
              DELICIOUS GALLERY • FOOD PHOTOGRAPHY • TASTY DISHES • RESTAURANT GALLERY •
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 w-full">
            <div className="moving-text-right text-6xl md:text-8xl font-black text-white whitespace-nowrap">
              GOURMET FOOD • CULINARY ART • AMAZING DISHES • FOOD GALLERY •
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-16 h-16 bg-teal-300/30 rounded-full blur-xl"></div>
          <div className="floating-element absolute bottom-32 left-20 w-12 h-12 bg-pink-300/30 rounded-full blur-lg"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-300/30 rounded-full blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 pt-20">
           
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className="gallery-item relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="gallery-image object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Overlay Content */}
                <div className="gallery-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </>
  )
}

export default Gallery