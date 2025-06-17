'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageShowcase.module.css';

const ImageShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);
  
  const showcaseItems = [
    {
      id: 1,
      image: '/Discover/img5.jpg',
      title: 'Signature Atmosphere',
      description: 'Our distinctive ambiance combines modern elegance with comfort',
      color: '#1e6f5c'
    },
    {
      id: 2,
      image: '/Discover/img6.jpg',
      title: 'Premium To-Go',
      description: 'Enjoy our quality beverages wherever your day takes you',
      color: '#8c593b'
    },
    {
      id: 3,
      image: '/Discover/img7.jpg',
      title: 'Artisan Coffee',
      description: 'Each cup is carefully crafted with expertise and passion',
      color: '#3c6e71'
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          showcaseRef.current?.classList.add(styles.visible);
        }
      },
      { threshold: 0.3 }
    );
    
    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }
    
    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current);
      }
    };
  }, []);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.showcaseContainer} ref={showcaseRef}>
      <h3 className={styles.showcaseTitle}>Experience World Cup</h3>
      
      <div className={styles.showcaseContent}>
        <div className={styles.showcaseVisual}>
          {showcaseItems.map((item, index) => (
            <div 
              key={item.id}
              className={`${styles.showcaseCard} ${index === activeIndex ? styles.active : ''}`}
              style={{
                '--card-color': item.color
              } as React.CSSProperties}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className={styles.showcaseImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.showcaseNav}>
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              className={`${styles.navDot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageShowcase;