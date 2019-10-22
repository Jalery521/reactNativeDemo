import React, {FC} from 'react'
import {createAppContainer} from 'react-navigation'
import routes from './routes'

const Navigator = createAppContainer(routes)
const App: FC = () => {
  return <Navigator />
}

export default App
