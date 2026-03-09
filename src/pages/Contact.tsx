import { site } from '../content/siteContent'
import PageSeo from '../components/PageSeo'
import { useSearchParams } from 'react-router-dom'
import styles from './Contact.module.css'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const sent = searchParams.get('sent') === '1'

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
              {sent ? (
                <div className={styles.successMsg}>
                  <p className={styles.successTitle}>Message received</p>
                  <p>Thank you for reaching out. We'll review your inquiry and get back to you shortly.</p>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/alainfumero2000@gmail.com"
                  method="POST"
                  className={styles.contactForm}
                >
                  <input type="hidden" name="_subject" value="New wholesale inquiry from E-Appliance website" />
                  <input type="hidden" name="_next" value="https://eappliancecorp.com/contact?sent=1" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className={styles.fieldGroup}>
                    <label htmlFor="name" className={styles.fieldLabel}>Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={styles.fieldInput}
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="phone" className={styles.fieldLabel}>Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={styles.fieldInput}
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.fieldLabel}>Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={styles.fieldInput}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.fieldLabel}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={styles.fieldTextarea}
                      placeholder="Tell us your business type, categories you buy, load size, preferred hub (TX or NJ), and whether you'll self-pickup, use your own carrier, or need delivery."
                    />
                  </div>

                  <button type="submit" className="btn btn--primary">
                    Send inquiry
                  </button>
                </form>
              )}
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
