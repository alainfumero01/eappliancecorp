import { site } from '../content/siteContent'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  return (
    <div className={styles.bar} role="complementary" aria-label="Quick contact">
      <a
        href={`tel:${site.contact.phone}`}
        className={styles.btn}
        aria-label={`Call us at ${site.contact.phoneDisplay}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call Now
      </a>

      <div className={styles.divider} aria-hidden="true" />

      <a
        href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`}
        className={`${styles.btn} ${styles.btnText}`}
        aria-label="Send us a text message"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Text Us
      </a>
    </div>
  )
}
