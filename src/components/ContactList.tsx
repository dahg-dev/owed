import type { Person } from '../data/initialData';
import { useTranslation } from 'react-i18next'

type ContactListProps = {
  people: Person[]
  onDelete: (id: string) => void
}

export default function ContactList({
  people,
  onDelete
}: ContactListProps) {
  const { t } = useTranslation()

  return (
    <div className="mt-6">
      {people.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-6 text-center text-slate-400">
          {t('no_contacts')}
        </div>
      ) : (
        <ul className="space-y-3">
          {people.map((person) => (
            <li
              key={person.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3"
            >
              <div className="flex w-full items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 font-medium text-slate-100">
                    {person.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-lg font-medium text-slate-100">
                    {person.name}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onDelete(person.id)}
                  className="ml-auto rounded-full bg-red-500/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-50 shadow-sm transition-colors duration-200 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/60"
                >
                  {t('delete')}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
