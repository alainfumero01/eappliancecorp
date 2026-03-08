import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function WholesaleWasherDryer() {
  return (
    <>
      <PageSeo
        title="Wholesale Washer and Dryer Loads | Pairs & Singles"
        description="Wholesale washer and dryer loads for qualified buyers. Review pair and single mix expectations and as-is purchase terms."
        canonical="/wholesale-washer-dryer-loads"
        og={{ title: 'Wholesale Washer and Dryer Loads', description: 'Dealer-only washer and dryer loads with practical buying and pickup guidance.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Wholesale Washer and Dryer Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Wholesale Washer and Dryer Loads', path: '/wholesale-washer-dryer-loads' }]} />
          <span className="eyebrow">Wholesale laundry appliances</span>
          <h1>Wholesale Washer and Dryer Loads</h1>
          <p className={styles.lead}>
            Washer and dryer inventory is a high-turn category for many dealers. Loads can include matched pairs,
            singles, and mixed configurations depending on inbound supply.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Category-specific buying notes</span>
            <h2>How to read pair and single mix in a load</h2>
            <p>
              Pair ratio matters for pricing and sell-through. Some loads are pair-heavy, while others contain
              more singles. Ask for current ratio expectations before confirmation.
            </p>
            <p>
              Cosmetic wear varies by unit and is normal in this wholesale category. Buyers should account for
              panel and finish variability in resale planning.
            </p>
            <p>
              Loads are sold as-is to qualified wholesale buyers. Release and pickup are coordinated after pricing,
              terms, and timing are confirmed.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Load composition and configurations</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Front-load washers</h3>
              <p>Common in mixed return streams with variable cosmetic profile.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Top-load washers</h3>
              <p>Consistent demand in value and rental-focused resale channels.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Electric dryers</h3>
              <p>Often the largest dryer segment within mixed laundry loads.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Gas dryers</h3>
              <p>Available by load depending on current inbound profile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>How purchase and pickup works</h2>
              <ul className={styles.checkList}>
                {site.process.map((step) => (
                  <li key={step.step} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <strong style={{ marginRight: '0.35rem' }}>{step.label}:</strong>
                    {step.detail}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Who this is not for</h2>
              <ul className={styles.checkList}>
                {site.legal.notFor.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/texas-wholesale-appliance-loads" className="btn btn--outline">Texas Hub</Link>
                <Link to="/new-jersey-wholesale-appliance-loads" className="btn btn--outline">NJ Hub</Link>
                <Link to="/manifests" className="btn btn--outline">View Manifests</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Other wholesale load types</h2>
          <div className={styles.relatedLinks}>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/customer-returns-appliances" className="btn btn--outline">Customer Returns</Link>
            <Link to="/scratch-and-dent-appliances" className="btn btn--outline">Scratch &amp; Dent</Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">Liquidation Loads</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Need washer and dryer load options?</h2>
              <p>Share your pair versus single preference and monthly target volume.</p>
            </div>
            <div className={styles.ctaBtns}>
              <a href={`tel:${site.contact.phone}`} className="btn btn--primary btn--lg">Call {site.contact.phoneDisplay}</a>
              <a href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`} className="btn btn--outline btn--lg">Text Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
