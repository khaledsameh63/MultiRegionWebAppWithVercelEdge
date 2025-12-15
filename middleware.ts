import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const country = req.geo?.country ?? 'unknown';
  const url = req.nextUrl.clone();

  if (!url.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  if (country === 'US' || country === 'CA') {
    url.searchParams.set('region', 'us');
  } else {
    url.searchParams.set('region', 'eu');
  }

  return NextResponse.rewrite(url);
}