import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function ApplianceLiquidation() {
  return (
    <>
      <PageSeo
        title="Appliance Liquidation Loads | Wholesale Sourcing | E-Appliance Recycling Corp"
        description="Appliance liquidation loads for wholesale buyers. Mixed categories of customer returns and scratch-and-dent units available by the load from Texas and New Jersey hubs."
        canonical="/appliance-liquidation-loads"
        og={{ title: 'Appliance Liquidation Loads | Wholesale Sourcing', description: 'Appliance liquidation loads for wholesale buyers. Texas and New Jersey distribution.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Appliance Liquidation Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Appliance Liquidation Loads', path: '/appliance-liquidation-loads' }]} />
          <span className="eyebrow">Wholesale liquidation sourcing</span>
          <h1>Appliance Liquidation Loads</h1>
          <p className={styles.lead}>
            Appliance liquidation loads give wholesale buyers access to large quantities of functional inventory
            at below-retail pricing. We source customer returns and scratch-and-dent appliances and sell them by
            the load from our Texas and New Jersey distribution hubs.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">How appliance liquidation works</span>
            <h2>Sourcing and selling wholesale appliance liquidation loads</h2>
            <p>
              Appliance liquidation is the process of moving large quantities of appliances out of retail or
              manufacturer supply chains at reduced prices — typically because the units have cosmetic damage,
              return status, or are excess inventory that retailers need to clear. We specialize in two
              categories of liquidation inventory: customer returns and scratch-and-dent units.
            </p>
            <p>
              Customer returns are appliances that consumers purchased and returned — typically for reasons
              unrelated to performance, like size mismatch or aesthetic preference. Scratch-and-dent units
              left the factory or warehouse with visible cosmetic imperfections. In both cases, the units work.
              We verify that before they go into any load.
            </p>
            <p>
              Our loads are sold wholesale — meaning to buyers who purchase by the load and resell to end
              consumers through their own channels. We do not sell to consumers directly. If you are a
              reseller looking for a reliable, recurring source of functional appliance inventory at
              liquidation pricing, call or text to discuss what we currently have available.
            </p>
            <p>
              Loads are available from our Texas distribution hub (serving the South and Southwest) and our
              New Jersey hub (serving the East Coast and Northeast). Load sizes and categories vary based on
              incoming inventory — contact us for current availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What sets our liquidation loads apart</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Functional-only policy</h3>
              <p>Every unit in every load operates correctly. We do not liquidate broken appliances.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Video before purchase</h3>
              <p>We walk every load on video and send it before you make any commitment. What you see is what you get.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Two distribution points</h3>
              <p>Texas and New Jersey hubs give buyers on both coasts a practical pickup option.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Honest load descriptions</h3>
              <p>We describe the condition, quantity, and category mix of every load accurately. No inflated unit counts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Liquidation inventory categories</h2>
              <ul className={styles.checkList}>
                {['Refrigerators & Freezers',
                  'Washers & Dryers (pairs and singles)',
                  'Ranges & Ovens',
                  'Dishwashers',
                  'Microwaves',
                  'Mixed loads across multiple categories'].map(item => (
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
              <h2>Getting started</h2>
              <ul className={styles.checkList}>
                {['Call or text with your category preference and load size needs',
                  'We match you with available liquidation inventory',
                  'Video walkthrough sent before any purchase decision',
                  'Confirm load, arrange pickup from TX or NJ hub'].map(item => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <h2>Looking for appliance liquidation loads?</h2>
              <p>Call or text — we will tell you what is available and send a video before you commit to anything.</p>
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
