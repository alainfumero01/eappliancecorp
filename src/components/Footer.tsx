import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import styles from './Footer.module.css'

const intentLinks = [
  { to: '/texas-wholesale-appliance-loads', label: 'Texas Loads' },
  { to: '/new-jersey-wholesale-appliance-loads', label: 'New Jersey Loads' },
  { to: '/customer-returns-appliances', label: 'Customer Returns' },
  { to: '/scratch-and-dent-appliances', label: 'Scratch & Dent' },
  { to: '/appliance-liquidation-loads', label: 'Liquidation Loads' },
  { to: '/wholesale-refrigerator-loads', label: 'Refrigerator Loads' },
  { to: '/wholesale-washer-dryer-loads', label: 'Washer & Dryer Loads' },
  { to: '/wholesale-appliance-loads-for-resellers', label: 'Loads for Resellers' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img
              src="/images/logo.svg"
              alt={site.name}
              className={styles.logoImg}
              width="160"
              height="48"
              loading="lazy"
            />
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.hubs}>{site.hubs.join(' | ')}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <span className={styles.navLabel}>Pages</span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/manifests">Inventory &amp; Manifests</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Wholesale load types">
            <span className={styles.navLabel}>Load Types</span>
            <ul>
              {intentLinks.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <span className={styles.navLabel}>Contact</span>
            <a href={`tel:${site.contact.phone}`}>{site.contact.phoneDisplay}</a>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>

        <hr className={`divider ${styles.divider}`} />
        <p className={styles.copy}>
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
