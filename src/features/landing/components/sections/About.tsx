import { siteConfig } from '@/config/site.config';
import { SectionLabel } from '@/shared/components/ui/SectionLabel';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import styles from './About.module.css';

export function About() {
  const ref = useScrollAnimation();
  const { about, brand } = siteConfig;

  return (
    <section id="about" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className={styles.grid}>
          <div className="fadeUp">
            <div className={styles.visual}>
              <img
                src={brand.assets.logo}
                alt={brand.assets.logoAlt}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.imageLabel}>📍 {about.imageAlt}</div>
            <div className={styles.stats}>
              {about.stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <div className={styles.statNum}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="fadeUp fadeUpDelay2">
            <SectionLabel>{about.eyebrow}</SectionLabel>
            <h2 className={styles.title}>{about.title}</h2>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={styles.body}>
                {paragraph}
              </p>
            ))}
            <div className={styles.mission}>
              <div className={styles.missionLabel}>{about.mission.label}</div>
              <p className={styles.missionText}>{about.mission.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
