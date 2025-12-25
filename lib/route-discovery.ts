import fs from 'fs'
import path from 'path'

export function getAllPageRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'app')
  const routes: string[] = []

  // Check for homepage
  if (fs.existsSync(path.join(appDir, 'page.tsx'))) {
    routes.push('/')
  }

  // Scan all directories
  const entries = fs.readdirSync(appDir, { withFileTypes: true })

  for (const entry of entries) {
    // Skip API routes and special directories
    if (!entry.isDirectory() ||
        entry.name === 'api' ||
        entry.name.startsWith('_')) {
      continue
    }

    // Check if directory has page.tsx
    const pagePath = path.join(appDir, entry.name, 'page.tsx')
    if (fs.existsSync(pagePath)) {
      routes.push(`/${entry.name}`)
    }
  }

  return routes.sort()
}
