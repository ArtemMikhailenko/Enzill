'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from './WhyChooseUs.module.css';
import ReactCountryFlag from 'react-country-flag';

// Import для Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
  hasBorder?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ 
  step, 
  title, 
  description, 
  isHighlighted = false,
  hasBorder = false
}) => {
  const cardClass = hasBorder 
    ? `${styles.stepCard} ${styles.borderedCard}` 
    : styles.stepCard;

  return (
    <div className={cardClass}>
      <div className={styles.stepsIndicator}>
        {Array(5).fill(0).map((_, index) => (
          <div 
            key={index} 
            className={`
              ${styles.stepDot} 
              ${index + 1 === step ? styles.activeStep : ''}
            `}
          />
        ))}
      </div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  );
};

interface CountryBadgeProps {
  name: string;
  flagCode: string;
}

const CountryBadge: React.FC<CountryBadgeProps> = ({ name, flagCode }) => {
  return (
    <div className={styles.countryBadge}>
      <ReactCountryFlag 
        countryCode={flagCode} 
        svg
        style={{ width: '2em', height: '2em', borderRadius:'50%'}}
        title={name}
      />
      <span className={styles.countryName}>{name}</span>
    </div>
  );
};


const WhyChooseUs: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const steps = [
    {
      step: 1,
      title: "Apply for a free-of-charge media outreach.",
      description: "Begin by submitting your application for a complimentary media outreach service."
    },
    {
      step: 2,
      title: "Apply for a free-of-charge media outreach.",
      description: "Begin by submitting your application for a complimentary media outreach service."
    },
    {
      step: 3,
      title: "Apply for a free-of-charge media outreach.",
      description: "Begin by submitting your application for a complimentary media outreach service.",
    },
    {
      step: 4,
      title: "Apply for a free-of-charge media outreach.",
      description: "Begin by submitting your application for a complimentary media outreach service."
    },
    {
      step: 5,
      title: "Apply for a free-of-charge media outreach.",
      description: "Begin by submitting your application for a complimentary media outreach service."
    }
  ];

  const countries = [
    { name: "USA", flagCode: "US" },
    { name: "Germany", flagCode: "DE" },
    { name: "Poland", flagCode: "PL" },
    { name: "Italy", flagCode: "IT" },
    { name: "Spain", flagCode: "ES" },
    { name: "France", flagCode: "FR" },
    { name: "Brazil", flagCode: "BR" },
    { name: "Austria", flagCode: "AT" },
    { name: "Philippines", flagCode: "PH" },
    { name: "Canada", flagCode: "CA" },
    { name: "Portugal", flagCode: "PT" },
    { name: "Netherlands", flagCode: "NL" },
    { name: "China", flagCode: "CN" },
    { name: "Japan", flagCode: "JP" },
    { name: "Australia", flagCode: "AU" },
    { name: "India", flagCode: "IN" },
    { name: "Mexico", flagCode: "MX" },
    { name: "Sweden", flagCode: "SE" },
    { name: "Norway", flagCode: "NO" },
    { name: "Denmark", flagCode: "DK" },
    { name: "Finland", flagCode: "FI" },
    { name: "Switzerland", flagCode: "CH" },
    { name: "Belgium", flagCode: "BE" },
    { name: "Ireland", flagCode: "IE" },
    { name: "Israel", flagCode: "IL" },
    { name: "Turkey", flagCode: "TR" }
  ];
  

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why choose us?</h2>
          <p className={styles.subtitle}>
            Our company offers guaranteed publicity and free-of-charge media outreaches!
          </p>
        </div>
        
        <div className={styles.sliderContainer}>
          <Slider ref={sliderRef} {...sliderSettings} className={styles.slider}>
            {steps.map((step, index) => (
              <div key={index} className={styles.slideWrapper}>
                <StepCard 
                  step={step.step}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </Slider>
          
          <div className={styles.sliderControls}>
            <button 
              onClick={goToPrev} 
              className={`${styles.sliderButton} ${styles.prevButton}`}
              aria-label="Previous slide"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={goToNext} 
              className={`${styles.sliderButton} ${styles.nextButton}`}
              aria-label="Next slide"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className={styles.trackRecord}>
  <h3 className={styles.trackTitle}>
    Proven track record in <span className={styles.highlight}>30+</span> regions
  </h3>
  
        
        </div>

      </div>
      <div className={styles.countriesCarousel}>
      <div className={styles.countriesTrack}>
    {countries.concat(countries).map((country, index) => (
      <CountryBadge 
        key={index} 
        name={country.name} 
        flagCode={country.flagCode} 
      />
    ))}
  </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;