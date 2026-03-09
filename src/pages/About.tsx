import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import styles from './About.module.css'

const STORY_IMAGE = '/videos/about-brand.mp4'

export default function About() {
  return (
    <>
      <PageSeo
        title="About E-Appliance Recycling Corp | Dealer-Only Appliance Loads"
        description="Learn how E-Appliance Recycling Corp sources customer returns and scratch-and-dent inventory for wholesale buyers."
        canonical="/about"
        og={{
          title: 'About E-Appliance Recycling Corp',
          description: 'Operational overview of our wholesale appliance load process, sourcing model, and buyer requirements.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'About E-Appliance Recycling Corp' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">About the operation</span>
          <h1>{site.yearsInBusiness}+ years in appliance load wholesale</h1>
          <p className={styles.lead}>
            We source appliance inventory for dealers who buy by the load. Our focus is repeatable B2B supply,
            clear terms, and practical communication around condition and shipping.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <h2>How inventory enters our pipeline</h2>
              <p>
                Our loads are built from customer returns and scratch-and-dent inventory. That means condition ranges
                vary by unit and by category. Some units are clean. Others show cosmetic wear from transit, handling,
                or return movement.
              </p>
              <p>
                We discuss load-level condition openly before release. Depending on the load, that may include
                category notes, counts, and walkthrough media. Buyers are expected to evaluate fit for their resale
                channel before confirming purchase.
              </p>
              <p>
                We do not operate as a consumer showroom. This is a dealer-only supply model built for buyers who
                understand turns, grading variability, and wholesale as-is terms.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/manifests" className="btn btn--outline">
                  Review Current Manifests
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  Send Buyer Details
                </Link>
              </div>
            </div>
            <div className={styles.storyAside}>
              <MediaSlot
                src={STORY_IMAGE}
                type="video"
                alt="E-Appliance Recycling Corp — 15+ years in appliance load wholesale"
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
              <p className={styles.asideNote}>{site.legal.asIsNotice}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.valuesRow}>
            <div className={styles.valuesLeft}>
              <h2>Operational standards</h2>
              <p>
                Our buyers stay with us because communication is practical. We focus on what matters for purchasing and shipping.
              </p>
            </div>
            <div className={styles.valuesList}>
              <div className={styles.valueItem}>
                <h3>Condition expectations</h3>
                <p>We set clear expectations on grade and variability at load level before confirmation.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Terms before release</h3>
                <p>Price, payment timing, and shipping timeline are confirmed before inventory is released.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Dealer qualification</h3>
                <p>We work with wholesale buyers and resellers, not end-consumer one-off purchases.</p>
              </div>
              <div className={styles.valueItem}>
                <h3>Direct communication</h3>
                <p>Buyers reach us directly through our contact form for current load availability and logistics coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Need current load availability?</h2>
              <p>Send your category and volume requirements and we will respond with what is active now.</p>
            </div>
            <div className={styles.ctaBtns}>
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
