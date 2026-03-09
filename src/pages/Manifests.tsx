import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import styles from './Manifests.module.css'

const manifests = [
  {
    id: 'MF-2026-001',
    date: '2026-03-09',
    category: 'Ranges & Ovens',
    model: 'Whirlpool WFG525S0JB (Gas) + WFE515S0JB (Electric)',
    units: 30,
    hub: 'Texas',
    status: 'Available',
    price: '$25,990',
    notes: '30-unit mixed range load (15 gas + 15 electric). New units, as-is wholesale terms.',
    file: '/manifests/manifest-3.9.2026.xlsx',
  },
]

const statusColor: Record<string, string> = {
  Available: styles.statusAvailable,
  Pending: styles.statusPending,
  Sold: styles.statusSold,
}

export default function Manifests() {
  return (
    <>
      <PageSeo
        title="Appliance Load Manifests & Current Inventory | E-Appliance Recycling Corp"
        description="Review current appliance loads by category, count, and hub. Understand as-is condition expectations before you buy."
        canonical="/manifests"
        og={{
          title: 'Appliance Load Manifests & Current Inventory',
          description: 'Current dealer-only appliance loads with practical condition guidance and shipping details.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'Appliance Load Manifests & Inventory' }}
      />

      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Inventory and manifests</span>
          <h1>Current load visibility for wholesale buyers</h1>
          <p className={styles.lead}>
            Use this page to review active loads by hub, category, and count. Inventory is wholesale and as-is.
            Mix and condition vary by load, so review notes and media before confirming purchase.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.carryRow}>
            <div>
              <h2>Typical condition expectations</h2>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {site.legal.conditionExpectations.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ul className={styles.catGrid}>
              {site.inventoryCategories.map((cat) => (
                <li key={cat} className={styles.catItem}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.processVideoRow}>
            <div className={styles.processSide}>
              <h2>How purchase and shipping works</h2>
              <div className={styles.processList}>
                {site.process.map((step, i) => (
                  <div key={step.step} className={styles.processItem}>
                    <div className={styles.processLeft}>
                      <div className={styles.stepBubble}>{step.step}</div>
                      {i < site.process.length - 1 && <div className={styles.stepLine} aria-hidden="true" />}
                    </div>
                    <div className={styles.processContent}>
                      <h3>{step.label}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.videoSide}>
              <span className="eyebrow">Media and representation</span>
              <h2>Use notes, manifest rows, and media together</h2>
              <p>
                A manifest row gives category, count, hub, and status. Walkthrough media, when available, adds visual
                condition context. Buyers should review both before confirming payment and shipping.
              </p>
              <p style={{ marginTop: '0.875rem' }}>
                Final release is based on agreed wholesale terms and active inventory at the time of confirmation.
              </p>
              <MediaSlot
                src="/videos/manifest-walkthrough.mp4"
                type="video"
                alt="Sample load walkthrough video showing appliance condition and overview"
                aspectRatio="16/9"
                className={styles.sampleVideo}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.tableHeader}>
            <div>
              <h2>Current load manifests</h2>
              <p>Loads are updated as inventory changes. Check back or send an inquiry for current availability.</p>
            </div>
            <Link to="/contact" className="btn btn--primary">
              Send an Inquiry
            </Link>
          </div>

          <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
            <table>
              <thead>
                <tr>
                  <th>Load #</th>
                  <th className={styles.colHide}>Date</th>
                  <th>Category / Model</th>
                  <th className={styles.colHide}>Units</th>
                  <th className={styles.colHide}>Hub</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th className={styles.colHide}>Notes</th>
                  <th>Manifest</th>
                </tr>
              </thead>
              <tbody>
                {manifests.map((m) => (
                  <tr key={m.id}>
                    <td className={styles.loadId}>{m.id}</td>
                    <td className={`${styles.date} ${styles.colHide}`}>
                      {new Date(m.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{m.category}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.125rem' }}>{m.model}</div>
                    </td>
                    <td className={styles.colHide}>{m.units}</td>
                    <td className={styles.colHide}>{m.hub}</td>
                    <td>
                      <span className={[styles.status, statusColor[m.status] ?? ''].join(' ')}>{m.status}</span>
                    </td>
                    <td>
                      <span className={styles.price}>{m.price}</span>
                      <span className={styles.priceNote}>excl. shipping</span>
                    </td>
                    <td className={`${styles.notes} ${styles.colHide}`}>{m.notes}</td>
                    <td>
                      <a
                        href={m.file}
                        download
                        className="btn btn--outline"
                        style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableNote}>
            <strong>Available</strong> means currently open for wholesale purchase. All loads are as-is and subject
            to confirmed terms before release. Prices listed do not include shipping or freight costs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Before you inquire, have this ready</h2>
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {site.legal.inquiryChecklist.map((item) => (
                  <li key={item} style={{ marginTop: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
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
