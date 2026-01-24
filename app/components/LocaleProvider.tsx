'use client';

import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';
import { ReactNode, useState, useEffect, createContext, useContext } from 'react';
import { getInitialLocale, setLocaleInStorage, type Locale } from '@/i18n/config';

interface LocaleProviderProps {
  children: ReactNode;
}

interface LocaleContextType {
  locale: Locale;
  changeLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'fr',
  changeLocale: () => { },
});

export const useLocaleContext = () => useContext(LocaleContext);

export default function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>('fr');
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);

  useEffect(() => {
    const initialLocale = getInitialLocale();
    setLocale(initialLocale);

    import(`@/messages/${initialLocale}.json`).then((messages) => {
      setMessages(messages.default);
    });
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setLocaleInStorage(newLocale);

    // Reset messages to trigger loading state if desired, or just load new ones
    // Here we load new ones and update state when ready to avoid jarring flash
    import(`@/messages/${newLocale}.json`).then((messages) => {
      setMessages(messages.default);
    });
  };

  if (!messages) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#26214D] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
      </div>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
