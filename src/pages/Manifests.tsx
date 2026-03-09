import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import styles from './Manifests.module.css'

export default function Manifests() {
  return (
    <>
      <PageSeo
        title="Appliance Load Manifests & Current Inventory | E-Appliance Recycling Corp"
        description="Review current appliance loads by category, count, and hub. Understand as-is condition expectations before you buy."
        canonical="/manifests"
        og={{
          title: 'Appliance Load Manifests & Current Inventory',
          description: 'Current dealer-only appliance loads with practical condition guidance and pickup details.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'Appliance Load Manifests & Inventory' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Inventory and manifests</span>
          <h1>Current load visibility for wholesale buyers</h1>
          <p className={styles.lead}>
            Use this page to review active loads by hub, category, and count. Inventory is wholesale and as-is.
            Mix and condition vary by load, so review notes and media before confirming purchase.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.carryRow}>
            <div>
              <h2>Typical condition expectations</h2>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {site.legal.conditionExpectations.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ul className={styles.catGrid}>
              {site.inventoryCategories.map((cat) => (
                <li key={cat} className={styles.catItem}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.processVideoRow}>
            <div className={styles.processSide}>
              <h2>How purchase and pickup works</h2>
              <div className={styles.processList}>
                {site.process.map((step, i) => (
                  <div key={step.step} className={styles.processItem}>
                    <div className={styles.processLeft}>
                      <div className={styles.stepBubble}>{step.step}</div>
                      {i < site.process.length - 1 && <div className={styles.stepLine} aria-hidden="true" />}
                    </div>
                    <div className={styles.processContent}>
                      <h3>{step.label}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.videoSide}>
              <span className="eyebrow">Media and representation</span>
              <h2>Use notes, manifest rows, and media together</h2>
              <p>
                A manifest row gives category, count, hub, and status. Walkthrough media, when available, adds visual
                condition context. Buyers should review both before confirming payment and pickup.
              </p>
              <p style={{ marginTop: '0.875rem' }}>
                Final release is based on agreed wholesale terms and active inventory at the time of confirmation.
              </p>
              <MediaSlot
                src={null}
                type="video"
                alt="Sample load walkthrough video"
                label="Sample walkthrough media placeholder"
                aspectRatio="16/9"
                className={styles.sampleVideo}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.tableHeader}>
            <div>
              <h2>Current load manifests</h2>
              <p>Loads are updated as inventory changes. Check back or send an inquiry for current availability.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">
              Send an Inquiry
            </Link>
          </div>

          <div className={styles.empty}>
            <p>No loads available at this time. Send an inquiry and we'll follow up with current options.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Before you inquire, have this ready</h2>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {site.legal.inquiryChecklist.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
