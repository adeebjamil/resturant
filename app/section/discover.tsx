'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './discover.module.css';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  animation: 'slide-up' | 'slide-right' | 'slide-left';
}

const DiscoverSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: '/Discover/img1.jpg',
      title: 'Elegant Dining',
      description: 'Sophisticated atmosphere for memorable meals',
      animation: 'slide-up',
    },
    {
      id: 2,
      image: '/Discover/img2.jpg',
      title: 'Stylish Bar',
      description: 'Expertly crafted cocktails in a vibrant setting',
      animation: 'slide-right',
    },
    {
      id: 3,
      image: '/Discover/img3.jpg',
      title: 'Private Events',
      description: 'Perfect space for celebrations and gatherings',
      animation: 'slide-left',
    },
    {
      id: 4,
      image: '/Discover/img4.jpg',
      title: 'Outdoor Patio',
      description: 'Al fresco dining with beautiful surroundings',
      animation: 'slide-up',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll(`.${styles.animated}`);
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="discover-space" className={styles.discoverSpace} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.animated} ${styles.revealTitle}`}>
          Discover Our Space
        </h2>
        <p className={`${styles.sectionSubtitle} ${styles.animated} ${styles.fadeIn}`}>
          Experience the ambiance that makes us unique
        </p>

        <div className={styles.spaceGallery}>
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.galleryItem} ${styles.animated} ${styles[item.animation]}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.overlay}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.spaceCta} ${styles.pulse}`}>
          <Link href="#reservation" className={styles.btnReserve}>
            Reserve Your Table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
