export type Person = {
  id: string
  name: string
}

export type MovementType = 'debt' | 'credit'

export type Movement = {
  id: string
  personId: string
  type: MovementType
  amount: number
  note: string
  date: string
}