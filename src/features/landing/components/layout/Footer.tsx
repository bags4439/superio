import { siteConfig } from '@/config/site.config';
import styles from './Footer.module.css';

export function Footer() {
  const { site, footer } = siteConfig;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <a href="#home" className={styles.logo}>
              <div className={styles.logoIcon}>S/I</div>
              <span className={styles.logoText}>
                {site.shortName} <span>Labs</span>
              </span>
            </a>
            <p className={styles.brandDesc}>{footer.description}</p>
          </div>
          {footer.columns.map((column) => (
            <div key={column.title}>
              <div className={styles.colTitle}>{column.title}</div>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{footer.copyright}</p>
          <ul className={styles.legal}>
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
