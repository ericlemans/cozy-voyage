import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n-config/routing';
import { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function proxy(req: NextRequest) {
   return handleI18nRouting(req);
}
