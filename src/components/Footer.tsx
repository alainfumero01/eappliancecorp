import { Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <img
              src="/images/logo.png"
              alt={site.name}
              className={styles.logoImg}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block' }}
            />
            <span className={styles.logoImgFallback} style={{ display: 'none' }}>{site.name}</span>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.hubs}>{site.hubs.join(' · ')}</p>
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

          <div className={styles.contact}>
            <span className={styles.navLabel}>Contact</span>
            <a href={`tel:${site.contact.phone}`}>{site.contact.phoneDisplay}</a>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>

        <hr className={`divider ${styles.divider}`} />
        <p className={styles.copy}>
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
