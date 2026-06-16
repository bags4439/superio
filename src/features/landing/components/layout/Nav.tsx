import { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import { useNavScroll } from '@/shared/hooks/useNavScroll';
import { Button } from '@/shared/components/ui/Button';
import { Logo } from '@/shared/components/ui/Logo';
import styles from './Nav.module.css';

export function Nav() {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState(false);
  const { navLinks, navCta } = siteConfig;

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logoLink}>
        <Logo size="md" />
      </a>

      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <Button href={navCta.secondary.href} variant="navOutline" size="sm">
          {navCta.secondary.label}
        </Button>
        <Button href={navCta.primary.href} variant="navSolid" size="sm">
          {navCta.primary.label}
        </Button>
      </div>

      <button
        className={styles.mobileMenuBtn}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href={navCta.primary.href} variant="navSolid" size="sm">
            {navCta.primary.label}
          </Button>
        </div>
      )}
    </nav>
  );
}
