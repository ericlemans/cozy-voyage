import createMiddleware from 'next-intl/middleware';
import { routing } from '@/routing';
import { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  const forwardedHost = req.headers.get('x-forwarded-host');
  const forwardedProto = req.headers.get('x-forwarded-proto');

  if (forwardedHost) {
    const url = req.nextUrl.clone();
    url.host = forwardedHost;
    if (forwardedProto) url.protocol = forwardedProto;
    return handleI18nRouting(new NextRequest(url, req));
  }

  return handleI18nRouting(req);
}

export const config = {
  matcher: ['/((?!_next|assets|favicon\\.ico|.*\\..*).*)'],
};
