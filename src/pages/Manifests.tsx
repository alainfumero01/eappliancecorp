import { site } from '../content/siteContent'
import styles from './Manifests.module.css'

// ── Replace or extend this list as loads become available ──
const manifests = [
  {
    id: 'MF-2025-001',
    date: '2025-03-01',
    category: 'Refrigerators / Freezers',
    units: 24,
    hub: 'Texas',
    status: 'Available',
    notes: 'Mixed French door and top-freezer. Scratch-and-dent.',
    file: null as string | null,
  },
  {
    id: 'MF-2025-002',
    date: '2025-03-01',
    category: 'Washers & Dryers',
    units: 30,
    hub: 'New Jersey',
    status: 'Available',
    notes: 'Customer returns. Pairs and singles included.',
    file: null as string | null,
  },
  {
    id: 'MF-2025-003',
    date: '2025-02-20',
    category: 'Ranges & Ovens',
    units: 18,
    hub: 'Texas',
    status: 'Pending',
    notes: 'Gas and electric mixed. Cosmetic damage only.',
    file: null as string | null,
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
      {/* ── HEADER ── */}
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Inventory &amp; Manifests</span>
          <h1>What we have and how it works</h1>
          <p className={styles.lead}>
            All inventory is customer returns and scratch-and-dent — every unit functional,
            cosmetic flaws only. We don't run a live catalog. Loads are posted here as they
            come in, and walked on video before you commit to anything.
          </p>
        </div>
      </section>

      {/* ── WHAT WE CARRY ── */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.carryRow}>
            <div>
              <h2>What we typically carry</h2>
              <p>
                Mix varies load by load. Call or text to ask what categories are available right now.
                Everything we sell has been verified to operate — the only known issues are cosmetic.
              </p>
            </div>
            <ul className={styles.catGrid}>
              {site.inventoryCategories.map((cat) => (
                <li key={cat} className={styles.catItem}>{cat}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROCESS + VIDEO PROOF ── */}
      <section className="section">
        <div className="container">
          <div className={styles.processVideoRow}>

            <div className={styles.processSide}>
              <h2>From first call to pickup</h2>
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
              <span className="eyebrow">Before you buy</span>
              <h2>You get a video first</h2>
              <p>
                Every available load gets a walkthrough recorded before we ask you to make
                any decision. You see the actual units — actual dents, actual quantity, actual
                mix. Not a photo, not a description alone. An actual walkthrough.
              </p>
              <p style={{ marginTop: '0.875rem' }}>
                If something in the video does not look right to you, you say so before you buy.
                That is the whole point.
              </p>
              <div className={styles.videoCallout}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
                <p>We send the video. You review it. You decide. Nothing ships until you are satisfied with what you saw.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MANIFEST TABLE ── */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.tableHeader}>
            <div>
              <h2>Current load manifests</h2>
              <p>
                Each row is an available or upcoming load. Call to request the video walkthrough for any entry.
              </p>
            </div>
            <a href={`tel:${site.contact.phone}`} className="btn btn--primary">
              Call to Inquire
            </a>
          </div>

          {manifests.length === 0 ? (
            <div className={styles.empty}>
              <p>No manifests posted yet. Call or text to ask about current availability.</p>
            </div>
          ) : (
            <>
              <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
                <table>
                  <thead>
                    <tr>
                      <th>Load #</th>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Units</th>
                      <th>Hub</th>
                      <th>Status</th>
                      <th>Notes</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {manifests.map((m) => (
                      <tr key={m.id}>
                        <td className={styles.loadId}>{m.id}</td>
                        <td className={styles.date}>{new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        <td>{m.category}</td>
                        <td>{m.units}</td>
                        <td>{m.hub}</td>
                        <td>
                          <span className={[styles.status, statusColor[m.status] ?? ''].join(' ')}>
                            {m.status}
                          </span>
                        </td>
                        <td className={styles.notes}>{m.notes}</td>
                        <td>
                          {m.file ? (
                            <a href={m.file} target="_blank" rel="noreferrer" className="btn btn--outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}>
                              Download
                            </a>
                          ) : (
                            <a
                              href={`tel:${site.contact.phone}`}
                              className="btn btn--ghost"
                              style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
                            >
                              Call to Inquire
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                <strong>Available</strong> — ready to purchase.{' '}
                <strong>Pending</strong> — being prepared, call to reserve.
                Request a video walkthrough of any load before committing.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Don't see what you need?</h2>
              <p>
                Tell us what categories or load sizes you are looking for and we will reach out when matching inventory comes in.
              </p>
            </div>
            <div className={styles.ctaBtns}>
              <a href={`tel:${site.contact.phone}`} className="btn btn--primary btn--lg">
                Call {site.contact.phoneDisplay}
              </a>
              <a
                href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`}
                className="btn btn--ghost btn--lg"
              >
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
