import { useState } from 'react'
import {  type Person } from './data/initialData'
import ContactsPage from './pages/ContactsPage'

const createRandomId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `item_${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function App() {
  const [people, setPeople] = useState<Person[]>([])

  const addPerson = (name: string) => {
    const trimmed = name.trim()
    if (!trimmed) return

    setPeople((current) => [{ id: createRandomId(), name: trimmed }, ...current])
  }

  const deletePerson = (id: string) => {
    setPeople((current) => current.filter((person) => person.id !== id))
  }

  return (
    <ContactsPage
      people={people}
      onAddPerson={addPerson}
      onDeletePerson={deletePerson}
    />
  )
}

export default App
