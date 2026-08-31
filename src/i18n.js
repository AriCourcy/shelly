import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'search': 'Search',
      'language': 'Language',
      'english': 'English',
      'french': 'French',
      'hi': 'Hi!',
    }
  },
  fr: {
    translation: {
      'search': 'Rechercher',
      'language': 'Langue',
      'english': 'Anglais',
      'french': 'Français',
      'hi': 'Bonjour!',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    interpolation: {
      escapeValue: false
    }
  })

  export default i18n
