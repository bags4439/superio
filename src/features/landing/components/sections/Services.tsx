import { siteConfig } from '@/config/site.config';
import { SectionLabel } from '@/shared/components/ui/SectionLabel';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import styles from './Services.module.css';

export function Services() {
  const ref = useScrollAnimation();
  const { services } = siteConfig;

  return (
    <section id="services" className={styles.section}>
      <div ref={ref} className={`sectionInner ${styles.inner}`}>
        <div className="fadeUp">
          <SectionLabel>{services.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{services.title}</h2>
          <p className={styles.subtitle}>{services.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {services.items.map((item, idx) => (
            <article
              key={item.title}
              className={`${styles.card} fadeUp fadeUpDelay${(idx % 3) + 1}`}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
