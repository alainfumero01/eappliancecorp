import { site } from '../content/siteContent'
import PageSeo from '../components/PageSeo'
import Breadcrumb from '../components/Breadcrumb'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <PageSeo
        title="Contact E-Appliance Recycling Corp | Wholesale Appliance Loads"
        description="Call or text to inquire about wholesale appliance loads. Distribution hubs in Texas and New Jersey. We work exclusively with resellers and bulk buyers."
        canonical="/contact"
        og={{ title: 'Contact E-Appliance Recycling Corp', description: 'Call or text to inquire about wholesale appliance loads. Texas and New Jersey hubs.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Contact E-Appliance Recycling Corp' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />
          <span className="eyebrow">Get in touch</span>
          <h1>Contact us</h1>
          <p className={styles.lead}>
            Call or text for the fastest response. We are available to discuss loads,
            answer questions about inventory, and coordinate logistics.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactMain}>
              <div className={styles.methodBlock}>
                <p className={styles.methodLabel}>Phone</p>
                <a href={`tel:${site.contact.phone}`} className={styles.methodValue}>
                  {site.contact.phoneDisplay}
                </a>
                <p className={styles.methodNote}>Call to discuss a load, check availability, or ask any questions.</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.625rem' }}>
                  <a href={`tel:${site.contact.phone}`} className="btn btn--primary">Call Now</a>
                  <a
                    href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`}
                    className="btn btn--ghost"
                  >
                    Send a Text
                  </a>
                </div>
              </div>

              <hr className="divider" />

              <div className={styles.methodBlock}>
                <p className={styles.methodLabel}>Email</p>
                <a href={`mailto:${site.contact.email}`} className={styles.methodValue}>
                  {site.contact.email}
                </a>
                <p className={styles.methodNote}>For written inquiries or sending load requirements in detail.</p>
                <div style={{ marginTop: '1rem' }}>
                  <a href={`mailto:${site.contact.email}`} className="btn btn--ghost">Send Email</a>
                </div>
              </div>
            </div>

            <div className={styles.contactSide}>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Hub locations</p>
                {site.hubs.map((hub) => (
                  <div key={hub} className={styles.hubRow}>
                    <span className={styles.hubDot} aria-hidden="true" />
                    <span>{hub}</span>
                  </div>
                ))}
              </div>
              <hr className="divider" />
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Who we work with</p>
                <p className={styles.sideText}>
                  Wholesale buyers and resellers purchasing by the load. We do not sell
                  individual units to end consumers.
                </p>
              </div>
              <hr className="divider" />
              <div className={styles.placeholderNote}>
                <p>
                  <strong>Note:</strong> Contact details are placeholders. Update phone and email in{' '}
                  <code>src/content/siteContent.ts</code> before going live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
