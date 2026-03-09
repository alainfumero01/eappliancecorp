import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import styles from './IntentPage.module.css'

export default function WholesaleRefrigerators() {
  return (
    <>
      <PageSeo
        title="Wholesale Refrigerator Loads | Dealer-Only Inventory"
        description="Wholesale refrigerator loads with mixed configurations and condition ranges. Sold as-is to qualified appliance buyers."
        canonical="/wholesale-refrigerator-loads"
        og={{ title: 'Wholesale Refrigerator Loads', description: 'Dealer-only refrigerator loads with shipping coordinated through our freight broker network.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Wholesale Refrigerator Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Wholesale refrigerator inventory</span>
          <h1>Wholesale Refrigerator Loads</h1>
          <p className={styles.lead}>
            Refrigerator loads are one of the most active appliance categories. Buyers use these loads to restock
            outlet and dealer channels with mixed configurations at wholesale pricing.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Category-specific buying notes</span>
            <h2>What to evaluate on refrigerator loads</h2>
            <p>
              Refrigerator lots can include French door, side-by-side, top-freezer, and bottom-freezer models.
              The critical review points are configuration mix, cosmetic grade concentration, and turn-fit in your market.
            </p>
            <p>
              This category often carries visible panel wear from handling or returns. Buyers should assume mixed
              cosmetic grading unless a lot is explicitly filtered. Inventory is sold as-is under wholesale terms.
            </p>
            <p>
              If your channel requires a certain configuration ratio, request that upfront so we can confirm whether
              active loads align before you move forward.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Configuration mix you may see</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>French door</h3>
              <p>High-demand resale category with variable cosmetic grade by unit.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Top-freezer</h3>
              <p>Common in value channels and rental-focused resale programs.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Side-by-side</h3>
              <p>Frequently present in mixed loads with broad condition spread.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Bottom-freezer</h3>
              <p>Appears in select lots depending on current inbound inventory.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Who this is for</h2>
              <ul className={styles.checkList}>
                {site.legal.buyerQualification.map((item) => (
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
              <h2>Before you inquire, have this ready</h2>
              <ul className={styles.checkList}>
                {site.legal.inquiryChecklist.map((item) => (
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Other wholesale load types</h2>
          <div className={styles.relatedLinks}>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">Washer &amp; Dryer Loads</Link>
            <Link to="/customer-returns-appliances" className="btn btn--outline">Customer Returns</Link>
            <Link to="/scratch-and-dent-appliances" className="btn btn--outline">Scratch &amp; Dent</Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">Liquidation Loads</Link>
            <Link to="/manifests" className="btn btn--outline">View Current Manifests</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Need active refrigerator loads?</h2>
              <p>Send your preferred configuration mix and target volume. We will return current options.</p>
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
