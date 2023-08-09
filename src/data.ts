export interface ICard {
  id: number
  children: ICard[]
}

const generateIdInstance = () => {
  let id = 1

  return () => {
    return id++
  }
}

const generateId = generateIdInstance()

export const DUMMY_CARDS: ICard[] = [
  {
    id: generateId(),
    children: [
      {
        id: generateId(),
        children: [],
      },
      {
        id: generateId(),
        children: [],
      },
      {
        id: generateId(),
        children: [
          {
            id: generateId(),
            children: [],
          },
        ],
      },
      {
        id: generateId(),
        children: [
          {
            id: generateId(),
            children: [],
          },
          {
            id: generateId(),
            children: [],
          },
          {
            id: generateId(),
            children: [
              {
                id: generateId(),
                children: [],
              },
            ],
          },
          {
            id: generateId(),
            children: [],
          },
          {
            id: generateId(),
            children: [],
          },
        ],
      },
      {
        id: generateId(),
        children: [],
      },
    ],
  },
]
