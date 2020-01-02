import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '@/pages/Home'
import UserScreen from '@/pages/User'
import LoginScreen from '@/pages/Login'
import ResetPasswordScreen from '@/pages/Login/ResetPassword'
import SecondScreen from '@/pages/Second'
import NewScreen from '@/pages/New'
export default createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
    Login: LoginScreen,
    ResetPassword: ResetPasswordScreen as any,
    Second: SecondScreen,
    New: NewScreen,
  },
  {
    initialRouteName: 'Home',
  },
)
