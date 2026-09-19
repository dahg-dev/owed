import { UserRoundPlus } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type ContactFormProps = {
  onAdd: (name: string) => void
}

export default function ContactForm({ onAdd }: ContactFormProps) {
  const [name, setName] = useState('')
  const { t } = useTranslation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAdd(name)
    setName('')
  }

  return (
    <form className="mt-5 flex gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) =>
          setName(event.target.value.replace(/[^\p{L}\p{N} ]/gu, ''))
        }
        placeholder={t('namePlaceholder')}
        className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        <UserRoundPlus size={18} />
        <span>{t('add')}</span>
      </button>
    </form>
  )
}
