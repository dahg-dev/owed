import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import type { Person } from '../data/initialData'
import { useTranslation } from 'react-i18next'

type ContactsPageProps = {
  people: Person[]
  onAddPerson: (name: string) => void
  onDeletePerson: (id: string) => void
}

export default function ContactsPage({
  people,
  onAddPerson,
  onDeletePerson
}: ContactsPageProps) {
  const { i18n, t } = useTranslation()

  return (
    <main className="min-h-screen bg-[#050b16] px-4 py-10 text-slate-200">
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-800 bg-[#0b1220] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.75)] ring-1 ring-blue-500/10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="mt-2 text-3xl font-bold uppercase text-white">{t('contacts')}</h1>
          </div>
          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="language">{t('language')}</label>
            <select
              id="language"
              value={i18n.language}
              onChange={(event) => void i18n.changeLanguage(event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1.5 text-sm text-slate-200"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-200">
              {t('records', { count: people.length })}
            </div>
          </div>
        </div>

        <ContactForm onAdd={onAddPerson} />

        <ContactList people={people} onDelete={onDeletePerson} />

      </div>
    </main>
  )
}
