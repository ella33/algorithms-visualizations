import Vue from 'vue';
import VueI18n from 'vue-i18n';
import roTranslations from './ro';
import enTranslations from './en';

Vue.use(VueI18n);

const defaultLocale = 'ro';

const messages = {
  en: enTranslations,
  ro: roTranslations,
};

const i18n = new VueI18n({
  locale: defaultLocale,
  messages,
});

export default i18n;
