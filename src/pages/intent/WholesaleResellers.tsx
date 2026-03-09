import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import styles from './IntentPage.module.css'

export default function WholesaleResellers() {
  return (
    <>
      <PageSeo
        title="Wholesale Appliance Loads for Resellers | Buy by the Load"
        description="Operational guide for reseller-focused appliance loads: buyer fit, condition profile, and as-is wholesale workflow."
        canonical="/wholesale-appliance-loads-for-resellers"
        og={{ title: 'Wholesale Appliance Loads for Resellers', description: 'Dealer-only appliance load sourcing for resellers under as-is terms.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Wholesale Appliance Loads for Resellers' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Built for wholesale buyers</span>
          <h1>Wholesale Appliance Loads for Resellers</h1>
          <p className={styles.lead}>
            This program is designed for buyers who run appliance resale channels and purchase in load quantities.
            Terms are wholesale, inventory is as-is, and buyer fit matters.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Operational fit</span>
            <h2>How to decide if this sourcing model matches your business</h2>
            <p>
              Load buying works when your business can absorb mixed grading, move inventory in batches, and process
              inbound units quickly. If your team expects showroom-level uniformity, this model is usually not a fit.
            </p>
            <p>
              Buyers who perform well in this category typically maintain clear inbound standards, disciplined pricing,
              and reliable outbound channels. They evaluate lots by turn potential, not by idealized unit-level perfection.
            </p>
            <p>
              We support that workflow with practical load communication, direct scheduling, and two hub options.
              Your side handles resale strategy and downstream execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What reseller teams usually need from a supplier</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Predictable communication</h3>
              <p>Clear load-level details and realistic timing before committing capital.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Practical condition framing</h3>
              <p>No overpromising. Buyers get a usable condition profile for decision-making.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Hub flexibility</h3>
              <p>Texas and New Jersey pickup options to support regional planning.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Wholesale terms discipline</h3>
              <p>As-is structure and dealer-only process, aligned before release.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Volume alignment</h3>
              <p>Built for repeat buyers, not occasional single-unit demand.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Category breadth</h3>
              <p>Access to multiple appliance categories depending on active inbound supply.</p>
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
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Explore load types by category</h2>
          <div className={styles.relatedLinks}>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">Washer &amp; Dryer Loads</Link>
            <Link to="/customer-returns-appliances" className="btn btn--outline">Customer Returns</Link>
            <Link to="/scratch-and-dent-appliances" className="btn btn--outline">Scratch &amp; Dent</Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">Liquidation Loads</Link>
            <Link to="/texas-wholesale-appliance-loads" className="btn btn--outline">Texas Hub</Link>
            <Link to="/new-jersey-wholesale-appliance-loads" className="btn btn--outline">New Jersey Hub</Link>
            <Link to="/about" className="btn btn--outline">About the Company</Link>
            <Link to="/manifests" className="btn btn--outline">View Load Manifests</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to evaluate current loads?</h2>
              <p>Send your business profile and purchase target, and we will return active options.</p>
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
