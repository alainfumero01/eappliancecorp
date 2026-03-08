import { site } from '../content/siteContent'
import PageSeo from '../components/PageSeo'
import Breadcrumb from '../components/Breadcrumb'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <PageSeo
        title="Contact E-Appliance Recycling Corp | Dealer-Only Appliance Loads"
        description="Contact us with your business profile, category needs, and load volume. We serve qualified wholesale buyers only."
        canonical="/contact"
        og={{
          title: 'Contact E-Appliance Recycling Corp',
          description: 'Send your dealer requirements and get current load availability from our Texas and New Jersey hubs.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'Contact E-Appliance Recycling Corp' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]} />
          <span className="eyebrow">Dealer inquiries</span>
          <h1>Contact wholesale sales</h1>
          <p className={styles.lead}>
            Share your business details, category needs, and target volume. We reply with current load options,
            condition expectations, and pickup guidance.
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
                <p className={styles.methodNote}>Fastest channel for active load availability and hub coordination.</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.625rem' }}>
                  <a href={`tel:${site.contact.phone}`} className="btn btn--primary">
                    Call Now
                  </a>
                  <a href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`} className="btn btn--ghost">
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
                <p className={styles.methodNote}>Use email for formal requirements, purchase history, and document exchange.</p>
                <div style={{ marginTop: '1rem' }}>
                  <a href={`mailto:${site.contact.email}`} className="btn btn--ghost">
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactSide}>
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Who we work with</p>
                <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
                  {site.legal.buyerQualification.map((item) => (
                    <li key={item} style={{ marginTop: '0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="divider" />
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Who this is not for</p>
                <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
                  {site.legal.notFor.map((item) => (
                    <li key={item} style={{ marginTop: '0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="divider" />
              <div className={styles.sideBlock}>
                <p className={styles.sideLabel}>Before you inquire, have this ready</p>
                <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1rem' }}>
                  {site.legal.inquiryChecklist.map((item) => (
                    <li key={item} style={{ marginTop: '0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="divider" />
              <div className={styles.placeholderNote}>
                <p>
                  <strong>Note:</strong> Contact details are placeholders. Update phone and email in
                  <code> src/content/siteContent.ts </code>
                  before go-live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
