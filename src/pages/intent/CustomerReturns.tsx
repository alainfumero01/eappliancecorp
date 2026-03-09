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
        description="Dealer-only customer return appliance loads sold as-is. Learn expected condition ranges and buying workflow."
        canonical="/customer-returns-appliances"
        og={{ title: 'Customer Return Appliances Wholesale', description: 'As-is wholesale customer return appliance loads for qualified resellers.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Customer Return Appliances Wholesale' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Customer Returns Appliances', path: '/customer-returns-appliances' }]} />
          <span className="eyebrow">Wholesale customer returns</span>
          <h1>Customer Return Appliances - Wholesale Loads</h1>
          <p className={styles.lead}>
            Customer return inventory is a core supply source for resellers. We sell these loads to qualified buyers
            under as-is wholesale terms from Texas and New Jersey.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.contentBlock}>
            <span className="eyebrow">What customer returns means</span>
            <h2>How these loads differ from other wholesale inventory</h2>
            <p>
              Customer returns are units that moved through retail and came back during return windows. Return reasons
              often include size mismatch, finish preference, or delivery handling. That does not guarantee perfect
              appearance, and it does not mean every unit is equivalent in grade.
            </p>
            <p>
              For wholesale buyers, this category can provide consistent volume with practical resale potential. The key
              is understanding that condition varies across units and must be evaluated at load level.
            </p>
            <p>
              We review current load makeup, category mix, and available media before confirmation. Buyers then decide
              whether the load profile matches their channel and turn strategy.
            </p>
            <p>{site.legal.asIsNotice}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Typical condition expectations</h2>
          <div className={styles.featureGrid}>
            {site.legal.conditionExpectations.map((item) => (
              <div key={item} className={styles.featureCard}>
                <h3>Buyer note</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitGrid}>
            <div>
              <h2>Who this is for</h2>
              <ul className={styles.checkList}>
                {site.legal.buyerQualification.map((item) => (
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
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/manifests" className="btn btn--outline">View Load Manifests</Link>
                <Link to="/contact" className="btn btn--ghost">Contact Sales</Link>
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
              <h2>Request customer return load options</h2>
              <p>Send us your requirements and we will return active load choices by hub.</p>
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
