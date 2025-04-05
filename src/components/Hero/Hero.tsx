// components/HeroSection/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            5-Star Link Building Agency That Delivers Results!
          </h1>
          <p className={styles.description}>
            Our company offers guaranteed publicity and free-of-charge media outreaches!
          </p>
          <div className={styles.cta}>
            <Link href="/get-started" className={styles.ctaButton}>
              Get started
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
              >
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
          <div className={styles.ratingContainer}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={styles.star}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#4758FF"/>
                  </svg>
                </div>
              ))}
            </div>
            <p className={styles.ratingText}>Trusted by our customers!</p>
          </div>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <p>Reclaim lost traffic</p>
            </div>
            <div className={styles.featureItem}>
              <p>Increase organic reach</p>
            </div>
            <div className={styles.featureItem}>
              <p>Drive more conversions</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/hero-img.png" 
              alt="Link building illustration showing website DR score and backlinks" 
              width={600} 
              height={500}
              priority
              className={styles.heroImage}
            />
          </div>
          <div className={styles.featuresMob}>
            <div className={styles.featureItem}>
              <p>Reclaim lost traffic</p>
            </div>
            <div className={styles.featureItem}>
              <p>Increase organic reach</p>
            </div>
            <div className={styles.featureItem}>
              <p>Drive more conversions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;