'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  // Управляем состоянием бургер-меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logo}>
          <Link href="/">
            <span>Enzill</span>
          </Link>
        </div>

        {/* Навигация для десктопа */}
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/pricing" className={styles.navLink}>
                Pricing
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/why-choose-us" className={styles.navLink}>
                Why choose us?
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Кнопка "Book a Call" (CTA) */}
        <div className={styles.cta}>
          <Link href="/book-call" className={styles.ctaButton}>
            Book a Call
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

        {/* Бургер-иконка (только на мобильных) */}
        <button 
          className={styles.burgerButton} 
          onClick={handleBurgerClick}
          aria-label="Open menu"
        >
          {/* Простой "гамбургер" из 3-х полосок */}
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Мобильное меню, выезжающее сбоку */}
      <div 
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={handleCloseMenu}
      >
        <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
          {/* Кнопка закрытия меню */}
          <button 
            className={styles.closeButton} 
            onClick={handleCloseMenu}
            aria-label="Close menu"
          >
            &times;
          </button>

          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/" className={styles.mobileNavLink} onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={styles.mobileNavLink} onClick={handleCloseMenu}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/why-choose-us" className={styles.mobileNavLink} onClick={handleCloseMenu}>
                Why choose us?
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.mobileNavLink} onClick={handleCloseMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <Link 
            href="/book-call" 
            className={styles.mobileCtaButton}
            onClick={handleCloseMenu}
          >
            Book a Call
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
    </header>
  );
};

export default Header;
