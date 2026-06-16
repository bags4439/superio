import { siteConfig } from '@/config/site.config';
import { SectionLabel } from '@/shared/components/ui/SectionLabel';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import styles from './HowItWorks.module.css';

export function HowItWorks() {
  const ref = useScrollAnimation();
  const { howItWorks } = siteConfig;

  return (
    <section id="how-it-works" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className="fadeUp">
          <SectionLabel>{howItWorks.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{howItWorks.title}</h2>
          <p className={styles.subtitle}>{howItWorks.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {howItWorks.steps.map((step, idx) => (
            <article
              key={step.number}
              className={`${styles.card} fadeUp fadeUpDelay${idx + 1}`}
            >
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className={`${styles.cta} fadeUp`}>
          <div className={styles.ctaIcon}>→</div>
          <div>
            <div className={styles.ctaText}>Ready to start?</div>
            <div className={styles.ctaSub}>Book a free discovery call</div>
          </div>
        </a>
      </div>
    </section>
  );
}
