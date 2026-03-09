import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import styles from './IntentPage.module.css'

export default function ApplianceLiquidation() {
  return (
    <>
      <PageSeo
        title="Appliance Liquidation Loads | Wholesale Sourcing | E-Appliance Recycling Corp"
        description="Mixed appliance liquidation loads for qualified buyers. Understand grading, mix variability, and as-is wholesale terms."
        canonical="/appliance-liquidation-loads"
        og={{ title: 'Appliance Liquidation Loads | Wholesale Sourcing', description: 'Dealer-only liquidation loads from customer returns and scratch-and-dent inventory.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Appliance Liquidation Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Wholesale liquidation sourcing</span>
          <h1>Appliance Liquidation Loads</h1>
          <p className={styles.lead}>
            Liquidation loads are mixed wholesale lots for qualified buyers who understand grading spread and as-is
            terms. We supply current options from Texas and New Jersey.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Mixed-load decision criteria</span>
            <h2>How to evaluate liquidation loads before buying</h2>
            <p>
              Liquidation loads combine units from return streams, scratch-and-dent inventory, and mixed inbound lots.
              This gives buyers access to volume, but it also means consistency varies by shipment.
            </p>
            <p>
              The correct buying approach is operational: review category mix, approximate counts, condition profile,
              and shipping timeline. Decide based on your channel economics, not on assumptions of showroom-grade uniformity.
            </p>
            <p>
              We confirm active load details before release and align terms with qualified wholesale buyers. Inventory
              is sold as-is with practical pre-purchase review.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What good liquidation buyers verify first</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Category concentration</h3>
              <p>Whether the lot is mixed or weighted toward one category.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Condition spread</h3>
              <p>How much cosmetic grade variability appears in the active load.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Turn-fit for your channel</h3>
              <p>Whether the lot profile matches your outlet, dealer, or liquidation lane.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Release logistics</h3>
              <p>Shipping timeline and document sequence before dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Typical condition expectations</h2>
              <ul className={styles.checkList}>
                {site.legal.conditionExpectations.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Explore related load types</h2>
          <div className={styles.relatedLinks}>
            <Link to="/customer-returns-appliances" className="btn btn--outline">Customer Returns</Link>
            <Link to="/scratch-and-dent-appliances" className="btn btn--outline">Scratch &amp; Dent</Link>
            <Link to="/texas-wholesale-appliance-loads" className="btn btn--outline">Texas Hub</Link>
            <Link to="/new-jersey-wholesale-appliance-loads" className="btn btn--outline">New Jersey Hub</Link>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/manifests" className="btn btn--outline">View Manifests</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Request liquidation load options</h2>
              <p>Send category targets and volume. We will return active loads and current terms.</p>
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
