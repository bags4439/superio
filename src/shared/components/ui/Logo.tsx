import { siteConfig } from '@/config/site.config';
import styles from './Logo.module.css';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showWordmark = true, className = '' }: LogoProps) {
  const { site, brand } = siteConfig;

  return (
    <span className={`${styles.logo} ${className}`}>
      <img
        src={brand.assets.logo}
        alt={brand.assets.logoAlt}
        className={`${styles.image} ${styles[size]}`}
      />
      {showWordmark && (
        <span className={styles.wordmark}>
          {site.shortName} <span className={styles.accent}>Labs</span>
        </span>
      )}
    </span>
  );
}
