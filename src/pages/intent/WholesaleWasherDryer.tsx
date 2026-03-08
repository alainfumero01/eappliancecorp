import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function WholesaleWasherDryer() {
  return (
    <>
      <PageSeo
        title="Wholesale Washer and Dryer Loads | Pairs & Singles Available"
        description="Buy wholesale washer and dryer loads. Customer returns and scratch-and-dent units, fully functional. Pairs and singles available from Texas and New Jersey distribution hubs."
        canonical="/wholesale-washer-dryer-loads"
        og={{ title: 'Wholesale Washer and Dryer Loads', description: 'Customer return and scratch-and-dent washers and dryers. Pairs and singles available.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Wholesale Washer and Dryer Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Wholesale Washer and Dryer Loads', path: '/wholesale-washer-dryer-loads' }]} />
          <span className="eyebrow">Wholesale laundry appliances</span>
          <h1>Wholesale Washer and Dryer Loads — Pairs &amp; Singles</h1>
          <p className={styles.lead}>
            Wholesale washer and dryer loads from customer returns and scratch-and-dent programs. Every unit is
            verified functional. Pairs and singles available from our Texas and New Jersey distribution hubs.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Laundry appliance wholesale</span>
            <h2>Buying wholesale washer and dryer loads</h2>
            <p>
              Washers and dryers are among the highest-volume categories in the customer return and scratch-and-dent
              appliance market. Consumers return laundry appliances frequently — for size reasons (the unit did not fit
              the laundry closet), for color reasons (the consumer wanted a matching set), or for cosmetic reasons
              from delivery handling.
            </p>
            <p>
              We sell washer and dryer loads as pairs and as singles depending on what is available. Pairs are
              matching washer-dryer sets — both from the same brand and often the same model line — that came back
              as a unit. Singles are individual washers or dryers that came in separately. Both are priced and
              described accurately and both are verified to operate before going into a load.
            </p>
            <p>
              Configurations in our loads span front-load and top-load washers, gas and electric dryers, and
              compact and full-size units. The mix depends on what has come in from our current sourcing. Call
              or text to ask about current availability from our Texas or New Jersey hub.
            </p>
            <p>
              Before you commit to any load, we send a video walkthrough. You see the actual machines — the actual
              cosmetic condition, the actual quantity, whether the door seals look right, whether the panels are
              intact. That is how we operate. Nothing changes hands before you have seen the load.
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
              <p>Customer returns are common — often returned due to vibration, noise, or mold concerns, despite normal operation.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Top-load washers</h3>
              <p>High-demand resale category. Strong in both used appliance retail and rental property markets.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Electric dryers</h3>
              <p>Most common dryer configuration. Pairs well with both front-load and top-load washers.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Gas dryers</h3>
              <p>Available in select loads. Lower volume than electric but consistent demand from gas-connected homes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>What you get with every washer-dryer load</h2>
              <ul className={styles.checkList}>
                {['All units verified to operate before sale',
                  'Pairs and singles accurately identified',
                  'Cosmetic condition noted per unit',
                  'Video walkthrough before any commitment',
                  'Load description includes count, configuration, hub'].map(item => (
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
              <h2>Hub availability</h2>
              <p>Washer and dryer loads are available from both our Texas and New Jersey facilities. Load size and availability vary — contact us for current stock.</p>
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
              <h2>Looking for wholesale washer and dryer loads?</h2>
              <p>Call or text — we will describe what is available and send a video before any commitment.</p>
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
