import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLocale from '../locales/en.json';
import ukLocale from '../locales/uk.json';

const supportedLocales = ['en', 'uk'];

const getInitialLocale = () => {
    const getLocale = localStorage.getItem('locale') || navigator.language || 'en';

    if (supportedLocales.includes(getLocale)) {
        return getLocale;
    }
};

i18n.use(initReactI18next).init({
    resources: {
        ...enLocale,
        ...ukLocale,
    },
    lng: getInitialLocale(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});