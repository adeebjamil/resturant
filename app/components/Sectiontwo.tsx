'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './Section2.module.css';

const Sectiontwo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add(styles.visible);
            
            // Auto-play video when section becomes visible
            if (videoRef.current && isVideoLoaded) {
              videoRef.current.play().catch(console.error);
              setIsVideoPlaying(true);
            }
          }
        });
      },
      { 
        threshold: 0.3, // Increased threshold for better autoplay timing
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVideoLoaded]);

  // Video event handlers
  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
    
    // Auto-play if section is already visible
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(console.error);
      setIsVideoPlaying(true);
    }
  }, [isVisible]);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play().catch(console.error);
        setIsVideoPlaying(true);
      }
    }
  }, [isVideoPlaying]);

  const handleVideoEnd = useCallback(() => {
    setIsVideoPlaying(false);
    setProgress(0);
    
    // Auto-restart video after 2 seconds
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(console.error);
        setIsVideoPlaying(true);
      }
    }, 2000);
  }, []);

  const handleVideoPlay = useCallback(() => {
    setIsVideoPlaying(true);
  }, []);

  const handleVideoPause = useCallback(() => {
    setIsVideoPlaying(false);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    setIsVideoLoaded(false);
  }, []);

  return (
    <section ref={sectionRef} className={styles.videoSection}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${styles.animate}`}>
          <h2 className={styles.mainTitle}>
            Experience the <span className={`${styles.arabicText} font-arabic`} >كأس العالم</span> Journey
          </h2>
          <p className={styles.subtitle}>
            Where tradition meets modern craft in every cup
          </p>
          <div className={styles.titleUnderline}></div>
        </div>

        {/* Video Showcase */}
        <div className={`${styles.videoShowcase} ${styles.animate}`}>
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              className={styles.video}
              poster="/section2/video-poster.jpg"
              preload="auto"
              loop
              muted
              playsInline
              autoPlay
              onLoadedData={handleVideoLoad}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnd}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onError={handleVideoError}
            >
              <source src="/section2/cafe-ambiance.mp4" type="video/mp4" />
              <p>Your browser doesn't support HTML video.</p>
            </video>

            {/* Video Overlay */}
            <div className={`${styles.videoOverlay} ${isVideoPlaying ? styles.playing : ''}`}>
              {/* Play/Pause Button */}
              <button
                className={`${styles.playButton} ${isVideoPlaying ? styles.pauseButton : ''}`}
                onClick={handlePlayPause}
                aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
              >
                <div className={styles.playIcon}>
                  {isVideoPlaying ? (
                    <div className={styles.pauseIcon}>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <div className={styles.playTriangle}></div>
                  )}
                </div>
                <div className={styles.ripple}></div>
              </button>

              {/* Loading Indicator */}
              {!isVideoLoaded && !videoError && (
                <div className={styles.loadingIndicator}>
                  <div className={styles.spinner}></div>
                  <p>Loading video...</p>
                </div>
              )}

              {/* Error Indicator */}
              {videoError && (
                <div className={styles.errorIndicator}>
                  <p>Video unavailable</p>
                  <small>Please check your connection</small>
                </div>
              )}

              {/* Progress Bar */}
              {isVideoPlaying && (
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

             
            </div>
          </div>

          {/* Video Caption */}
          <div className={styles.videoCaption}>
            <h3>Our Coffee Story</h3>
            <p>
              Discover the passion and craftsmanship behind every cup. 
              From bean selection to the perfect brew, witness our journey 
              of creating exceptional coffee experiences.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className={styles.featureGrid}>
          <div className={`${styles.featureCard} ${styles.animate}`}>
            <div className={styles.cardIcon}>☕</div>
            <h4>Artisan Crafted</h4>
            <p>Every cup is meticulously prepared by skilled baristas</p>
          </div>
          
          <div className={`${styles.featureCard} ${styles.animate}`}>
            <div className={styles.cardIcon}>🌟</div>
            <h4>Premium Quality</h4>
            <p>Sourced from the finest coffee beans around the world</p>
          </div>
          
          <div className={`${styles.featureCard} ${styles.animate}`}>
            <div className={styles.cardIcon}>💫</div>
            <h4>Unique Experience</h4>
            <p>Creating memorable moments with every visit</p>
          </div>
        </div>

        {/* Brand Tagline */}
        <div className={`${styles.brandTagline} ${styles.animate}`}>
          <div className={styles.taglineContent}>
            <span className={`${styles.arabicBrand} font-arabic`}>كأس العالم</span>
            <h3>Crafting Moments, One Cup at a Time</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;