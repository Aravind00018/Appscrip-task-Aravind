import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

interface NavigationProps {
  isMobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
}

export default function Navigation({ isMobileMenuOpen, onCloseMobileMenu }: NavigationProps) {
  const navItems = [
    { label: 'SHOP', href: '/', active: true },
    { label: 'SKILLS', href: '#skills', active: false },
    { label: 'STORIES', href: '#stories', active: false },
    { label: 'ABOUT', href: '#about', active: false },
    { label: 'CONTACT US', href: '#contact', active: false },
  ];

  return (
    <nav
      className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
      aria-label="Main Navigation"
    >
      <div className={styles.container}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${item.active ? styles.active : ''}`}
                onClick={onCloseMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.divider} />
    </nav>
  );
}
