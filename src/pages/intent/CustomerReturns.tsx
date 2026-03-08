import { Link } from 'react-router-dom'
import { site } from '../../content/siteContent'
import PageSeo from '../../components/PageSeo'
import Breadcrumb from '../../components/Breadcrumb'
import styles from './IntentPage.module.css'

export default function CustomerReturns() {
  return (
    <>
      <PageSeo
        title="Customer Return Appliances Wholesale | E-Appliance Recycling Corp"
        description="Buy customer return appliances by the load. 100% functional units with cosmetic imperfections only. Wholesale pricing for resellers from Texas and New Jersey distribution hubs."
        canonical="/customer-returns-appliances"
        og={{ title: 'Customer Return Appliances Wholesale', description: '100% functional customer return appliances. Wholesale loads for resellers.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Customer Return Appliances Wholesale' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Customer Returns Appliances', path: '/customer-returns-appliances' }]} />
          <span className="eyebrow">Wholesale customer returns</span>
          <h1>Customer Return Appliances — Wholesale Loads</h1>
          <p className={styles.lead}>
            Customer return appliances represent one of the most consistent sources of functional, resalable inventory
            in the appliance market. We sell them by the load, exclusively to wholesale buyers.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">What customer returns are</span>
            <h2>Why customer return appliances are valuable to resellers</h2>
            <p>
              Customer return appliances are units that were purchased by consumers and returned — typically within the
              retailer return window — for reasons that have nothing to do with whether the appliance works. A consumer
              might return a refrigerator because it was too large for their kitchen, or a washer because the color
              did not match their laundry room. The unit works perfectly. It is just back in the supply chain.
            </p>
            <p>
              Some customer returns have no visible damage at all. Others have minor cosmetic issues from transit
              or handling — a small dent on the side panel, a scuff on the door edge. In every case, we verify the
              appliance operates correctly before it goes into a load. If it does not work, it does not go in.
            </p>
            <p>
              The margin opportunity for resellers is significant. Consumer return appliances retail at a fraction
              of their original price — the cosmetic factor, the "open box" status, and the return history all
              suppress retail price. But the performance is identical to a new unit. That gap is where resellers
              who know the market make money.
            </p>
            <p>
              We sell customer return loads from our Texas and New Jersey distribution hubs. Loads vary by category —
              refrigerators, washers and dryers, ranges, dishwashers, and more — depending on what has come in recently.
              Call or text to ask about current availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we guarantee on every customer return load</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>100% functional</h3>
              <p>Every unit in the load operates correctly. We verify before the load ships. No exceptions.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Honest condition descriptions</h3>
              <p>Cosmetic issues are described accurately — no vague language, no surprises when the load arrives.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Video before you buy</h3>
              <p>We record a walkthrough of the load and send it before you make any decision. You see what you are buying.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Wholesale loads only</h3>
              <p>We sell by the load to wholesale buyers. Load sizes and pricing are designed for resellers, not consumers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Customer return categories we carry</h2>
              <ul className={styles.checkList}>
                {['Refrigerators & Freezers',
                  'Washers & Dryers',
                  'Ranges & Ovens',
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
              <h2>Distribution hubs</h2>
              <p>Customer return loads are available from both our Texas and New Jersey distribution hubs.</p>
              <ul className={styles.checkList}>
                {['Texas hub — serving the South and Southwest',
                  'New Jersey hub — serving the Northeast and East Coast',
                  'Buyer pickup at hub, or coordinate freight'].map(item => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/manifests" className="btn btn--outline">View Load Manifests</Link>
                <Link to="/contact" className="btn btn--ghost">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Related load types</h2>
          <div className={styles.relatedLinks}>
            <Link to="/scratch-and-dent-appliances" className="btn btn--outline">Scratch &amp; Dent Loads</Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">Liquidation Loads</Link>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">Refrigerator Loads</Link>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">Washer &amp; Dryer Loads</Link>
            <Link to="/texas-wholesale-appliance-loads" className="btn btn--outline">Texas Hub</Link>
            <Link to="/new-jersey-wholesale-appliance-loads" className="btn btn--outline">New Jersey Hub</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Looking for customer return appliance loads?</h2>
              <p>Call or text to find out what is available. We will send a video before any commitment.</p>
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
