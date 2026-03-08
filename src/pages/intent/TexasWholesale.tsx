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
        description="Dealer-only appliance loads available from our Texas hub. Review pickup and freight expectations for regional buyers."
        canonical="/texas-wholesale-appliance-loads"
        og={{ title: 'Texas Wholesale Appliance Loads', description: 'As-is wholesale appliance loads from our Texas distribution hub.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Texas Wholesale Appliance Loads' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Texas Wholesale Appliance Loads', path: '/texas-wholesale-appliance-loads' }]} />
          <span className="eyebrow">Texas distribution hub</span>
          <h1>Texas Wholesale Appliance Loads</h1>
          <p className={styles.lead}>
            Our Texas hub supports dealers buying load quantities for the South and Southwest. Inventory is wholesale,
            as-is, and sold to qualified buyers only.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">Regional pickup and freight</span>
            <h2>How Texas load buying works</h2>
            <p>
              Buyers use our Texas location when they need faster regional pickup, shorter freight lanes, or consistent
              restock support. We discuss current category mix, approximate count, and condition profile before you commit.
            </p>
            <p>
              Inventory may include customer returns, scratch-and-dent, or mixed-grade loads. Cosmetic condition varies.
              We treat each load as a wholesale lot, not a showroom lineup.
            </p>
            <p>
              Final release is based on agreed terms, active inventory at confirmation, and pickup timing. If your team
              or carrier needs dock details, we provide that during scheduling.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What Texas buyers usually ask first</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Current category mix</h3>
              <p>Which categories are active this week and whether loads are mixed or category-focused.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Condition profile</h3>
              <p>Expected grading spread, cosmetic variability, and any known concentration by category.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Pickup window</h3>
              <p>Available release windows and whether your team or carrier can meet the schedule.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Freight readiness</h3>
              <p>Dock process, paperwork sequence, and what your carrier needs before dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Typical condition expectations</h2>
              <ul className={styles.checkList}>
                {site.legal.conditionExpectations.map((item) => (
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
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/manifests" className="btn btn--outline">
                  View Current Manifests
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Related wholesale pages</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Compare hub options and load types before placing your next order.</p>
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
              <h2>Request Texas load availability</h2>
              <p>Send your categories, target volume, and timeline. We will confirm what is active now.</p>
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
