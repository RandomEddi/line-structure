import { type FC } from 'react'
import { DUMMY_CARDS } from './data'
import { Cards } from './components'

export const App: FC = () => {
  return (
    <div style={{ height: '100%', padding: '100px 400px' }}>
      <Cards isFirst cards={DUMMY_CARDS} />
    </div>
  )
}


