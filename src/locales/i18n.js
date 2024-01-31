import i18n from 'i18next';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    ua: {
      translation: require('./ua.json'),
    },
    en: {
      translation: require('./en.json'),
    },
  },
});

export default i18n;
