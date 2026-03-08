import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function WholesaleRefrigerators() {
  return (
    <>
      <PageSeo
        title="Wholesale Refrigerator Loads | French Door, Top-Freezer & More"
        description="Wholesale refrigerator loads including French door, side-by-side, and top-freezer models. Customer returns and scratch-and-dent, 100% functional. Buy by the load from TX and NJ hubs."
        canonical="/wholesale-refrigerator-loads"
        og={{ title: 'Wholesale Refrigerator Loads', description: 'French door, side-by-side, and top-freezer refrigerators. 100% functional customer returns and scratch-and-dent.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Wholesale Refrigerator Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Wholesale Refrigerator Loads', path: '/wholesale-refrigerator-loads' }]} />
          <span className="eyebrow">Wholesale refrigerator inventory</span>
          <h1>Wholesale Refrigerator Loads — French Door, Top-Freezer &amp; More</h1>
          <p className={styles.lead}>
            Wholesale refrigerator loads from customer returns and scratch-and-dent programs. Every unit is verified
            to operate correctly. Cosmetic imperfections only. Available from our Texas and New Jersey distribution hubs.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Refrigerator wholesale sourcing</span>
            <h2>Buying wholesale refrigerator loads for resale</h2>
            <p>
              Refrigerators are one of the most consistently available appliance categories in the customer return
              and scratch-and-dent market. Consumers return refrigerators at a higher rate than almost any other
              major appliance — often because of size issues, color mismatches, or delivery damage that affects
              appearance but not function.
            </p>
            <p>
              The refrigerators in our wholesale loads come from two primary sources. Customer returns are units
              that went through the retail purchase cycle and came back — typically within 30 days, typically
              for cosmetic or size reasons. Scratch-and-dent units are refrigerators that left the factory or
              warehouse with visible surface damage: a dent on a door panel, a scratch on a side wall, a scuff
              on the top surface.
            </p>
            <p>
              In both cases, the refrigerator works. The compressor runs, the temperature holds, the ice maker
              functions, the water dispenser operates. We test units before they go into loads and guarantee
              that every refrigerator in the load is fully functional at the time of sale.
            </p>
            <p>
              Loads mix refrigerator configurations based on what is available. A typical load might include
              French door models, top-freezer units, and side-by-side configurations. We describe the mix
              in advance and walk the load on video before you make any purchase decision.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Refrigerator configurations in our loads</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>French door</h3>
              <p>High-demand configuration from major brands. Customer returns are common due to size and delivery issues.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Top-freezer</h3>
              <p>The most widely resold configuration. Strong demand from entry-level buyers and rental market.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Side-by-side</h3>
              <p>Popular in customer return loads. Often returned for measurement fit issues — unit works perfectly.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Bottom-freezer</h3>
              <p>Available in select loads. Mix varies by incoming inventory from our Texas and New Jersey hubs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>What comes with every refrigerator load</h2>
              <ul className={styles.checkList}>
                {['Every unit verified operational before load ships',
                  'Accurate count and configuration description',
                  'Condition notes on cosmetic damage per unit',
                  'Video walkthrough of the full load',
                  'No broken or non-functional units — ever'].map(item => (
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
              <h2>Available from both hubs</h2>
              <p>Refrigerator loads are available from our Texas and New Jersey facilities. Call to ask what configurations are currently in stock at each location.</p>
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
              <h2>Looking for wholesale refrigerator loads?</h2>
              <p>Call or text — we will describe current availability and send a walkthrough video.</p>
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
