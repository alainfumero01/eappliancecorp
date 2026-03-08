import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <PageSeo
        title="Page Not Found | E-Appliance Recycling Corp"
        description="The page you requested is not available. Use the links below to return to inventory and contact pages."
        robots="noindex,follow"
        og={{
          title: 'Page Not Found',
          description: 'The page you requested is not available.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'Page Not Found' }}
      />
      <section className={styles.wrap}>
        <div className="container">
          <p className={styles.code}>404</p>
          <h1 className={styles.heading}>Page not found</h1>
          <p className={styles.body}>Use one of the links below to continue browsing current wholesale inventory pages.</p>
          <nav className={styles.links} aria-label="Return navigation">
            <Link to="/" className="btn btn--primary">
              Home
            </Link>
            <Link to="/manifests" className="btn btn--ghost">
              Inventory &amp; Manifests
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}
