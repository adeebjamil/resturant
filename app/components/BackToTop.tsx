'use client'
import React, { useState, useEffect } from 'react'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight) * 100

      setScrollProgress(progress)

      if (scrolled > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const smoothScrollToTop = () => {
    setIsScrolling(true)
    
    const startPosition = window.pageYOffset
    const startTime = performance.now()
    const duration = 3000 // 3 seconds for slow motion scroll

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)
      
      const currentPosition = startPosition * (1 - easeProgress)
      window.scrollTo(0, currentPosition)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        setIsScrolling(false)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <>
      <style jsx>{`
        @keyframes slowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes slowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slowFadeIn {
          0% { 
            opacity: 0; 
            transform: scale(0.7) translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }

        @keyframes slowFadeOut {
          0% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
          100% { 
            opacity: 0; 
            transform: scale(0.7) translateY(20px); 
          }
        }

        @keyframes slowGlow {
          0%, 100% { 
            box-shadow: 0 0 15px rgba(249, 115, 22, 0.2);
          }
          50% { 
            box-shadow: 0 0 25px rgba(249, 115, 22, 0.4);
          }
        }

        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }

        @keyframes slowFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes slowWave {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-3deg) scale(1.02); }
          75% { transform: rotate(3deg) scale(1.02); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scrollingPulse {
          0%, 100% { 
            background: linear-gradient(135deg, #f97316, #ea580c);
            transform: scale(1);
          }
          50% { 
            background: linear-gradient(135deg, #ea580c, #f97316);
            transform: scale(1.1);
          }
        }

        .back-to-top-btn {
          animation: slowBounce 4s ease-in-out infinite, slowGlow 3s ease-in-out infinite;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(249, 115, 22, 0.3);
        }

        .back-to-top-btn:hover {
          animation: slowPulse 1.2s ease-in-out infinite, slowWave 2s ease-in-out infinite;
          background: linear-gradient(135deg, #f97316, #ea580c);
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 12px 30px rgba(249, 115, 22, 0.3);
          border-color: rgba(249, 115, 22, 0.6);
        }

        .back-to-top-btn.scrolling {
          animation: scrollingPulse 1s ease-in-out infinite;
          cursor: wait;
          pointer-events: none;
        }

        .back-to-top-btn.visible {
          animation: slowFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .back-to-top-btn.hidden {
          animation: slowFadeOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .arrow-icon {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .back-to-top-btn:hover .arrow-icon {
          animation: slowRotate 1s ease-in-out;
          transform: translateY(-2px);
        }

        .back-to-top-btn.scrolling .arrow-icon {
          animation: spinSlow 2s linear infinite;
        }

        .progress-ring {
          transition: stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-ring-scrolling {
          stroke: #fff;
          animation: spinSlow 3s linear infinite;
        }

        .ripple-effect {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .back-to-top-btn:hover .ripple-effect {
          transform: scale(1.2);
          opacity: 0.3;
        }

        .floating-ring {
          animation: slowFloat 5s ease-in-out infinite;
        }

        .floating-ring.scrolling {
          animation: spinSlow 2s linear infinite;
        }

        /* Slower mobile animations */
        @media (max-width: 768px) {
          .back-to-top-btn {
            animation: slowBounce 5s ease-in-out infinite, slowGlow 4s ease-in-out infinite;
          }
          
          .back-to-top-btn:hover {
            animation: slowPulse 1.5s ease-in-out infinite;
          }
        }
      `}</style>

      {isVisible && (
        <button
          onClick={smoothScrollToTop}
          className={`back-to-top-btn fixed bottom-8 right-8 w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center text-white font-bold shadow-2xl z-50 ${
            isVisible ? 'visible' : 'hidden'
          } ${isScrolling ? 'scrolling' : ''}`}
          aria-label="Back to top"
          disabled={isScrolling}
        >
          {/* Outer Floating Ring */}
          <div className={`floating-ring absolute inset-0 rounded-full border-2 border-teal-300/30 ${isScrolling ? 'scrolling' : ''}`}></div>

          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray={isScrolling ? "175.929 175.929" : `${(scrollProgress / 100) * 175.929} 175.929`}
              className={`progress-ring ${isScrolling ? 'progress-ring-scrolling' : ''}`}
              strokeLinecap="round"
            />
          </svg>

          {/* Arrow Icon */}
          <svg 
            className="arrow-icon w-6 h-6 relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>

          {/* Ripple Effect */}
          <div className="ripple-effect absolute inset-0 rounded-full bg-white/10 scale-0"></div>

          {/* Inner Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-t from-teal-600/20 to-transparent"></div>

          {/* Scrolling Indicator */}
          {isScrolling && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            
            </div>
          )}
        </button>
      )}
    </>
  )
}

export default BackToTop