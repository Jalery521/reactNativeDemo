import { createStackNavigator } from 'react-navigation-stack'
import Home from '@/pages/Home'
import User from '@/pages/User'
import Login from '@/pages/Login'
import ResetPassword from '@/pages/Login/ResetPassword'
import Second from '@/pages/Second'
import SecondDetail from '@/pages/Second/SecondDetail'
import New from '@/pages/New'
import Overseas from '@/pages/Overseas'

export default createStackNavigator({
  Home,
  User,
  Login,
  Second,
  New,
  Overseas,
  ResetPassword: ResetPassword as any,
  SecondDetail,
})
