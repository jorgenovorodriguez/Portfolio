import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationSP from '../public/locales/sp/translation.json';
import translationEN from '../public/locales/en/translation.json';

const resources = {
    sp: {
        translation: translationSP,
    },
    en: {
        translation: translationEN,
    },
};

if (!localStorage.getItem('I18N_LANGUAGE')) {
    localStorage.setItem('I18N_LANGUAGE', 'sp');
}

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('I18N_LANGUAGE') || 'sp',
        fallbackLng: 'sp',

        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },

        detection: {
            order: ['navigator'],
            caches: ['localStorage', 'cookie'], // donde almacenar el idioma detectado
        },
    });

export default i18n;
