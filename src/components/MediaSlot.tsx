import styles from './MediaSlot.module.css'

type Props = {
  /** Image or video URL. Leave null/undefined to show the placeholder. */
  src?: string | null
  type?: 'image' | 'video'
  /** Alt text for images */
  alt?: string
  /** Label shown in the placeholder (e.g. "Hero Image — 1600×900 recommended") */
  label?: string
  className?: string
  /** Aspect ratio as CSS value, e.g. "16/9" or "4/3". Defaults to "16/9". */
  aspectRatio?: string
}

function isYouTube(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

function isVimeo(url: string) {
  return url.includes('vimeo.com')
}

export default function MediaSlot({
  src,
  type = 'image',
  alt = '',
  label,
  className = '',
  aspectRatio = '16/9',
}: Props) {
  const style = { aspectRatio }

  if (!src) {
    return (
      <div
        className={`${styles.placeholder} ${className}`}
        style={style}
        aria-label={label ?? (type === 'video' ? 'Video slot' : 'Image slot')}
      >
        <div className={styles.placeholderInner}>
          {type === 'video' ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          )}
          {label && <p className={styles.placeholderLabel}>{label}</p>}
        </div>
      </div>
    )
  }

  if (type === 'video') {
    if (isYouTube(src) || isVimeo(src)) {
      return (
        <div className={`${styles.embed} ${className}`} style={style}>
          <iframe
            src={src}
            title={alt || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
      )
    }
    return (
      <video
        src={src}
        controls
        className={`${styles.video} ${className}`}
        style={style}
        aria-label={alt}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.image} ${className}`}
      style={style}
      loading="lazy"
      decoding="async"
    />
  )
}
