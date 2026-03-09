import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function ScratchAndDent() {
  return (
    <>
      <PageSeo
        title="Scratch-and-Dent Appliances Wholesale | E-Appliance Recycling Corp"
        description="Wholesale scratch-and-dent appliance loads with practical condition notes and as-is dealer terms."
        canonical="/scratch-and-dent-appliances"
        og={{ title: 'Scratch-and-Dent Appliances Wholesale', description: 'Dealer-only scratch-and-dent appliance loads sold by the load under as-is terms.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Scratch-and-Dent Appliances Wholesale' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Scratch-and-Dent Appliances', path: '/scratch-and-dent-appliances' }]} />
          <span className="eyebrow">Wholesale scratch-and-dent</span>
          <h1>Scratch-and-Dent Appliances - Wholesale by the Load</h1>
          <p className={styles.lead}>
            This category is for buyers who understand cosmetic variability and buy based on load economics, not
            showroom presentation.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Category definition</span>
            <h2>What to expect in scratch-and-dent loads</h2>
            <p>
              Scratch-and-dent inventory includes units with visible cosmetic wear from handling, warehouse movement,
              or transport events. Panel dents, finish scratches, and edge scuffs are common examples.
            </p>
            <p>
              Buyers usually choose this category for discount channels, outlet retail, and high-turn appliance resale.
              The purchase decision depends on your tolerance for cosmetic grade spread and your downstream customer profile.
            </p>
            <p>
              We review the active load profile before release and confirm wholesale terms before pickup.
              This category is sold as-is and is not structured as consumer-grade retail inventory.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What makes this category work for resellers</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Lower acquisition cost</h3>
              <p>Pricing reflects cosmetic grade variability and wholesale lot structure.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Consistent turnover channels</h3>
              <p>Outlet and value-focused buyers often prioritize function and price over appearance.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Flexible category mix</h3>
              <p>Loads can include multiple appliance categories depending on current inbound supply.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Two-hub access</h3>
              <p>Pickup and freight coordination available through Texas and New Jersey hubs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
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
            </div>
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Related load types</h2>
          <div className={styles.relatedLinks}>
            <Link to="/customer-returns-appliances" className="btn btn--outline">Customer Returns</Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">Liquidation Loads</Link>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">Washer &amp; Dryer Loads</Link>
            <Link to="/manifests" className="btn btn--outline">View Manifests</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Need active scratch-and-dent loads?</h2>
              <p>Send category and volume requirements and we will return current options.</p>
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
