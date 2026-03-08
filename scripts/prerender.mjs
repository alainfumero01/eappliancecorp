import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')

const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
const serverModule = await import(pathToFileURL(serverEntryPath).href)

const { render, seoRoutes } = serverModule

if (typeof render !== 'function') {
  throw new Error('Expected render(url) export from dist/server/entry-server.js')
}

if (!Array.isArray(seoRoutes)) {
  throw new Error('Expected seoRoutes export from dist/server/entry-server.js')
}

const routesToRender = seoRoutes.map((route) => route.path)

const LEADING_HEAD_TAGS =
  /^(?:(?:<title[\s\S]*?<\/title>)|(?:<meta[^>]*\/?>)|(?:<link[^>]*\/?>)|(?:<script type="application\/ld\+json">[\s\S]*?<\/script>))+/i

function extractLeadingHead(html) {
  const match = html.match(LEADING_HEAD_TAGS)

  if (!match) {
    return { extractedHead: '', appHtml: html }
  }

  return {
    extractedHead: match[0],
    appHtml: html.slice(match[0].length),
  }
}

for (const routePath of routesToRender) {
  const { head, html } = render(routePath)
  const { extractedHead, appHtml } = extractLeadingHead(html)
  const resolvedHead = [head, extractedHead].filter(Boolean).join('')
  const outputHtml = template
    .replace('<!--app-head-->', resolvedHead)
    .replace('<!--app-html-->', appHtml)

  const routeOutputPath =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html')

  await mkdir(path.dirname(routeOutputPath), { recursive: true })
  await writeFile(routeOutputPath, outputHtml, 'utf8')

  if (routePath === '/404') {
    await writeFile(path.join(distDir, '404.html'), outputHtml, 'utf8')
  }

  console.log(`Prerendered ${routePath}`)
}
