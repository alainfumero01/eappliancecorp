import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function TexasWholesale() {
  return (
    <>
      <PageSeo
        title="Texas Wholesale Appliance Loads | E-Appliance Recycling Corp"
        description="Wholesale appliance loads from our Texas distribution hub. Customer returns and scratch-and-dent inventory for resellers. Call to discuss current load availability and logistics."
        canonical="/texas-wholesale-appliance-loads"
        og={{ title: 'Texas Wholesale Appliance Loads', description: 'Customer returns and scratch-and-dent appliance loads from our Texas hub. 100% functional.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Texas Wholesale Appliance Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Texas Wholesale Appliance Loads', path: '/texas-wholesale-appliance-loads' }]} />
          <span className="eyebrow">Texas distribution hub</span>
          <h1>Texas Wholesale Appliance Loads</h1>
          <p className={styles.lead}>
            Our Texas hub stocks customer returns and scratch-and-dent appliances ready for wholesale buyers.
            Every unit is 100% functional, cosmetic damage only. Buy by the load and move volume that works for your resale business.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">What Texas buyers get</span>
            <h2>A direct source for wholesale appliance loads in Texas</h2>
            <p>
              Resellers operating in Texas, the Southwest, and across the South benefit from proximity to our Texas distribution hub.
              We stock a rotating mix of appliance categories — refrigerators, washers and dryers, ranges, dishwashers, and more —
              sourced from customer returns and manufacturer scratch-and-dent programs.
            </p>
            <p>
              Every load that leaves our Texas facility has been verified to operate. Cosmetic damage — dents, finish scratches,
              door dings — is expected and priced in. Mechanical and electrical performance is not a question. We test units before
              they go into a load, and we walk every load on video before you commit to buying it.
            </p>
            <p>
              The Texas hub makes local pickup straightforward for buyers in the region, and we can work with freight carriers
              for buyers who want loads shipped further. Call or text to discuss what is currently available and how the logistics work.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What to expect from a Texas load</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Verified-functional units</h3>
              <p>Every appliance in every load operates correctly before it leaves our facility. No broken units, ever.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Video walkthrough</h3>
              <p>We record a walkthrough of the load before you decide anything. You see the actual units, actual condition, actual count.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Accurate load descriptions</h3>
              <p>Category, quantity, condition range, and any notable issues are described honestly before purchase.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Load-based wholesale pricing</h3>
              <p>Buy the whole load at a single price. No per-unit retail pricing. Built for resellers who move volume.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Categories typically available from Texas</h2>
              <p>Inventory changes with each incoming load. Current categories from the Texas hub often include:</p>
              <ul className={styles.checkList}>
                {['Refrigerators & Freezers (French door, top-freezer, side-by-side)',
                  'Washers & Dryers (front-load and top-load)',
                  'Ranges & Ovens (gas and electric)',
                  'Dishwashers',
                  'Microwaves',
                  'Small appliances'].map(item => (
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
              <h2>How to buy a Texas load</h2>
              <p>The process is straightforward and designed for experienced wholesale buyers.</p>
              <ul className={styles.checkList}>
                {['Call or text to ask what is available from the Texas hub',
                  'We describe current loads — category, quantity, condition',
                  'We send you a video walkthrough of the load',
                  'Agree on the load and price, then coordinate pickup from our Texas facility'].map(item => (
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
          <h2>Related wholesale load types</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Explore other load categories available from our Texas and New Jersey hubs.</p>
          <div className={styles.relatedLinks}>
            <Link to="/new-jersey-wholesale-appliance-loads" className="btn btn--outline">New Jersey Hub</Link>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">Washer &amp; Dryer Loads</Link>
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
              <h2>Interested in a Texas load?</h2>
              <p>Call or text — we will tell you what is available and send a video before any commitment.</p>
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
