'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BackToTop from './BackToTop'
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from 'react-icons/fa'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes moveLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes moveRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes flipIn {
          from {
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            opacity: 0;
          }
          40% {
            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
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

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        /* Main Footer Animations */
        .footer-container {
          animation: fadeInUp 1s ease-out;
        }

        .footer-logo {
          animation: slideInLeft 1s ease-out 0.2s both;
        }

        .footer-links {
          animation: slideInUp 1s ease-out both;
        }

        .footer-links:nth-child(1) { animation-delay: 0.4s; }
        .footer-links:nth-child(2) { animation-delay: 0.6s; }
        .footer-links:nth-child(3) { animation-delay: 0.8s; }

        .footer-contact {
          animation: slideInRight 1s ease-out 1s both;
        }

        .newsletter {
          animation: zoomIn 1s ease-out 1.2s both;
        }

        .footer-bottom {
          animation: fadeInUp 1s ease-out 1.4s both;
        }

        /* Interactive Elements */
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-link:hover {
          transform: translateX(5px);
          color: #f97316;
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          animation: heartbeat 0.8s ease-in-out;
          background: linear-gradient(135deg, #f97316, #ea580c);
          transform: scale(1.1) translateY(-5px);
        }

        .floating-element {
          animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(2) { animation-delay: 2s; }
        .floating-element:nth-child(3) { animation-delay: 4s; }

        .moving-text-left {
          animation: moveLeft 30s linear infinite;
        }

        .moving-text-right {
          animation: moveRight 25s linear infinite;
        }

        .logo-glow {
          animation: pulse 3s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.3));
        }

        .contact-item {
          animation: slideUp 0.8s ease-out both;
          transition: all 0.3s ease;
        }

        .contact-item:nth-child(1) { animation-delay: 1.2s; }
        .contact-item:nth-child(2) { animation-delay: 1.4s; }
        .contact-item:nth-child(3) { animation-delay: 1.6s; }

        .contact-item:hover {
          transform: translateY(-5px) scale(1.02);
          background: rgba(249, 115, 22, 0.1);
          border-radius: 8px;
          padding: 8px;
        }

        .newsletter-input {
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
        }

        .newsletter-btn {
          background: linear-gradient(135deg, #f97316, #ea580c);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.4);
        }

        .footer-section {
          transition: all 0.3s ease;
        }

        .footer-section:hover {
          transform: translateY(-5px);
        }

        .restaurant-hours {
          animation: flipIn 1s ease-out 1s both;
        }

        .hours-item {
          transition: all 0.3s ease;
        }

        .hours-item:hover {
          color: #f97316;
          transform: translateX(10px);
          background: rgba(249, 115, 22, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .footer-divider {
          background: linear-gradient(90deg, transparent, #f97316, transparent);
          height: 2px;
          animation: shimmer 2s infinite;
        }

        .copyright-text {
          background: linear-gradient(90deg, #ffffff, #f97316, #ffffff);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .moving-text-left,
          .moving-text-right {
            font-size: 2rem;
          }
          
          .footer-section {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <footer className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Moving Background Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div className="absolute top-10 left-0 w-full">
            <div className="moving-text-left text-6xl md:text-8xl font-black text-white whitespace-nowrap">
              DELICIOUS FOOD • GREAT SERVICE • AMAZING TASTE • BEST RESTAURANT •
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 w-full">
            <div className="moving-text-right text-6xl md:text-8xl font-black text-white whitespace-nowrap">
              FRESH INGREDIENTS • QUALITY FOOD • HAPPY CUSTOMERS • FIVE STARS •
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 right-20 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"></div>
          <div className="floating-element absolute bottom-32 left-20 w-12 h-12 bg-red-500/20 rounded-full blur-lg"></div>
          <div className="floating-element absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-500/20 rounded-full blur-md"></div>
        </div>

        {/* Food Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="floating-element absolute top-40 left-10 text-4xl">🍕</div>
          <div className="floating-element absolute bottom-40 right-10 text-4xl">🍔</div>
          <div className="floating-element absolute top-1/3 right-20 text-3xl">🍝</div>
          <div className="floating-element absolute bottom-1/3 left-20 text-3xl">🥗</div>
        </div>

        <div className="footer-container relative z-10 container mx-auto px-4 lg:px-8 py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Logo & About Section */}
            <div className="footer-section footer-logo space-y-6">
              <div className="logo-glow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🍳</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-wider text-orange-500">WELLFOOD</h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Experience culinary excellence at WellFood. We serve fresh, delicious meals crafted with passion and the finest ingredients.
              </p>
              
              <div className="flex space-x-4">
                {/* Facebook */}
                <button className="social-icon w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500">
                  <FaFacebook className="w-6 h-6 text-white" />
                </button>

                {/* Twitter */}
                <button className="social-icon w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500">
                  <FaTwitter className="w-6 h-6 text-white" />
                </button>

                {/* Instagram */}
                <button className="social-icon w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500">
                  <FaInstagram className="w-6 h-6 text-white" />
                </button>

                {/* YouTube */}
                <button className="social-icon w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500">
                  <FaYoutube className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section footer-links space-y-6">
              <h4 className="text-xl font-bold text-orange-500 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Menu', 'Reservations', 'Contact', 'Blog'].map((link, index) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`}>
                      <span 
                        className="footer-link text-gray-300 hover:text-orange-500 cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {link}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Restaurant Hours */}
            <div className="footer-section restaurant-hours space-y-6">
              <h4 className="text-xl font-bold text-orange-500 mb-6">Opening Hours</h4>
              <ul className="space-y-3">
                {[{
                  day: 'Monday - Friday',
                  time: '8:00 AM - 10:00 PM'
                },
                {
                  day: 'Saturday',
                  time: '9:00 AM - 11:00 PM'
                },
                {
                  day: 'Sunday',
                  time: '10:00 AM - 9:00 PM'
                }
                ].map((schedule, index) => (
                  <li key={schedule.day} className="hours-item flex justify-between text-gray-300">
                    <span>{schedule.day}</span>
                    <span className="text-orange-400">{schedule.time}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-500/30">
                <p className="text-orange-400 font-semibold">🎉 Happy Hour: 5-7 PM</p>
                <p className="text-gray-300 text-sm">Get 20% off on all appetizers!</p>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="footer-section footer-contact space-y-6">
              <h4 className="text-xl font-bold text-orange-500 mb-6">Get In Touch</h4>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="contact-item flex items-center space-x-3">
                  <span className="text-orange-500 text-xl">📍</span>
                  <span className="text-gray-300">123 Food Street, Culinary City, FC 12345</span>
                </div>
                <div className="contact-item flex items-center space-x-3">
                  <span className="text-orange-500 text-xl">📞</span>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item flex items-center space-x-3">
                  <span className="text-orange-500 text-xl">✉️</span>
                  <span className="text-gray-300">hello@wellfood.com</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="newsletter mt-8">
                <h5 className="text-lg font-semibold text-white mb-4">Subscribe to Newsletter</h5>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <button className="newsletter-btn px-6 py-3 text-white font-bold rounded-lg shadow-lg">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="footer-divider mb-8"></div>

          {/* Bottom Footer */}
          <div className="footer-bottom flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="copyright-text text-center md:text-left">
              <p className="text-lg font-semibold">
                © 2025 WellFood Restaurant. All Rights Reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Made with ❤️ for food lovers everywhere
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy">
                <span className="footer-link text-gray-400 hover:text-orange-500">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="footer-link text-gray-400 hover:text-orange-500">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Component */}
        <BackToTop />
      </footer>
    </>
  )
}

export default Footer