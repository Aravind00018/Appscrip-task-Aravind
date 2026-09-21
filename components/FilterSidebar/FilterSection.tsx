'use client';

import React, { useState } from 'react';
import styles from './FilterSidebar.module.css';

interface FilterSectionProps {
  title: string;
  defaultExpanded?: boolean;
  children?: React.ReactNode;
  valueSummary?: string;
}

export default function FilterSection({
  title,
  defaultExpanded = false,
  children,
  valueSummary = 'All',
}: FilterSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={styles.section}>
      <button
        type="button"
        className={styles.sectionHeader}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
      >
        <div className={styles.headerTextGroup}>
          <span className={styles.sectionTitle}>{title}</span>
          <span className={styles.sectionSummary}>{valueSummary}</span>
        </div>
        <svg
          className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isExpanded && children && (
        <div className={styles.sectionContent}>
          {children}
        </div>
      )}
    </div>
  );
}
