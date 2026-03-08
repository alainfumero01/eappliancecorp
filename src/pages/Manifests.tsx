import { site } from '../content/siteContent'
import MediaSlot from '../components/MediaSlot'
import PageSeo from '../components/PageSeo'
import Breadcrumb from '../components/Breadcrumb'
import { CANONICAL_DOMAIN } from '../seo/seoRoutes'
import styles from './Manifests.module.css'

// Add / edit loads here as inventory changes
const manifests = [
  {
    id: 'MF-2025-001',
    date: '2025-03-01',
    category: 'Refrigerators / Freezers',
    units: 24,
    hub: 'Texas',
    status: 'Available',
    notes: 'Mixed French door and top-freezer. Scratch-and-dent.',
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
    notes: 'Customer returns. Pairs and singles included.',
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
    notes: 'Gas and electric mixed. Cosmetic damage only.',
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
    name: `Load ${m.id}: ${m.category} — ${m.units} units — ${m.hub} — ${m.status}`,
    description: m.notes,
  })),
}

export default function Manifests() {
  return (
    <>
      <PageSeo
        title="Appliance Load Manifests & Current Inventory | E-Appliance Recycling Corp"
        description="View available wholesale appliance loads by category, quantity, and hub location. Customer returns and scratch-and-dent inventory with video walkthroughs available before purchase."
        canonical="/manifests"
        og={{ title: 'Appliance Load Manifests & Current Inventory', description: 'Available wholesale appliance loads with video walkthroughs before purchase.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Appliance Load Manifests & Inventory' }}
        schema={itemListSchema}
      />

      <section className={styles.header}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Inventory & Manifests', path: '/manifests' }]} />
          <span className="eyebrow">Inventory &amp; Manifests</span>
          <h1>What we have and how it works</h1>
          <p className={styles.lead}>
            All inventory is customer returns and scratch-and-dent — every unit functional,
            cosmetic flaws only. We do not run a live catalog. Loads are posted here as they
            come in, and walked on video before you commit to anything.
          </p>
        </div>
      </section>

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
              <MediaSlot
                src={null}
                type="video"
                alt="Sample load walkthrough video"
                label="Sample Walkthrough Video — paste a YouTube embed URL or MP4 link"
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
                Each row is an available or upcoming load. Each load has a thumbnail and video walkthrough
                — set <code className={styles.code}>thumbnailUrl</code> and <code className={styles.code}>videoUrl</code> in the manifests array to activate them.
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
                                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                                </svg>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className={styles.loadId}>{m.id}</td>
                        <td className={styles.date}>{new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        <td>{m.category}</td>
                        <td className={styles.colHide}>{m.units}</td>
                        <td className={styles.colHide}>{m.hub}</td>
                        <td>
                          <span className={[styles.status, statusColor[m.status] ?? ''].join(' ')}>
                            {m.status}
                          </span>
                        </td>
                        <td className={`${styles.notes} ${styles.colHide}`}>{m.notes}</td>
                        <td>
                          <div className={styles.actions}>
                            {m.videoUrl && (
                              <a href={m.videoUrl} target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}>
                                Watch Video
                              </a>
                            )}
                            {m.file && (
                              <a href={m.file} target="_blank" rel="noreferrer" className="btn btn--outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}>
                                Download
                              </a>
                            )}
                            {!m.videoUrl && !m.file && (
                              <a href={`tel:${site.contact.phone}`} className="btn btn--ghost" style={{ padding: '0.375rem 0.75rem', fontSize: '0.8125rem' }}>
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
                <strong>Available</strong> — ready to purchase.{' '}
                <strong>Pending</strong> — being prepared, call to reserve.
                Request a video walkthrough of any load before committing.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <div>
              <h2>Do not see what you need?</h2>
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
