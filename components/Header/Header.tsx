import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export default function Header({ onMobileMenuToggle, isMobileMenuOpen }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left: Mobile hamburger & Brand Icon */}
        <div className={styles.leftGroup}>
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={onMobileMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link href="/" className={styles.brandIconLink} aria-label="Home">
            <Image
              src="/images/logo-icon.png"
              alt="Brand Icon"
              width={35}
              height={35}
              priority
              className={styles.brandIcon}
            />
          </Link>
        </div>

        {/* Center: LOGO */}
        <div className={styles.centerGroup}>
          <Link href="/" className={styles.logoText}>
            LOGO
          </Link>
        </div>

        {/* Right: Actions */}
        <div className={styles.rightGroup}>
          <button type="button" className={styles.iconButton} aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>

          <button type="button" className={styles.iconButton} aria-label="Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>

          <button type="button" className={styles.iconButton} aria-label="Shopping Bag">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>

          <button type="button" className={`${styles.iconButton} ${styles.desktopOnly}`} aria-label="User Profile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <div className={`${styles.langSelector} ${styles.desktopOnly}`}>
            <span className={styles.langText}>ENG</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
