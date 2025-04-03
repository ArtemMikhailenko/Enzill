// components/Footer/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.logo}>
              <Link href="/">
                <span className={styles.logoText}>Enzill</span>
              </Link>
            </div>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.legalLink}>
                Terms of Use
              </Link>
            </div>
            <div className={styles.copyright}>
              &copy; {new Date().getFullYear()} Enzill. All rights reserved.
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <nav className={styles.footerNav}>
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
            </nav>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <nav className={styles.footerNav}>
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;