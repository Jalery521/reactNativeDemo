import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../pages/Home'
import UserScreen from '../pages/User'
import LoginScreen from '../pages/Login'
import ResetPasswordScreen from '../pages/Login/ResetPassword'
import SecondScreen from '../pages/Second'
export default createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen as any,
    Login: LoginScreen as any,
    ForgetPassword: ResetPasswordScreen as any,
    Second: SecondScreen as any,
  },
  {
    initialRouteName: 'Home',
  },
)
