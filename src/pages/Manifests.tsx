import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import Breadcrumb from '../components/Breadcrumb'
import { CANONICAL_DOMAIN } from '../seo/seoRoutes'
import styles from './Manifests.module.css'

// Add or edit loads here as inventory changes.
const manifests = [
  {
    id: 'MF-2025-001',
    date: '2025-03-01',
    category: 'Refrigerators / Freezers',
    units: 24,
    hub: 'Texas',
    status: 'Available',
    notes: 'Mixed refrigerator configurations. Cosmetic grading varies by unit.',
    thumbnailUrl: null as string | null,
    videoUrl: null as string | null,
    file: null as string | null,
  },
  {
    id: 'MF-2025-002',
    date: '2025-03-01',
    category: 'Washers & Dryers',
    units: 30,
    hub: 'New Jersey',
    status: 'Available',
    notes: 'Pairs and singles in one mixed load. Review count and condition notes.',
    thumbnailUrl: null as string | null,
    videoUrl: null as string | null,
    file: null as string | null,
  },
  {
    id: 'MF-2025-003',
    date: '2025-02-20',
    category: 'Ranges & Ovens',
    units: 18,
    hub: 'Texas',
    status: 'Pending',
    notes: 'Mixed fuel profile and mixed cosmetic grade.',
    thumbnailUrl: null as string | null,
    videoUrl: null as string | null,
    file: null as string | null,
  },
]

const statusColor: Record<string, string> = {
  Available: styles.statusAvailable,
  Pending: styles.statusPending,
  Sold: styles.statusSold,
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wholesale Appliance Load Manifests',
  description: 'Current wholesale appliance loads available from E-Appliance Recycling Corp',
  url: `${CANONICAL_DOMAIN}/manifests`,
  itemListElement: manifests.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Load ${m.id}: ${m.category} - ${m.units} units - ${m.hub} - ${m.status}`,
    description: m.notes,
  })),
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
          description: 'Current dealer-only appliance loads with practical condition guidance and pickup details.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'Appliance Load Manifests & Inventory' }}
        schema={itemListSchema}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Inventory & Manifests', path: '/manifests' }]} />
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
              <h2>How purchase and pickup works</h2>
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
                condition context. Buyers should review both before confirming payment and pickup.
              </p>
              <p style={{ marginTop: '0.875rem' }}>
                Final release is based on agreed wholesale terms and active inventory at the time of confirmation.
              </p>
              <MediaSlot
                src={null}
                type="video"
                alt="Sample load walkthrough video"
                label="Sample walkthrough media placeholder"
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
              <p>
                Each row represents one wholesale load. To activate richer listing details, add
                <code className={styles.code}> thumbnailUrl </code> and
                <code className={styles.code}> videoUrl </code> for each item.
              </p>
            </div>
            <a href={`tel:${site.contact.phone}`} className="btn btn--primary">
              Call to Inquire
            </a>
          </div>

          {manifests.length === 0 ? (
            <div className={styles.empty}>
              <p>No manifests posted yet. Call or text for current load availability.</p>
            </div>
          ) : (
            <>
              <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
                <table>
                  <thead>
                    <tr>
                      <th className={styles.colHide}>Photo</th>
                      <th>Load #</th>
                      <th className={styles.colHide}>Date</th>
                      <th>Category</th>
                      <th className={styles.colHide}>Units</th>
                      <th className={styles.colHide}>Hub</th>
                      <th>Status</th>
                      <th className={styles.colHide}>Notes</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {manifests.map((m) => (
                      <tr key={m.id}>
                        <td className={styles.colHide}>
                          <div className={styles.thumbCell}>
                            {m.thumbnailUrl ? (
                              <img
                                src={m.thumbnailUrl}
                                alt={`Load ${m.id} thumbnail`}
                                className={styles.thumb}
                                loading="lazy"
                                width="64"
                                height="64"
                              />
                            ) : (
                              <div className={styles.thumbPlaceholder} title="Add thumbnailUrl to activate">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect x="3" y="3" width="18" height="18" rx="2" />
                                  <circle cx="8.5" cy="8.5" r="1.5" />
                                  <polyline points="21 15 16 10 5 21" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className={styles.loadId}>{m.id}</td>
                        <td className={styles.date}>
                          {new Date(m.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </td>
                        <td>{m.category}</td>
                        <td className={styles.colHide}>{m.units}</td>
                        <td className={styles.colHide}>{m.hub}</td>
                        <td>
                          <span className={[styles.status, statusColor[m.status] ?? ''].join(' ')}>{m.status}</span>
                        </td>
                        <td className={`${styles.notes} ${styles.colHide}`}>{m.notes}</td>
                        <td>
                          <div className={styles.actions}>
                            {m.videoUrl && (
                              <a
                                href={m.videoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--primary"
                                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
                              >
                                Watch Video
                              </a>
                            )}
                            {m.file && (
                              <a
                                href={m.file}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--outline"
                                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
                              >
                                Download
                              </a>
                            )}
                            {!m.videoUrl && !m.file && (
                              <a
                                href={`tel:${site.contact.phone}`}
                                className="btn btn--ghost"
                                style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}
                              >
                                Call to Inquire
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.tableNote}>
                <strong>Available</strong> means currently open for wholesale purchase.
                <strong> Pending</strong> means staging or confirmation is still in progress.
                All loads are as-is and subject to confirmed terms before release.
              </p>
            </>
          )}
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
              <a href={`tel:${site.contact.phone}`} className="btn btn--primary btn--lg">
                Call {site.contact.phoneDisplay}
              </a>
              <a href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`} className="btn btn--ghost btn--lg">
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
