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
        description="Wholesale scratch-and-dent appliance loads for resellers. Fully functional units with cosmetic damage only. High-margin inventory available from Texas and New Jersey distribution hubs."
        canonical="/scratch-and-dent-appliances"
        og={{ title: 'Scratch-and-Dent Appliances Wholesale', description: 'Fully functional scratch-and-dent appliance loads for resellers. Maximum margin inventory.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Scratch-and-Dent Appliances Wholesale' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Scratch-and-Dent Appliances', path: '/scratch-and-dent-appliances' }]} />
          <span className="eyebrow">Wholesale scratch-and-dent</span>
          <h1>Scratch-and-Dent Appliances — Wholesale by the Load</h1>
          <p className={styles.lead}>
            Scratch-and-dent appliances offer resellers a repeatable margin opportunity: fully functional units
            at a significant discount from retail because of cosmetic imperfections that consumers may notice but many buyers do not care about.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">The scratch-and-dent opportunity</span>
            <h2>What scratch-and-dent appliances are and why resellers buy them</h2>
            <p>
              Scratch-and-dent appliances are units that left the factory or warehouse with visible cosmetic damage —
              a dent in the door panel, a scratch along the side, a scuff on the top surface. The damage happened in
              manufacturing, transit, or warehouse handling. The internal components — the compressor, the motor,
              the electronics — are untouched. The appliance works exactly as it was designed to.
            </p>
            <p>
              Retailers typically can not sell cosmetically imperfect units at full price. Instead, they discount them
              heavily or route them through liquidation channels. That discount is what creates the margin for resellers.
              A refrigerator with a dent on the left side panel that retails for $1,200 new might sell wholesale at a
              fraction of that — and a buyer who installs it against a wall will never see the dent anyway.
            </p>
            <p>
              We sell scratch-and-dent appliance loads from our Texas and New Jersey distribution hubs. All units are
              verified functional before going into a load. The cosmetic damage is described accurately in the load
              description and visible in the video walkthrough we provide before purchase.
            </p>
            <p>
              Loads are sold by the load, not by the unit. Pricing, load sizes, and available categories vary — call
              or text to discuss what is currently in stock.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What makes our scratch-and-dent loads different</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Verified to operate</h3>
              <p>Cosmetic damage only — mechanical and electrical function is confirmed on every unit before it goes in a load.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Visible damage described accurately</h3>
              <p>We describe the nature and location of cosmetic damage honestly. No surprises when the load arrives.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Video walkthrough included</h3>
              <p>You see the actual units and their actual cosmetic condition on video before you decide to buy.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>High-margin inventory</h3>
              <p>Significant gap between wholesale cost and resale value — particularly for buyers in used appliance and discount retail markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Scratch-and-dent categories we carry</h2>
              <ul className={styles.checkList}>
                {['Refrigerators & Freezers (all configurations)',
                  'Washers & Dryers',
                  'Ranges & Ovens',
                  'Dishwashers',
                  'Microwaves'].map(item => (
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
              <h2>Who buys scratch-and-dent wholesale loads</h2>
              <p>Our buyers come from a range of resale channels where cosmetic condition is a secondary concern:</p>
              <ul className={styles.checkList}>
                {['Used appliance dealers and retailers',
                  'Discount and outlet appliance stores',
                  'Rental property owners buying in volume',
                  'Flea market and liquidation sellers',
                  'Online marketplace resellers'].map(item => (
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
              <h2>Ready to source scratch-and-dent wholesale?</h2>
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
