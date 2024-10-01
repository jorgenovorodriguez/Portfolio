import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationSP from '../public/locales/sp/translation.json';
import translationEN from '../public/locales/en/translation.json';

const resources = {
    es: {
        translation: translationSP,
    },
    en: {
        translation: translationEN,
    },
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('I18N_LANGUAGE'),
        fallbackLng: 'es',

        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ['navigator', 'localStorage', 'cookie'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;
