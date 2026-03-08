import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import Breadcrumb from '../components/Breadcrumb'
import styles from './About.module.css'

const STORY_IMAGE = null    // e.g. '/images/about-warehouse.jpg'

export default function About() {
  return (
    <>
      <PageSeo
        title="About E-Appliance Recycling Corp | 15+ Years in Wholesale Appliances"
        description="E-Appliance Recycling Corp has been supplying resellers with wholesale appliance loads since the early 2000s. Two distribution hubs in Texas and New Jersey."
        canonical="/about"
        og={{ title: 'About E-Appliance Recycling Corp', description: '15+ years supplying wholesale appliance loads to resellers. Texas and New Jersey distribution hubs.', type: 'website' }}
        twitter={{ card: 'summary', title: 'About E-Appliance Recycling Corp' }}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }]} />
          <span className="eyebrow">About the company</span>
          <h1>{site.yearsInBusiness} years of straight dealing</h1>
          <p className={styles.lead}>
            E-Appliance Recycling Corp has been supplying resellers with wholesale appliance loads since the early 2000s.
            We run two distribution hubs — one in {site.hubs[0]}, one in {site.hubs[1]} — and work exclusively
            with buyers who purchase by the load.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>How the business works</h2>
              <p>
                Our inventory comes from two sources: customer returns and scratch-and-dent units.
                These are appliances that came back from consumers for cosmetic reasons, or that left
                the factory with a dent or finish flaw. The internals are fine. They run, they heat,
                they wash — they just do not look showroom-perfect.
              </p>
              <p>
                That gap between retail and resale value is where our buyers make their margins.
                We source it, verify it works, and sell it by the load to people who know how to
                move it.
              </p>
              <p>
                Before any load changes hands, we send you a video. You see what is in the load —
                the actual units, actual condition, actual count. If something does not look right to
                you, you say so before you buy, not after.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/manifests" className="btn btn--outline">View Current Loads</Link>
                <Link to="/contact" className="btn btn--ghost">Get in Touch</Link>
              </div>
            </div>
            <div className={styles.storyAside}>
              <MediaSlot
                src={STORY_IMAGE}
                type="image"
                alt="E-Appliance Recycling Corp warehouse or team photo"
                label="About Photo — warehouse, team, or load image. Recommended 800x600, JPG or WebP."
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
                We do not sell to end consumers. Our pricing, load sizes, and logistics are
                set up for wholesale buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.valuesRow}>
            <div className={styles.valuesLeft}>
              <h2>What you can count on</h2>
              <p>
                The same principles that built this business are still how we operate. None of this
                is complicated — it is just consistent.
              </p>
            </div>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h3>Accurate descriptions</h3>
                <p>
                  Every load is described as-is. Category, approximate count, condition range — no
                  upselling, no vague language. If there is something off about a load, we say it.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3>Video before purchase</h3>
                <p>
                  We record and send a walkthrough of each load before you are asked to decide anything.
                  You are not buying a description — you are buying what you saw.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3>Functional-only inventory</h3>
                <p>
                  We do not sell broken appliances. Cosmetic damage is expected and priced in. Operational
                  problems are not. If it does not work, it does not go in a load.
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

      <section className="section section--alt">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Want to see a current load?</h2>
              <p>Call or text — we will walk you through what is available right now.</p>
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
