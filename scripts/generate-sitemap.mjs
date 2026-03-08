import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')

const { CANONICAL_DOMAIN, seoRoutes } = await import(pathToFileURL(serverEntryPath).href)

if (!CANONICAL_DOMAIN || !Array.isArray(seoRoutes)) {
  throw new Error('Expected CANONICAL_DOMAIN and seoRoutes exports from dist/server/entry-server.js')
}

const indexableRoutes = seoRoutes.filter((route) => !route.robots.includes('noindex'))

const urls = indexableRoutes
  .map((route) => `  <url><loc>${route.canonical}</loc></url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf8')
console.log(`Generated sitemap.xml with ${indexableRoutes.length} URLs`) 
