import { UserRoundPlus } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type ContactFormProps = {
  onAdd: (name: string) => void
}

type FormError = 'invalidName' | 'submit' | null

export default function ContactForm({ onAdd }: ContactFormProps) {
  const [name, setName] = useState('')
  const [formError, setFormError] = useState<FormError>(null)
  const { t } = useTranslation()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = name.trim()

    if (!/[\p{L}\p{N}]/u.test(trimmedName)) {
      setFormError('invalidName')
      return
    }

    try {
      onAdd(trimmedName)
      setName('')
      setFormError(null)
    } catch {
      setFormError('submit')
    }
  }

  return (
    <>
      <form className="mt-5 flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            if (formError) {
              setFormError(null)
            }
          }}
          placeholder={t('namePlaceholder')}
          className={`w-full rounded-2xl border bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition ${
            formError
              ? 'border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-500/20'
              : 'border-slate-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20'
          }`}
        />

        <button
          type="submit"
          disabled={name.trim() === ''}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-600/50 disabled:text-slate-300"
        >
          <UserRoundPlus size={18} />
          <span>{t('add')}</span>
        </button>
      </form>

      <div className={`mt-2 text-sm font-medium ${formError ? 'text-red-500' : 'text-slate-400'}`}>
        {formError === 'submit'
          ? t('submitError')
          : formError === 'invalidName'
            ? t('invalidName')
            : ''
        }
      </div>
    </>
  )
}
