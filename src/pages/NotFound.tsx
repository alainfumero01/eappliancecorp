import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <PageSeo
        title="Page Not Found | E-Appliance Recycling Corp"
        description="The page you were looking for could not be found."
        robots="noindex,follow"
        og={{ title: 'Page Not Found', description: 'The page you were looking for could not be found.', type: 'website' }}
        twitter={{ card: 'summary', title: 'Page Not Found' }}
      />
      <section className={styles.wrap}>
        <div className="container">
          <p className={styles.code}>404</p>
          <h1 className={styles.heading}>Page not found</h1>
          <p className={styles.body}>
            That page does not exist. Try one of the links below.
          </p>
          <nav className={styles.links} aria-label="Return navigation">
            <Link to="/" className="btn btn--primary">Home</Link>
            <Link to="/manifests" className="btn btn--ghost">Inventory &amp; Manifests</Link>
            <Link to="/contact" className="btn btn--ghost">Contact</Link>
          </nav>
        </div>
      </section>
    </>
  )
}
