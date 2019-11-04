import {createStackNavigator} from 'react-navigation-stack'
import Home from '../pages/Home'
import User from '../pages/User'
import Login from '../pages/Login'
import ForgetPassword from '../pages/Login/ForgetPassword'
export default createStackNavigator(
  {
    Home,
    User: User as any,
    Login: Login as any,
    ForgetPassword: ForgetPassword as any,
  },
  {
    initialRouteName: 'Home',
  },
)
