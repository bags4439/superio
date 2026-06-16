import { siteConfig } from '@/config/site.config';
import { SectionLabel } from '@/shared/components/ui/SectionLabel';
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation';
import { Button } from '@/shared/components/ui/Button';
import {
  getContactValue,
  getMailtoUrl,
  getWhatsAppUrl,
} from '@/shared/utils/theme';
import styles from './Contact.module.css';

export function Contact() {
  const ref = useScrollAnimation();
  const { contactSection } = siteConfig;

  return (
    <section id="contact" className={styles.section}>
      <div ref={ref} className="sectionInner">
        <div className="fadeUp">
          <SectionLabel>{contactSection.eyebrow}</SectionLabel>
          <h2 className={styles.title}>{contactSection.title}</h2>
          <p className={styles.subtitle}>{contactSection.subtitle}</p>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.infoList} fadeUp`}>
            {contactSection.channels.map((channel) => {
              const value = getContactValue(channel.key);
              const isEmail = channel.key === 'email';
              const isWhatsApp = channel.key === 'whatsapp';

              return (
                <div key={channel.label} className={styles.infoItem}>
                  <div className={styles.icon}>{channel.icon}</div>
                  <div>
                    <div className={styles.infoLabel}>{channel.label}</div>
                    <div className={styles.infoValue}>
                      {isEmail ? (
                        <a href={getMailtoUrl()}>{value}</a>
                      ) : isWhatsApp ? (
                        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`${styles.ctaPanel} fadeUp fadeUpDelay2`}>
            <div className={styles.ctaTitle}>Ready to get started?</div>
            <p className={styles.ctaDesc}>
              Reach out via email or WhatsApp and we will get back to you within
              one business day.
            </p>
            <div className={styles.ctaButtons}>
              <Button href={getMailtoUrl()} size="lg">
                {contactSection.cta.email}
              </Button>
              <Button
                href={getWhatsAppUrl()}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                {contactSection.cta.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
