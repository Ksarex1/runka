import {createI18n} from 'vue-i18n'
import messages from './assets/data/translate.json'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
})

export default i18n