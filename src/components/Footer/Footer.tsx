import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h2 className={styles.logoText}>Enzill</h2>
          
          <div className={styles.legalSection}>
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
        </div>

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

        <div className={styles.column + styles.columnAbout}>
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
        <div className={styles.legalSectionMob}>
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
      </div>
    </footer>
  );
};

export default Footer;