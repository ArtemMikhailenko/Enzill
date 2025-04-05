'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './CountriesCarousel.module.css';

const CountriesCarousel = () => {
  const countries = [
    { name: "USA", flagCode: "US" },
    { name: "Germany", flagCode: "DE" },
    { name: "UK", flagCode: "GB" },
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

  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Дублируем массив для гарантии бесшовности
  const duplicatedCountries = [...countries, ...countries];

  return (
    <div 
      ref={containerRef} 
      className={styles.countriesCarousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`${styles.innerCarousel} ${isPaused ? styles.paused : ''}`}>
        <div className={styles.countriesTrack}>
          {duplicatedCountries.map((country, index) => (
            <div key={index} className={styles.countryBadge}>
              <span className={styles.flagContainer}>
                <img 
                  src={`https://flagcdn.com/w20/${country.flagCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${country.flagCode.toLowerCase()}.png 2x`}
                  width="30" 
                  height="30"
                  alt={country.name}
                  className={styles.flagImage}
                />
              </span>
              <span className={styles.countryName}>{country.name}</span>
            </div>
          ))}
        </div>
        
        {/* Дублируем содержимое для создания непрерывного потока */}
        <div className={styles.countriesTrack}>
          {duplicatedCountries.map((country, index) => (
            <div key={index} className={styles.countryBadge}>
              <span className={styles.flagContainer}>
                <img 
                  src={`https://flagcdn.com/w20/${country.flagCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${country.flagCode.toLowerCase()}.png 2x`}
                  width="20" 
                  height="20"
                  alt={country.name}
                  className={styles.flagImage}
                />
              </span>
              <span className={styles.countryName}>{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesCarousel;