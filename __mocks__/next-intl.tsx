import React from 'react';
import deMessages from '../messages/de.json';

type Messages = typeof deMessages;

function resolve(namespace: keyof Messages, key: string, params?: Record<string, unknown>): string {
  const ns = deMessages[namespace] as Record<string, unknown>;
  const parts = key.split('.');
  let value: unknown = ns;
  for (const part of parts) {
    if (typeof value !== 'object' || value === null) return `${namespace}.${key}`;
    value = (value as Record<string, unknown>)[part];
  }
  if (typeof value !== 'string') return `${namespace}.${key}`;
  if (params) {
    return value.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`));
  }
  return value;
}

export const useTranslations = (namespace: keyof Messages) =>
  (key: string, params?: Record<string, unknown>) => resolve(namespace, key, params);

export const useLocale = () => 'de';

export const NextIntlClientProvider = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
