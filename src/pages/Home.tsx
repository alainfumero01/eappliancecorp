import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import { CANONICAL_DOMAIN } from '../seo/seoRoutes'
import styles from './Home.module.css'

// Set a real URL to activate the video section
const SHOWCASE_VIDEO = null // e.g. 'https://www.youtube.com/embed/YOUR_ID'

const guarantees = [
  {
    stat: 'Dealer',
    label: 'Wholesale buyers only',
    desc: 'We sell by the load to qualified resellers and bulk buyers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    stat: 'As-Is',
    label: 'Terms confirmed before release',
    desc: 'Inventory is sold as-is under wholesale terms agreed before pickup.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    stat: 'Video',
    label: 'Load visibility before buy',
    desc: 'You review current inventory details and walkthrough media when available.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    stat: 'TX/NJ',
    label: 'Two pickup hubs',
    desc: 'Pickup from Texas or New Jersey, or delivery at standard freight rates.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      <PageSeo
        title="Wholesale Appliance Loads for Resellers | E-Appliance Recycling Corp"
        description="Dealer-only wholesale appliance loads from customer returns and scratch-and-dent inventory. As-is terms. Texas and New Jersey hubs."
        canonical="/"
        og={{
          title: 'Wholesale Appliance Loads for Resellers | E-Appliance Recycling Corp',
          description:
            'Dealer-only appliance loads with as-is wholesale terms, condition notes, and pickup from Texas or New Jersey.',
          type: 'website',
          image: `${CANONICAL_DOMAIN}/images/logo.png`,
        }}
        twitter={{ card: 'summary_large_image', title: 'Wholesale Appliance Loads for Resellers' }}
      />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Dealer-Only Wholesale<br />
                Appliance Loads
              </h1>
              <p className={styles.heroSub}>
                We source customer returns and scratch-and-dent inventory for resellers who buy by the load.
                Terms are wholesale and as-is. Inventory mix, grade, and condition vary by load and are reviewed
                before purchase.
              </p>
              <div className={styles.heroCtas}>
                <Link to="/contact" className={`btn btn--primary btn--lg ${styles.heroCtaPrimary}`}>
                  Send an Inquiry
                </Link>
                <Link to="/manifests" className={`btn btn--lg ${styles.heroCtaGhost}`}>
                  View Inventory
                </Link>
              </div>
            </div>
            <div className={styles.heroSidebar}>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarStat}>{site.yearsInBusiness}+</p>
                <p className={styles.sidebarLabel}>Years in load wholesale</p>
              </div>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarStat}>{site.hubs.length}</p>
                <p className={styles.sidebarLabel}>Pickup hubs</p>
              </div>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarStat}>As-Is</p>
                <p className={styles.sidebarLabel}>Wholesale terms</p>
              </div>
              <div className={styles.sidebarNote}>{site.legal.asIsNotice}</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guarantees}>
        <div className="container">
          <div className={styles.guaranteeGrid}>
            {guarantees.map((g) => (
              <div key={g.label} className={styles.guaranteeCard}>
                <div className={styles.guaranteeIcon}>{g.icon}</div>
                <p className={styles.guaranteeStat}>{g.stat}</p>
                <p className={styles.guaranteeLabel}>{g.label}</p>
                <p className={styles.guaranteeDesc}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitRow}>
            <div className={styles.splitLeft}>
              <h2>Who this is for</h2>
              <p>
                This site is for appliance dealers, outlets, liquidation resellers, and other buyers who purchase in
                wholesale quantities. If your model depends on load buying, fast turns, and practical condition ranges,
                this is the right fit.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We do not run consumer retail. We do not price single units. We discuss available loads, confirm terms,
                and coordinate pickup or delivery at standard freight rates with qualified buyers.
              </p>
              <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn--outline">
                  How We Operate
                </Link>
                <Link to="/manifests" className="btn btn--ghost">
                  Review Manifests
                </Link>
              </div>
            </div>
            <div className={styles.splitRight}>
              {site.trustPoints.map((tp) => (
                <div key={tp.heading} className={styles.trustRow}>
                  <div className={styles.trustCheck} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.trustHeading}>{tp.heading}</p>
                    <p className={styles.trustBody}>{tp.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.catRow}>
            <div>
              <span className="eyebrow">Typical condition expectations</span>
              <h2>What a load means in practice</h2>
              <ul style={{ color: 'var(--color-text-muted)', marginTop: '0.875rem', paddingLeft: '1rem' }}>
                {site.legal.conditionExpectations.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/manifests" className="btn btn--outline">
                  View Current Manifests
                </Link>
                <Link to="/appliance-liquidation-loads" className="btn btn--ghost">
                  Read Liquidation Process
                </Link>
              </div>
            </div>
            <ul className={styles.catList}>
              {site.inventoryCategories.map((cat) => (
                <li key={cat} className={styles.catItem}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">How purchase and pickup works</span>
          <h2>From inquiry to release</h2>
          <div className={styles.processGrid}>
            {site.process.map((step) => (
              <div key={step.step} className={styles.processStep}>
                <span className={styles.stepNum}>{step.step}</span>
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {SHOWCASE_VIDEO && (
        <section className="section">
          <div className="container">
            <div className={styles.videoSection}>
              <div>
                <span className="eyebrow">Load review media</span>
                <h2>See inventory before release</h2>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                  Media is used to support condition review before payment and pickup confirmation.
                </p>
              </div>
              <MediaSlot
                src={SHOWCASE_VIDEO}
                type="video"
                alt="Sample load walkthrough video"
                aspectRatio="16/9"
                className={styles.showcaseVideo}
              />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <span className="eyebrow">Who this is not for</span>
          <h2>Buyer fit and inquiry checklist</h2>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div>
              <p style={{ fontWeight: 600 }}>Not a fit:</p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {site.legal.notFor.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontWeight: 600 }}>Before you inquire, have this ready:</p>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {site.legal.inquiryChecklist.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            <Link to="/wholesale-refrigerator-loads" className="btn btn--outline">
              Refrigerator Loads
            </Link>
            <Link to="/wholesale-washer-dryer-loads" className="btn btn--outline">
              Washer &amp; Dryer Loads
            </Link>
            <Link to="/customer-returns-appliances" className="btn btn--outline">
              Customer Returns
            </Link>
            <Link to="/scratch-and-dent-appliances" className="btn btn--outline">
              Scratch &amp; Dent
            </Link>
            <Link to="/appliance-liquidation-loads" className="btn btn--outline">
              Liquidation Loads
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to request current inventory?</h2>
              <p>Send your category and volume requirements. We will confirm current load options and terms.</p>
            </div>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
