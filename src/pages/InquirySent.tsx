import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'
import styles from './NotFound.module.css'

export default function InquirySent() {
  return (
    <>
      <PageSeo
        title="Inquiry Received | E-Appliance Recycling Corp"
        description="Your wholesale inquiry has been received. We will review your request and follow up shortly."
        robots="noindex,follow"
        og={{
          title: 'Inquiry Received',
          description: 'Your wholesale inquiry has been received.',
          type: 'website',
        }}
        twitter={{ card: 'summary', title: 'Inquiry Received' }}
      />
      <section className={styles.wrap}>
        <div className="container">
          <h1 className={styles.heading}>Inquiry received</h1>
          <p className={styles.body}>
            Thank you for reaching out. We'll review your details and follow up with current load options shortly.
          </p>
          <nav className={styles.links} aria-label="Return navigation">
            <Link to="/" className="btn btn--primary">
              Home
            </Link>
            <Link to="/manifests" className="btn btn--ghost">
              View manifests
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}
