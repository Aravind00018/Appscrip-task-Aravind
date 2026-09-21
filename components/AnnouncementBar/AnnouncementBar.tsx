import React from 'react';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const items = [
    { id: 1, text: 'Lorem ipsum dolor' },
    { id: 2, text: 'Lorem ipsum dolor' },
    { id: 3, text: 'Lorem ipsum dolor' },
  ];

  return (
    <aside className={styles.bar} aria-label="Promotions">
      <div className={styles.container}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.item} ${index > 0 ? styles.desktopOnly : ''}`}
          >
            <svg
              className={styles.icon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="5" height="5" stroke="#EB4C6B" strokeWidth="1.5" />
              <rect x="9" y="2" width="5" height="5" stroke="#EB4C6B" strokeWidth="1.5" />
              <rect x="2" y="9" width="5" height="5" stroke="#EB4C6B" strokeWidth="1.5" />
              <rect x="9" y="9" width="5" height="5" stroke="#EB4C6B" strokeWidth="1.5" />
            </svg>
            <span className={styles.text}>{item.text}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
