import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const language = typeof navigator !== 'undefined' && navigator.language.startsWith('en')
  ? 'en'
  : 'es'

void i18n
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          contacts: 'Contactos',
          delete: 'Eliminar',
          no_contacts: 'No hay contactos registrados',
          records_one: '{{count}} registro',
          records_other: '{{count}} registros',
          namePlaceholder: 'Nombre',
          invalidName: 'El nombre debe tener al menos una letra o número',
          submitError: 'Oops, algo salió mal. Intenta de nuevo',
          add: 'Agregar',
          language: 'Idioma',
        },
      },
      en: {
        translation: {
          contacts: 'Contacts',
          delete: 'Delete',
          no_contacts: 'No contacts registered',
          records_one: '{{count}} record',
          records_other: '{{count}} records',
          namePlaceholder: 'Name',
          invalidName: 'The name must contain at least one letter or number',
          submitError: 'Oops, something went wrong. Please try again',
          add: 'Add',
          language: 'Language',
        },
      },
    },
  })

export default i18n