import {createStackNavigator} from 'react-navigation-stack'
import Home from '../pages/Home'
import User from '../pages/User'

export default createStackNavigator(
  {
    Home,
    User: User as any,
  },
  {
    initialRouteName: 'Home',
  },
)
