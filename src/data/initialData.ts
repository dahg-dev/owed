export type Contact = {
  id: string
  name: string
}

export type MovementType = 'debt' | 'credit'

export type Movement = {
  id: string
  contactId: string
  type: MovementType
  amount: number
  note: string
  date: string
}