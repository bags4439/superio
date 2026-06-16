import { siteConfig } from '@/config/site.config';
import { Button } from '@/shared/components/ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  const { hero, site } = siteConfig;

  return (
    <section className={styles.hero} id="home">
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.content}>
        <div>
          <div className={styles.badge}>
            <div className={styles.badgeDot} />
            <span>{hero.badge}</span>
          </div>
          <h1 className={styles.title}>
            {hero.title[0]}
            <br />
            <span className={styles.accent}>{hero.title[1]}</span>
            <br />
            <span className={styles.accent2}>{hero.title[2]}</span>
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <div className={styles.actions}>
            <Button href="#contact" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button href="#how-it-works" variant="ghost" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>
          <div className={styles.trust}>
            <div className={styles.avatars}>
              <div className={styles.avatar}>AK</div>
              <div className={styles.avatar}>JM</div>
              <div className={styles.avatar}>EO</div>
              <div className={styles.avatar}>+</div>
            </div>
            <p className={styles.trustText}>
              <strong>
                {hero.trustCount} {hero.trustLabel}
              </strong>
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.floatingBadge} ${styles.badge1}`}>
            <span>{hero.floatingBadges[0]}</span>
          </div>
          <div className={styles.browserMockup}>
            <div className={styles.browserBar}>
              <div className={`${styles.dot} ${styles.dotRed}`} />
              <div className={`${styles.dot} ${styles.dotYellow}`} />
              <div className={`${styles.dot} ${styles.dotGreen}`} />
              <div className={styles.urlBar}>{site.url.replace('https://', '')}</div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>1</span>
                <span>
                  <span className={styles.codeKeyword}>const</span>{' '}
                  <span className={styles.codeFn}>build</span> ={' '}
                  <span className={styles.codeString}>&apos;{site.tagline}&apos;</span>
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>2</span>
                <span className={styles.codeComment}>// Premium apps & websites</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNum}>3</span>
                <span>
                  <span className={styles.codeKeyword}>await</span>{' '}
                  <span className={styles.codeFn}>superio</span>.
                  <span className={styles.codeFn}>ship</span>(product)
                </span>
              </div>
              <div className={styles.previewCard}>
                <div className={styles.previewHeader}>
                  <div className={styles.previewIcon} />
                  <div>
                    <div className={styles.previewTitle}>Project Alpha</div>
                    <div className={styles.previewSub}>Build in progress — 78%</div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.floatingBadge} ${styles.badge2}`}>
            <span>{hero.floatingBadges[1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
