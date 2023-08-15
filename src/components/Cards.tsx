import { useEffect, type FC, useState, useRef } from 'react'
import { CardInterface } from '../types'
import { CARDS_GAP, CARD_SIZE } from '../data'
import { Card } from '.'

interface Props {
  cards: CardInterface[]
  isFirst: boolean
  connectorWidth?: number
  handleAddCard: (idToPut: number) => void
}

export const Cards: FC<Props> = ({
  cards,
  isFirst,
  connectorWidth,
  handleAddCard,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [wrapperWidth, setWrapperWidth] = useState(0)

  useEffect(() => {
    setWrapperWidth(wrapperRef.current?.clientWidth || 0)
  }, [wrapperRef.current?.clientWidth])

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
          width:
            !isFirst && cards.length > 1
              ? wrapperRef.current?.clientWidth !== connectorWidth
                ? wrapperWidth - CARD_SIZE
                : connectorWidth
              : 0,
        }}
      ></div>
      {cards.map((card) => (
        <Card
          handleAddCard={handleAddCard}
          isFirst={isFirst}
          card={card}
          key={card.id}
        />
      ))}
    </div>
  )
}
