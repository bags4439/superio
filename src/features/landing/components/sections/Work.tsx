import { siteConfig } from '@/config/site.config';
import { SectionLabel } from '@/shared/components/ui/SectionLabel';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import styles from './Work.module.css';

export function Work() {
  const ref = useScrollAnimation();
  const { work } = siteConfig;

  return (
    <section id="work" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className="fadeUp">
          <SectionLabel>{work.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{work.title}</h2>
          <p className={styles.subtitle}>{work.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {work.items.map((item, idx) => {
            const isCta = 'cta' in item && item.cta;
            const colorClass = item.color === 'cyan' ? styles.cardCyan : styles.cardOrange;
            const tagClass = item.color === 'cyan' ? styles.tagCyan : styles.tagOrange;

            return (
              <article
                key={item.name}
                className={`${styles.card} ${colorClass} ${isCta ? styles.cardCta : ''} fadeUp fadeUpDelay${(idx % 2) + 1}`}
              >
                <div className={styles.category}>{item.category}</div>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.desc}>{item.desc}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={`${styles.tag} ${tagClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
