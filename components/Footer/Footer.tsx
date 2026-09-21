'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top Footer Section */}
        <div className={styles.topSection}>
          {/* Newsletter Column */}
          <div className={styles.newsletterCol}>
            <h2 className={styles.sectionHeading}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterSubtext}>Sign up for updates from mettā muse.</p>
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Email address for newsletter"
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeButton}>
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Contact & Currency Column */}
          <div className={styles.contactCol}>
            <div className={styles.contactBlock}>
              <h2 className={styles.sectionHeading}>CONTACT US</h2>
              <p className={styles.contactItem}>+44 221 133 5360</p>
              <p className={styles.contactItem}>customercare@mettamuse.com</p>
            </div>

            <div className={styles.currencyBlock}>
              <h2 className={styles.sectionHeading}>CURRENCY</h2>
              <div className={styles.currencyIndicator}>
                <svg
                  className={styles.flagIcon}
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="24" height="16" fill="#B22234" />
                  <rect y="1.23" width="24" height="1.23" fill="#FFFFFF" />
                  <rect y="3.69" width="24" height="1.23" fill="#FFFFFF" />
                  <rect y="6.15" width="24" height="1.23" fill="#FFFFFF" />
                  <rect y="8.61" width="24" height="1.23" fill="#FFFFFF" />
                  <rect y="11.07" width="24" height="1.23" fill="#FFFFFF" />
                  <rect y="13.53" width="24" height="1.23" fill="#FFFFFF" />
                  <rect width="10" height="8.6" fill="#3C3B6E" />
                </svg>
                <span className={styles.currencyCode}>• USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Bottom Footer Section */}
        <div className={styles.bottomSection}>
          {/* mettà muse Links */}
          <div className={styles.navColumn}>
            <h3 className={styles.navHeading}>mettā muse</h3>
            <ul className={styles.navList}>
              <li><Link href="#about" className={styles.navLink}>About Us</Link></li>
              <li><Link href="#stories" className={styles.navLink}>Stories</Link></li>
              <li><Link href="#artisans" className={styles.navLink}>Artisans</Link></li>
              <li><Link href="#boutiques" className={styles.navLink}>Boutiques</Link></li>
              <li><Link href="#contact" className={styles.navLink}>Contact Us</Link></li>
              <li><Link href="#eu-compliance" className={styles.navLink}>EU Compliances Docs</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.navColumn}>
            <h3 className={styles.navHeading}>QUICK LINKS</h3>
            <ul className={styles.navList}>
              <li><Link href="#orders" className={styles.navLink}>Orders & Shipping</Link></li>
              <li><Link href="#seller" className={styles.navLink}>Join/Login as a Seller</Link></li>
              <li><Link href="#payment" className={styles.navLink}>Payment & Pricing</Link></li>
              <li><Link href="#returns" className={styles.navLink}>Return & Refunds</Link></li>
              <li><Link href="#faqs" className={styles.navLink}>FAQs</Link></li>
              <li><Link href="#privacy" className={styles.navLink}>Privacy Policy</Link></li>
              <li><Link href="#terms" className={styles.navLink}>Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social & Payments */}
          <div className={styles.navColumn}>
            <div className={styles.socialGroup}>
              <h3 className={styles.navHeading}>FOLLOW US</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={styles.paymentGroup}>
              <h3 className={styles.navHeading}>mettā muse ACCEPTS</h3>
              <div className={styles.paymentMethods}>
                <Image
                  src="/images/payment-methods.png"
                  alt="Accepted payment methods: Google Pay, Mastercard, PayPal, Amex, Apple Pay, Shop Pay"
                  width={380}
                  height={50}
                  className={styles.paymentImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightRow}>
          <p className={styles.copyrightText}>
            Copyright © 2023 mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
