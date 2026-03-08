import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function WholesaleResellers() {
  return (
    <>
      <PageSeo
        title="Wholesale Appliance Loads for Resellers | Buy by the Load"
        description="Wholesale appliance loads designed for resellers. Customer returns and scratch-and-dent inventory, 100% functional, video-verified before purchase. Texas and New Jersey distribution hubs."
        canonical="/wholesale-appliance-loads-for-resellers"
        og={{ title: 'Wholesale Appliance Loads for Resellers', description: 'Video-verified wholesale appliance loads. Customer returns and scratch-and-dent, 100% functional.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Wholesale Appliance Loads for Resellers' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Wholesale Appliance Loads for Resellers', path: '/wholesale-appliance-loads-for-resellers' }]} />
          <span className="eyebrow">Built for wholesale buyers</span>
          <h1>Wholesale Appliance Loads for Resellers</h1>
          <p className={styles.lead}>
            We sell wholesale appliance loads exclusively to resellers and bulk buyers. Customer returns and
            scratch-and-dent inventory, 100% functional, video-verified before purchase. Texas and New Jersey
            distribution hubs. 15+ years in the business.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">The reseller opportunity</span>
            <h2>How wholesale appliance loads work for resellers</h2>
            <p>
              The appliance resale market is built on one fundamental dynamic: the gap between what a retailer
              or manufacturer needs to receive for a return or imperfect unit and what an end consumer will
              pay for a fully functional appliance with cosmetic damage. That gap — and it is often substantial —
              is where resellers make their margins.
            </p>
            <p>
              We are the bridge between that supply and wholesale buyers who know how to move it. We source
              customer returns and scratch-and-dent appliances from retail and manufacturer channels, verify that
              every unit operates correctly, and sell the inventory by the load to resellers who purchase in volume.
            </p>
            <p>
              Resellers who work with us typically operate in one or more of the following channels: used appliance
              retail stores, discount and outlet stores, online marketplace platforms, flea markets and liquidation
              sales, and rental property supply. The common thread is volume purchasing and the ability to move
              inventory to buyers who accept cosmetic imperfections in exchange for a lower price.
            </p>
            <p>
              We have been doing this since the early 2000s. The model works because the inventory is real —
              the units work, the load descriptions are accurate, and the video walkthroughs show you exactly
              what you are buying before you commit. Repeat buyers are the core of our business, and the reason
              they repeat is that what shows up matches what was described.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What resellers get when they work with us</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>100% functional inventory</h3>
              <p>Every appliance in every load is verified to operate before sale. No dead units mixed in. Cosmetic issues only.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Video before every purchase</h3>
              <p>We walk every load on video before you decide anything. You see actual units, actual damage, actual count.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Accurate load descriptions</h3>
              <p>Category, quantity, condition range — all described honestly. The load matches the description, always.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Two distribution hubs</h3>
              <p>Texas and New Jersey locations serve buyers across the country with practical pickup options.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Load-based wholesale pricing</h3>
              <p>Buy by the load at wholesale pricing. No unit-by-unit retail negotiation. Built for volume buyers.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>15+ years of experience</h3>
              <p>We have been in the wholesale appliance business since the early 2000s. Our buyers keep coming back.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Load categories for resellers</h2>
              <p>We carry all major appliance categories depending on current incoming inventory:</p>
              <ul className={styles.checkList}>
                {['Refrigerators & Freezers (all configurations)',
                  'Washers & Dryers (pairs and singles)',
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
              <h2>The buying process</h2>
              <ul className={styles.checkList}>
                {['Call or text to tell us what categories you need',
                  'We match you to available loads from TX or NJ',
                  'We send a video walkthrough — you see the actual units',
                  'Agree on the load and price',
                  'Coordinate pickup from our hub — take the inventory and move it'].map(item => (
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
              <h2>Ready to start sourcing wholesale loads?</h2>
              <p>Call or text — we will match you with available inventory and send a video before any commitment.</p>
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
