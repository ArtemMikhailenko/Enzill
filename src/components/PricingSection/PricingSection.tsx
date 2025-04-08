// components/PricingSection/PricingSection.tsx
import React from 'react';
import Link from 'next/link';
import styles from './PricingSection.module.css';

interface PricingPlanProps {
  highlighted?: boolean;
  planTitle: string;
  pricingPrefix: string;
  price: string;
  pricePeriod: string;
  description: string;
  features: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  highlighted = false,
  planTitle,
  pricingPrefix,
  price,
  pricePeriod,
  description,
  features,
}) => {
  const planClass = highlighted 
    ? `${styles.pricingPlan} ${styles.highlighted}` 
    : styles.pricingPlan;
  
  const checkIconClass = highlighted 
    ? styles.checkIconHighlighted 
    : styles.checkIcon;

  return (
    <div className={planClass}>
      <h3 className={styles.planTitle}>{planTitle}</h3>
      
      <div className={styles.pricingInfo}>
        <div className={styles.pricingPrefix}>{pricingPrefix}</div>
        <div className={styles.price}>
          <span className={styles.currency}>$</span>
          <span className={styles.amount}>{price}</span>
          <span className={styles.period}>{pricePeriod}</span>
        </div>
      </div>
      
      <div className={styles.description}>
        {description}
      </div>
      
      <div className={styles.divider}></div>
      
      <ul className={styles.featuresList}>
        {features.map((feature, idx) => (
          <li key={idx} className={styles.featureItem}>
            <div className={checkIconClass}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33333 12.9883L5.58917 10.2442L4.41083 11.4225L8.33333 15.345L15.5892 8.08917L14.4108 6.91083L8.33333 12.9883Z" fill="currentColor"/>
              </svg>
            </div>
            <span>{feature}</span>
          </li>
        ))}
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
  // Дані для кожної картки
  const pricingPlansData: PricingPlanProps[] = [
    {
      highlighted: true,
      planTitle: "Link Insertions",
      pricingPrefix: "Starting at",
      price: "100",
      pricePeriod: "/per link",
      description: "The link will be added to the already-written article.",
      features: [
        "Strong SEO metrics",
        "Best price-quality ratio",
        "Relevant pages",
      ],
    },
    {
      planTitle: "Guest Posting",
      pricingPrefix: "Starting at",
      price: "150",
      pricePeriod: "/per link",
      description: "We prepare articles related to your business and publish them on websites",
      features: [
        "Strong SEO metrics",
        "Human-written content",
        "Relevant content",
      ],
    },
    {
      planTitle: "Forum Backlinks",
      pricingPrefix: "Starting at",
      price: "7",
      pricePeriod: "/per campaign",
      description: "The link will be placed on forums in comments and profile pages",
      features: [
        "Strong SEO metrics",
        "Natural-looking comments",
        "Niche-relevant topics",
      ],
    },
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Pricing</h2>
          <p className={styles.subtitle}>
            Our team can help you find the best mix of solutions to meet the unique needs of your business.
          </p>
        </div>
        
        <div className={styles.plansContainer}>
          {pricingPlansData.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
