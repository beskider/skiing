import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pl from 'locales/pl/translation.json';
import en from 'locales/en/translation.json';

i18n
  .use(LanguageDetector) // automatycznie wykrywa język przeglądarki i zapisuje wybór w localStorage
  .use(initReactI18next) // przekazuje instancję i18n do react-i18next
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
    },
    fallbackLng: 'pl', // język domyślny, jeśli wykryty język nie jest obsługiwany
    interpolation: {
      escapeValue: false, // React sam zabezpiecza przed XSS
    },
  });

export default i18n;
