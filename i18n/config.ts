export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export function getLocaleFromStorage(): Locale | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem('locale');
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale;
  }

  return null;
}

export function setLocaleInStorage(locale: Locale) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('locale', locale);
}

export function getBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  const browserLang = navigator.language.split('-')[0];
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale;
}

export function getInitialLocale(): Locale {
  return getLocaleFromStorage() || getBrowserLocale();
}
