// components/PricingSection/PricingSection.tsx
import React from 'react';
import Link from 'next/link';
import styles from './PricingSection.module.css';

interface PricingPlanProps {
  highlighted?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ highlighted = false }) => {
  const planClass = highlighted 
    ? `${styles.pricingPlan} ${styles.highlighted}` 
    : styles.pricingPlan;
  
  const checkIconClass = highlighted 
    ? styles.checkIconHighlighted 
    : styles.checkIcon;

  return (
    <div className={planClass}>
      <h3 className={styles.planTitle}>GenAI Platform</h3>
      
      <div className={styles.pricingInfo}>
        <div className={styles.pricingPrefix}>Starting at</div>
        <div className={styles.price}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>150</span>
          <span className={styles.period}>/per link</span>
        </div>
      </div>
      
      <div className={styles.description}>
        Simplified AI agent creation
      </div>
      
        <div className={styles.divider}></div>
      
      <ul className={styles.featuresList}>
        <li className={styles.featureItem}>
          <div className={checkIconClass}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="currentColor"/>
            </svg>
          </div>
          <span>Pre-built components</span>
        </li>
        <li className={styles.featureItem}>
          <div className={checkIconClass}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="currentColor"/>
            </svg>
          </div>
          <span>Reduced complexity</span>
        </li>
        <li className={styles.featureItem}>
          <div className={checkIconClass}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="currentColor"/>
            </svg>
          </div>
          <span>For both quick prototypes and<br /> production-ready solutions</span>
        </li>
      </ul>
      
      <div className={styles.ctaContainer}>
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
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Pricing</h2>
          <p className={styles.subtitle}>
            Our company offers guaranteed publicity and free-of-charge media outreaches!
          </p>
        </div>
        
        <div className={styles.plansContainer}>
          <PricingPlan highlighted={true} />
          <PricingPlan />
          <PricingPlan />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;