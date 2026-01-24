'use client';

import { useLocaleContext } from '../LocaleProvider';

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocaleContext();

  const toggleLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    changeLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="font-medium text-md px-4 lg:px-6 h-full flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all active:scale-90 hover:scale-105 hover:bg-[#26214D12] opacity-60 hover:opacity-100"
      aria-label="Switch language"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
      <span className="uppercase font-semibold">{locale === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
}
