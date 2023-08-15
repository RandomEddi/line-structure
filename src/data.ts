import { generateId } from './utils'
import { CardInterface } from './types'

export const CARDS_GAP = 100
export const CARD_SIZE = 140

export const DUMMY_CARDS: CardInterface[] = [
  {
    id: generateId(),
    children: [],
  },
]
