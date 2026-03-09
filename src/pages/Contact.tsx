import { useState } from 'react'
import { site } from '../content/siteContent'
import PageSeo from '../components/PageSeo'
import Breadcrumb from '../components/Breadcrumb'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/alainfumero2000@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          Message: form.message,
          _subject: 'New wholesale inquiry from E-Appliance website',
        }),
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

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
              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <p className={styles.successTitle}>Message received</p>
                  <p>Thank you for reaching out. We'll review your inquiry and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="name" className={styles.fieldLabel}>Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={styles.fieldInput}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
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
                      value={form.phone}
                      onChange={handleChange}
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
                      value={form.email}
                      onChange={handleChange}
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
                      placeholder="Tell us your business type, categories you buy, load size, preferred hub (TX or NJ), and pickup method."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.errorMsg}>Something went wrong. Please try again or reach out directly.</p>
                  )}

                  <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send inquiry'}
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
