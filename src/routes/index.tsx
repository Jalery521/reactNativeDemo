import {createStackNavigator} from 'react-navigation-stack'
import Home from '../pages/Home'
import User from '../pages/User'
import Login from '../pages/Login'
import ResetPassword from '../pages/Login/ResetPassword'
export default createStackNavigator(
  {
    Home,
    User: User as any,
    Login: Login as any,
    ForgetPassword: ResetPassword as any,
  },
  {
    initialRouteName: 'Home',
  },
)
