import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CANONICAL_DOMAIN } from '../seo/seoRoutes'
import styles from './Breadcrumb.module.css'

export interface BreadcrumbItem {
  label: string
  path: string
}

interface Props {
  /** Full list including the current (last) page. Last item is rendered without a link. */
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: `${CANONICAL_DOMAIN}${item.path}`,
    })),
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.list}>
          {items.map((item, i) => {
            const isCurrent = i === items.length - 1
            return (
              <li key={item.path} className={styles.item}>
                {isCurrent ? (
                  <span aria-current="page" className={styles.current}>
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link to={item.path} className={styles.link}>
                      {item.label}
                    </Link>
                    <span className={styles.sep} aria-hidden="true">/</span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
