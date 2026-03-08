import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import styles from './Home.module.css'

// ── Set a real URL to activate the video section ─────────────────────────────
const SHOWCASE_VIDEO = null  // e.g. 'https://www.youtube.com/embed/YOUR_ID'
// ─────────────────────────────────────────────────────────────────────────────

const guarantees = [
  {
    stat: '15+',
    label: 'Years supplying resellers',
    desc: 'We have been in this business since the early 2000s. Repeat buyers are the model — and they keep coming back.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    stat: '100%',
    label: 'Functional units, guaranteed',
    desc: 'Every appliance in every load is verified to operate before it goes out. Cosmetic imperfections only — no broken units.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    stat: 'Video',
    label: 'Walkthrough before you buy',
    desc: 'We record and send a walkthrough of every load before you decide anything. You see the actual units, actual condition, actual count.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    stat: 'TX · NJ',
    label: 'Two distribution hubs',
    desc: 'Hub locations in Texas and New Jersey to coordinate wholesale pickups for buyers across the country.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Wholesale Appliance Loads<br />
                for Resellers
              </h1>
              <p className={styles.heroSub}>
                We've been sourcing customer returns and scratch-and-dent appliances for resellers
                for {site.yearsInBusiness} years. Every unit is functional. Every load is walked on video
                before you commit. Hubs in {site.hubs[0]} and {site.hubs[1]}.
              </p>
              <div className={styles.heroCtas}>
                <a href={`tel:${site.contact.phone}`} className={`btn btn--primary btn--lg ${styles.heroCtaPrimary}`}>
                  Call to Discuss a Load
                </a>
                <a
                  href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`}
                  className={`btn btn--lg ${styles.heroCtaGhost}`}
                >
                  Text Us
                </a>
              </div>
            </div>
            <div className={styles.heroSidebar}>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarStat}>{site.yearsInBusiness}</p>
                <p className={styles.sidebarLabel}>Years in business</p>
              </div>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarStat}>{site.hubs.length}</p>
                <p className={styles.sidebarLabel}>Hub locations</p>
              </div>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarStat}>100%</p>
                <p className={styles.sidebarLabel}>Functional units</p>
              </div>
              <div className={styles.sidebarNote}>
                Wholesale buyers only — we don't sell to end consumers.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE CARDS ── */}
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

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.splitRow}>
            <div className={styles.splitLeft}>
              <h2>What keeps buyers coming back</h2>
              <p>
                Repeat business is the whole model. We've kept the same buyers for years because
                what you see in the video is exactly what shows up. The load description matches the load.
                The units work. There's no negotiating after the fact because there's nothing to negotiate — it was
                right the first time.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Customer returns and scratch-and-dent means the cosmetics aren't perfect. The performance is.
                That's the trade — and it's one that works for resellers who know how to move inventory.
              </p>
              <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn--outline">Our Story</Link>
                <Link to="/manifests" className="btn btn--ghost">How Loads Work</Link>
              </div>
            </div>
            <div className={styles.splitRight}>
              {site.trustPoints.map((tp) => (
                <div key={tp.heading} className={styles.trustRow}>
                  <div className={styles.trustCheck} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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

      {/* ── CATEGORIES ── */}
      <section className="section">
        <div className="container">
          <div className={styles.catRow}>
            <div>
              <span className="eyebrow">What we carry</span>
              <h2>Customer Returns &amp; Scratch-and-Dent</h2>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.875rem' }}>
                Inventory changes load by load. Call or text to ask about what's currently available.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/manifests" className="btn btn--outline">View Load Manifests</Link>
              </div>
            </div>
            <ul className={styles.catList}>
              {site.inventoryCategories.map((cat) => (
                <li key={cat} className={styles.catItem}>{cat}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">The process</span>
          <h2>From first call to pickup</h2>
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

      {/* ── FEATURED VIDEO (only shown when a URL is set) ── */}
      {SHOWCASE_VIDEO && (
        <section className="section">
          <div className="container">
            <div className={styles.videoSection}>
              <div>
                <span className="eyebrow">See it for yourself</span>
                <h2>What a load walkthrough looks like</h2>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                  Every buyer gets a video like this before committing to a load.
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

      {/* ── BOTTOM CTA ── */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to see what's available?</h2>
              <p>
                Call or text — we'll send you a video of current inventory. No commitment, no pressure.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <a href={`tel:${site.contact.phone}`} className="btn btn--primary btn--lg">
                Call {site.contact.phoneDisplay}
              </a>
              <a
                href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`}
                className="btn btn--outline btn--lg"
              >
                Send a Text
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
