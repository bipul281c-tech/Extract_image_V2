import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Canonical URL: extractpics.com (non-www)
  // Redirect www to non-www
  if (hostname === 'www.extractpics.com') {
    url.host = 'extractpics.com'
    return NextResponse.redirect(url, 301) // Permanent redirect
  }

  return NextResponse.next()
}

// Run middleware on all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json|txt)$).*)',
  ],
}
