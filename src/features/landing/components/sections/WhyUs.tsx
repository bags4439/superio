import { siteConfig } from '@/config/site.config';
import { SectionLabel } from '@/shared/components/ui/SectionLabel';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import styles from './WhyUs.module.css';

export function WhyUs() {
  const ref = useScrollAnimation();
  const { whyUs } = siteConfig;

  return (
    <section id="why-us" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className="fadeUp">
          <SectionLabel light>{whyUs.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{whyUs.title}</h2>
          <p className={styles.subtitle}>{whyUs.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {whyUs.items.map((item, idx) => (
            <article
              key={item.title}
              className={`${styles.card} fadeUp fadeUpDelay${(idx % 3) + 1}`}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
