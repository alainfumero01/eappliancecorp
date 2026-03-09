import { Link } from 'react-router-dom'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  return (
    <div className={styles.bar} role="complementary" aria-label="Quick contact">
      <Link to="/contact" className={styles.btn}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Contact Us
      </Link>
    </div>
  )
}
