import { type FC } from 'react'
import { type CardInterface } from '../types'
import { CARDS_GAP, CARD_SIZE } from '../data'
import { Cards } from '.'

interface Props {
  card: CardInterface
  isFirst: boolean
  handleAddCard: (idToPut: number) => void
}

export const Card: FC<Props> = ({ card, isFirst, handleAddCard }) => {
  const cardHasChildren = card.children.length > 0

  const cardConnectorWidth =
    card.children.length > 1
      ? (card.children.length - 1) * CARDS_GAP +
        CARD_SIZE * (card.children.length - 1)
      : 0

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => handleAddCard(card.id)}
        style={{
          width: CARD_SIZE,
          height: CARD_SIZE,
        }}
        className={`card${isFirst ? '' : ' cardTop'}${
          cardHasChildren ? ' cardBottom' : ''
        }`}
      >
        Карточка {card.id}
      </div>
      <div style={{ position: 'relative' }}>
        {cardHasChildren && (
          <Cards
            handleAddCard={handleAddCard}
            connectorWidth={cardConnectorWidth}
            isFirst={false}
            cards={card.children}
          />
        )}
      </div>
    </div>
  )
}
