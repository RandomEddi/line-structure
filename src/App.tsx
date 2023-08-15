import { useState, type FC } from 'react'
import { DUMMY_CARDS } from './data'
import { Cards } from './components'
import { CardInterface } from './types'
import { generateId } from './utils'

const insertCard = (card: CardInterface, idToPut: number): CardInterface => {
  if (card.id === idToPut) {
    return {
      ...card,
      children: [
        ...card.children,
        {
          id: generateId(),
          children: [],
        },
      ],
    }
  }

  return {
    ...card,
    children: card.children.map((child) => insertCard(child, idToPut)),
  }
}

const getNewCards = (
  currentCards: CardInterface[],
  idToPut: number,
): CardInterface[] => {
  return currentCards.map((card) => insertCard(card, idToPut))
}

export const App: FC = () => {
  const [cards, setCards] = useState(DUMMY_CARDS)
  console.log(cards)
  const handleAddCard = (idToPut: number) => {
    setCards((prev) => {
      console.log(getNewCards(prev, idToPut))
      return getNewCards(prev, idToPut)
    })
  }

  return (
    <div style={{ height: '100%', padding: '100px 400px' }}>
      <Cards handleAddCard={handleAddCard} isFirst cards={cards} />
    </div>
  )
}
