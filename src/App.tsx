import { useRef, type FC, useEffect, useState } from 'react'
import { DUMMY_CARDS, type ICard } from './data'

const CARDS_GAP = 100
const CARD_SIZE = 140

export const App: FC = () => {
  return (
    <div style={{ height: '100%', padding: '100px 400px' }}>
      <Cards isFirst cards={DUMMY_CARDS} />
    </div>
  )
}

interface CardsProps {
  cards: ICard[]
  isFirst: boolean
  connectorWidth?: number
}

export const Cards: FC<CardsProps> = ({ cards, isFirst, connectorWidth }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [wrapperWidth, setWrapperWidth] = useState(0)

  useEffect(() => {
    setWrapperWidth(wrapperRef.current?.clientWidth || 0)
  }, [wrapperRef.current?.clientWidth])
  if (wrapperWidth) {
    console.log(cards[0].id, wrapperWidth, connectorWidth)
  }

  return (
    <div
      ref={wrapperRef}
      className={`cardsWrapper${isFirst ? '' : ' cardsWrapperTop'}`}
      style={{
        marginTop: isFirst ? '' : '70px',
        columnGap: CARDS_GAP,
      }}
    >
      <div
        className='connector'
        style={{
          width: !isFirst
            ? wrapperWidth !== connectorWidth
              ? wrapperWidth - CARD_SIZE
              : connectorWidth
            : '',
        }}
      ></div>
      {cards.map((card) => (
        <Card
          connectorWidth={connectorWidth}
          isFirst={isFirst}
          card={card}
          key={card.id}
        />
      ))}
    </div>
  )
}

export const Card: FC<{
  card: ICard
  isFirst: boolean
  connectorWidth?: number
}> = ({ card, isFirst }) => {
  const cardHasChildren = card.children.length > 0

  const cardConnectorWidth =
    card.children.length === 1
      ? 0
      : (card.children.length - 1) * CARDS_GAP +
        CARD_SIZE * (card.children.length - 1)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
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
            connectorWidth={cardConnectorWidth}
            isFirst={false}
            cards={card.children}
          />
        )}
      </div>
    </div>
  )
}
