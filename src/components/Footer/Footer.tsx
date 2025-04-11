import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Column */}
        <div className={styles.column}>
          <h2 className={styles.logoText}>Enzill</h2>
          <p className={styles.tagline}>Let's create your SEO link-building strategy together!</p>
          <p className={styles.email}>hello@enzill.com</p>
        </div>

        {/* Services Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Services</h3>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/services/guest-posting" className={styles.navLink}>
                Guest Posting
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services/forum-backlinks" className={styles.navLink}>
                Forum Backlinks
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services/contextual-backlinks" className={styles.navLink}>
                Contextual Backlinks
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services/profile-backlinks" className={styles.navLink}>
                Profile Backlinks
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services/link-insert" className={styles.navLink}>
                Link Insert
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Company</h3>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className={styles.copyrightContainer}>
        <div className={styles.copyrightContent}>
          <p className={styles.copyrightText}>&copy; 2025 Enzill. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;