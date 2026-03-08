import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page not found</h1>
        <p className={styles.body}>
          That page doesn't exist. Try one of the links below.
        </p>
        <nav className={styles.links} aria-label="Return navigation">
          <Link to="/" className="btn btn--primary">Home</Link>
          <Link to="/manifests" className="btn btn--ghost">Inventory &amp; Manifests</Link>
          <Link to="/contact" className="btn btn--ghost">Contact</Link>
        </nav>
      </div>
    </section>
  )
}
