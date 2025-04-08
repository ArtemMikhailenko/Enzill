'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styles from './WhyChooseUs.module.css';
import ReactCountryFlag from 'react-country-flag';

// Import для Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountriesCarousel from '../CountriesCarousel/CountriesCarousel';

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
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.03,
          centerMode: true,
          centerPadding: '10px' // значение можно скорректировать для желаемой видимости
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
      title: "Search Engine Visibility",
      description: "Each backlink serves as a recommendation, boosting your SERP rankings."
    },
    {
      step: 2,
      title: "Boosts Website Traffic",
      description: "Attract engaged visitors from reputable sites."
    },
    {
      step: 3,
      title: "Establishes Brand Authority",
      description: "Backlinks from respected sites build audience trust.",
    },
    {
      step: 4,
      title: "Support Content Marketing",
      description: "Quality content gets naturally linked and shared."
    },
    {
      step: 5,
      title: "Long-Term SEO",
      description: "Consistent link-building efforts yield ongoing traffic."
    }
  ];


  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Link-Building Agency That Gets Results</h2>
          <p className={styles.subtitle}>
          Our data-driven approach ensures high-quality backlinks from reputable sources, which boosts search engine rankings and establishes credibility in your industry.
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
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7388 8.00027H1.26514M1.26514 8.00027L8.00198 14.7371M1.26514 8.00027L8.00198 1.26343" stroke="white" stroke-width="1.68421" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button 
              onClick={goToNext} 
              className={`${styles.sliderButton} ${styles.nextButton}`}
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.26074 8.00027H14.7345M14.7345 8.00027L7.99758 14.7371M14.7345 8.00027L7.99758 1.26343" stroke="white" stroke-width="1.68421" stroke-linecap="round" stroke-linejoin="round" />
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
            <CountriesCarousel/>
    </section>
  );
};

export default WhyChooseUs;