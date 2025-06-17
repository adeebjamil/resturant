'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Lazy load video for better performance
    if (videoRef.current) {
      // Add small timeout to prioritize other page elements first
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-black"
      style={{ containIntrinsicSize: '0 600px' }}
    >
      {/* Background Video - Fully Optimized */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Discover/video-poster.jpg"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/Discover/video.mp4" type="video/mp4" />
          <source src="/Discover/video.webm" type="video/webm" />
          {/* Fallback image */}
          Your browser does not support HTML5 video.
        </video>
        {/* Optimized overlay with proper opacity */}
        <div className="absolute inset-0 bg-black/30 backdrop-filter backdrop-brightness-75"></div>
      </div>

      {/* Content with optimized animations */}
      <div className="relative z-20 p-6 max-w-3xl animate-fadeInUp will-change-transform">
        <h1 className="mb-4">
          <span 
            className="block text-5xl md:text-7xl font-bold tracking-tight will-change-transform"
            style={{ 
              textShadow: '0 4px 8px rgba(0,0,0,0.2)',
              animation: 'slideInFromLeft 0.8s forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            World Cup
          </span>
          <span 
            className="block text-4xl md:text-6xl font-arabic font-semibold mt-2 text-teal-600 will-change-transform"
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              animation: 'slideInFromRight 0.8s forwards',
              animationDelay: '0.4s',
              opacity: 0
            }}
          >
            كأس العالم
          </span>
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 text-gray-200 font-light tracking-wide will-change-opacity"
          style={{ 
            animation: 'fadeInUp 0.8s forwards',
            animationDelay: '0.6s',
            opacity: 0
          }}
        >
          Experience Global Flavors in the Heart of <span className="font-semibold text-teal-600">Dubai</span>
        </p>
        <div 
          className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center will-change-opacity"
          style={{ 
            animation: 'fadeInUp 0.8s forwards',
            animationDelay: '0.8s',
            opacity: 0
          }}
        >
          <Link
            href="/menu"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75"
          >
            View Our Menu
          </Link>
          <Link
            href="/blog"
            className="inline-block bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          >
            Our Blogs
          </Link>
        </div>
      </div>

      {/* Add global styles in your CSS or style tag */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Respect user preferences */
        @media (prefers-reduced-motion: reduce) {
          .will-change-transform,
          .will-change-opacity {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

        /* Font optimization */
        .font-arabic {
          font-display: swap;
          text-rendering: optimizeLegibility;
        }

        /* Enhance performance for transform animations */
        .will-change-transform {
          will-change: transform, opacity;
        }

        .will-change-opacity {
          will-change: opacity;
        }
      `}</style>
    </section>
  );
};

// Add this to your _document.js or layout component
// <link
//   rel="preload"
//   href="/fonts/your-arabic-font.woff2"
//   as="font"
//   type="font/woff2"
//   crossOrigin="anonymous"
// />

// Export with React.memo for component-level optimization
export default Hero;