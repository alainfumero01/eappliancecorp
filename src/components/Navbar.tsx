import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { site } from '../content/siteContent'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/manifests', label: 'Inventory & Manifests' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>

          <Link to="/" className={styles.logoLink} onClick={() => setOpen(false)}>
            <div className={styles.logoWrap}>
              <img
                src="/images/logo.png"
                alt={site.name}
                className={styles.logoImg}
                onError={(e) => {
                  const wrap = (e.currentTarget as HTMLImageElement).parentElement!
                  wrap.style.display = 'none';
                  (wrap.nextElementSibling as HTMLElement).style.display = 'block'
                }}
              />
            </div>
            {/* Text fallback if logo.png is missing */}
            <span className={styles.logoText} style={{ display: 'none' }}>
              <span className={styles.logoAccent}>E-Appliances</span> Corp.
            </span>
          </Link>

          <ul className={styles.links}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.linkActive : ''].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${site.contact.phone}`}
            className={`btn btn--primary ${styles.desktopCta}`}
          >
            Call Now
          </a>

          <button
            className={styles.hamburger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={[styles.bar, open ? styles.barOpen1 : ''].join(' ')} />
            <span className={[styles.bar, open ? styles.barOpen2 : ''].join(' ')} />
            <span className={[styles.bar, open ? styles.barOpen3 : ''].join(' ')} />
          </button>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileLinks}>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      [styles.mobileLink, isActive ? styles.mobileLinkActive : ''].join(' ')
                    }
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCtas}>
              <a href={`tel:${site.contact.phone}`} className="btn btn--primary" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setOpen(false)}>
                Call
              </a>
              <a
                href={`sms:${site.contact.phone}?body=${encodeURIComponent(site.contact.smsBody)}`}
                className="btn btn--ghost"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => setOpen(false)}
              >
                Text
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
