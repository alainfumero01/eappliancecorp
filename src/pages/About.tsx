import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import styles from './About.module.css'

// ── MEDIA — swap null for a real URL to activate ────────────────────────────
const STORY_IMAGE = null    // e.g. '/images/about-warehouse.jpg'
// ────────────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">About the company</span>
          <h1>
            {site.yearsInBusiness} years of straight dealing
          </h1>
          <p className={styles.lead}>
            E-Appliance Recycling Corp has been supplying resellers with wholesale appliance loads since the early 2000s.
            We run two distribution hubs — one in {site.hubs[0]}, one in {site.hubs[1]} — and work exclusively
            with buyers who purchase by the load.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>How the business works</h2>
              <p>
                Our inventory comes from two sources: customer returns and scratch-and-dent units.
                These are appliances that came back from consumers for cosmetic reasons, or that left
                the factory with a dent or finish flaw. The internals are fine. They run, they heat,
                they wash — they just don't look showroom-perfect.
              </p>
              <p>
                That gap between retail and resale value is where our buyers make their margins.
                We source it, verify it works, and sell it by the load to people who know how to
                move it.
              </p>
              <p>
                Before any load changes hands, we send you a video. You see what's in the load —
                the actual units, actual condition, actual count. If something doesn't look right to
                you, you say so before you buy, not after.
              </p>
            </div>
            <div className={styles.storyAside}>
              <MediaSlot
                src={STORY_IMAGE}
                type="image"
                alt="E-Appliance Recycling Corp warehouse or team photo"
                label="About Photo — warehouse, team, or load image. Recommended 800×600, JPG or WebP."
                aspectRatio="4/3"
              />
              <div className={styles.asideBlock} style={{ marginTop: '1.25rem' }}>
                <p className={styles.bigNum}>{site.yearsInBusiness}+</p>
                <p className={styles.bigLabel}>Years in business</p>
              </div>
              <hr className="divider" />
              <div className={styles.hubList}>
                <p className={styles.asideHeading}>Hub locations</p>
                {site.hubs.map((hub) => (
                  <div key={hub} className={styles.hubRow}>
                    <span className={styles.hubDot} aria-hidden="true" />
                    <span>{hub}</span>
                  </div>
                ))}
              </div>
              <hr className="divider" />
              <p className={styles.asideNote}>
                We don't sell to end consumers. Our pricing, load sizes, and logistics are
                set up for wholesale buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MATTERS TO US ── */}
      <section className="section">
        <div className="container">
          <div className={styles.valuesRow}>
            <div className={styles.valuesLeft}>
              <h2>What you can count on</h2>
              <p>
                The same principles that built this business are still how we operate. None of this
                is complicated — it's just consistent.
              </p>
            </div>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h3>Accurate descriptions</h3>
                <p>
                  Every load is described as-is. Category, approximate count, condition range — no
                  upselling, no vague language. If there's something off about a load, we say it.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3>Video before purchase</h3>
                <p>
                  We record and send a walkthrough of each load before you're asked to decide anything.
                  You're not buying a description — you're buying what you saw.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3>Functional-only inventory</h3>
                <p>
                  We don't sell broken appliances. Cosmetic damage is expected and priced in. Operational
                  problems are not. If it doesn't work, it doesn't go in a load.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3>Straightforward terms</h3>
                <p>
                  Wholesale pricing, load-based sales, pickup from our TX or NJ hubs. No surprises
                  in the terms, no add-ons after the fact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Want to see a current load?</h2>
              <p>Call or text — we'll walk you through what's available right now.</p>
            </div>
            <div className={styles.ctaBtns}>
              <a href={`tel:${site.contact.phone}`} className="btn btn--primary btn--lg">
                Call {site.contact.phoneDisplay}
              </a>
              <Link to="/manifests" className="btn btn--ghost btn--lg">
                Browse Manifests
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
