import { createStackNavigator } from 'react-navigation-stack'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ResetPassword from '@/pages/Login/ResetPassword'
import SecondDetail from '@/pages/Second/SecondDetail'
import User from '@/pages/User'
import Second from '@/pages/Second'
import New from '@/pages/New'
import Overseas from '@/pages/Overseas'
export default createStackNavigator(
  {
    Home,
    User,
    Second,
    New,
    Overseas,
    Login,
    ResetPassword: ResetPassword as any,
    SecondDetail,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => {
      const currentRoute = navigation.state.routes[navigation.state.index]
      const showRoutes = ['User', 'Second', 'New', 'Overseas']
      return {
        drawerLockMode: showRoutes.includes(currentRoute.routeName)
          ? 'unlocked'
          : 'locked-closed',
      }
    },
  },
)
