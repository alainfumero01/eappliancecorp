import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function NewJerseyWholesale() {
  return (
    <>
      <PageSeo
        title="New Jersey Wholesale Appliance Loads | E-Appliance Recycling Corp"
        description="Wholesale appliance loads from our New Jersey distribution hub. Customer returns and scratch-and-dent units for East Coast resellers. Call to inquire about available inventory."
        canonical="/new-jersey-wholesale-appliance-loads"
        og={{ title: 'New Jersey Wholesale Appliance Loads', description: 'Customer returns and scratch-and-dent appliance loads from our New Jersey hub.', type: 'website' }}
        twitter={{ card: 'summary', title: 'New Jersey Wholesale Appliance Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'New Jersey Wholesale Appliance Loads', path: '/new-jersey-wholesale-appliance-loads' }]} />
          <span className="eyebrow">New Jersey distribution hub</span>
          <h1>New Jersey Wholesale Appliance Loads</h1>
          <p className={styles.lead}>
            Our New Jersey distribution hub serves East Coast resellers with wholesale appliance loads sourced
            from customer returns and scratch-and-dent programs. Every unit is verified functional before it goes into a load.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">East Coast wholesale sourcing</span>
            <h2>Wholesale appliance loads from our New Jersey hub</h2>
            <p>
              Resellers on the East Coast and in the Northeast have a direct wholesale source through our New Jersey hub.
              We stock customer returns and scratch-and-dent appliances in quantity — refrigerators, washers and dryers,
              ranges, dishwashers, and other major appliance categories depending on current incoming loads.
            </p>
            <p>
              All inventory from the New Jersey hub goes through the same verification process as our Texas facility.
              Units are confirmed to operate before they are added to a load. Cosmetic imperfections — the dents and
              finish issues that are the nature of scratch-and-dent and customer-return inventory — are accurately
              described and priced accordingly.
            </p>
            <p>
              Before you agree to any load, we send you a video. You see the actual units — actual condition, actual
              quantity, actual mix. You decide based on what you see, not based on a description alone. That is how
              we have kept the same buyers coming back for years.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why East Coast resellers choose our New Jersey hub</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>East Coast logistics</h3>
              <p>Proximity to major Northeast markets makes pickup and freight straightforward for regional buyers.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>100% functional guarantee</h3>
              <p>Every unit in every load operates correctly. Cosmetic issues only — no mechanical or electrical problems.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Video before commitment</h3>
              <p>We walk every load on video before you decide anything. You see exactly what you are buying.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Wholesale-only pricing</h3>
              <p>Load-based pricing built for resellers. No retail pricing, no individual unit sales.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Load categories from the NJ hub</h2>
              <p>Categories depend on current incoming inventory. Frequent load types include:</p>
              <ul className={styles.checkList}>
                {['Refrigerators & Freezers',
                  'Washers & Dryers (pairs and singles)',
                  'Ranges & Ovens (gas and electric)',
                  'Dishwashers',
                  'Microwaves and countertop appliances'].map(item => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>The buying process</h2>
              <ul className={styles.checkList}>
                {['Call or text to ask about current NJ hub inventory',
                  'We describe available loads by category and condition',
                  'We send a video walkthrough before any decision',
                  'Coordinate pickup from our New Jersey facility'].map(item => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/manifests" className="btn btn--outline">View Current Manifests</Link>
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
              <h2>Ready to source from our NJ hub?</h2>
              <p>Call or text — we will walk you through what is available and answer any logistics questions.</p>
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
