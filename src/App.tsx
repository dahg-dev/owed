import { useState } from 'react'
import {  type Contact } from './data/initialData'
import ContactsPage from './pages/ContactsPage'

const createRandomId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  return `item_${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function App() {
  const [people, setPeople] = useState<Contact[]>([])

  const addContact = (name: string) => {
      //throw new Error()
    setPeople((current) => [{ id: createRandomId(), name: name }, ...current])
  }

  const deleteContact = (id: string) => {
    setPeople((current) => current.filter((contact) => contact.id !== id))
  }

  return (
    <ContactsPage
      people={people}
      onAddContact={addContact}
      onDeleteContact={deleteContact}
    />
  )
}

export default App
