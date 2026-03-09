import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import styles from './IntentPage.module.css'

export default function NewJerseyWholesale() {
  return (
    <>
      <PageSeo
        title="New Jersey Wholesale Appliance Loads | E-Appliance Recycling Corp"
        description="Dealer-only appliance loads from our New Jersey hub with shipping coordinated through our freight broker network."
        canonical="/new-jersey-wholesale-appliance-loads"
        og={{ title: 'New Jersey Wholesale Appliance Loads', description: 'As-is wholesale appliance loads from our New Jersey distribution hub.', type: 'website' }}
        twitter={{ card: 'summary', title: 'New Jersey Wholesale Appliance Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">New Jersey distribution hub</span>
          <h1>New Jersey Wholesale Appliance Loads</h1>
          <p className={styles.lead}>
            Our New Jersey hub supports East Coast buyers who need steady load sourcing. We work with multiple freight brokers to find the best shipping rate. Inventory is dealer-only and sold under as-is wholesale terms.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">East Coast operating context</span>
            <h2>What buyers use the NJ hub for</h2>
            <p>
              Buyers use this location when they need practical access to Northeast and Mid-Atlantic markets. We review
              current category mix, estimated counts, and condition profile so you can determine fit before purchasing.
            </p>
            <p>
              Loads may contain customer returns, scratch-and-dent inventory, or mixed-grade combinations. Cosmetic grade
              varies by unit. This is normal in wholesale liquidation-oriented supply and should be planned into your resale model.
            </p>
            <p>
              When terms are confirmed, we coordinate release and pickup sequence. If your carrier needs scheduling,
              dock, or paperwork details, we provide those in the handoff process.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why buyers choose the NJ route</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Regional freight efficiency</h3>
              <p>Efficient East Coast shipping lanes with competitive rates through our freight broker network.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Load-level transparency</h3>
              <p>Category and condition details are discussed before terms are finalized.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>As-is wholesale structure</h3>
              <p>Purchase terms are clear and confirmed before release, with no consumer retail framing.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Dealer-only workflow</h3>
              <p>Built for repeat wholesale buyers with planned restock cycles and logistics discipline.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>How purchase and shipping works</h2>
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
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn btn--outline">Send Buyer Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Explore other load options</h2>
          <div className={styles.relatedLinks}>
            <Link to="/texas-wholesale-appliance-loads" className="btn btn--outline">Texas Hub</Link>
            <Link to="/customer-returns-appliances" className="btn btn--outline">Customer Returns</Link>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">Washer &amp; Dryer Loads</Link>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">Liquidation Loads</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Request New Jersey load availability</h2>
              <p>Share category and volume requirements and we will return current options by hub.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn btn--primary btn--lg">Send an Inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
