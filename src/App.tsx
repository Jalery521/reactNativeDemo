import React, {FC} from 'react'
import {createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import routes from './routes'
import store from './store'
const Navigator = createAppContainer(routes)
const App: FC = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

export default App
