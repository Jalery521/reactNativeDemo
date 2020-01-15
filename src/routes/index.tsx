import stackNavigator from './stackNavigator'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { width } from '@/utils'
import DrawComponent from './DrawComponent'

export default createDrawerNavigator(
  {
    stackNavigator,
  },
  {
    defaultNavigationOptions: {
      drawerLockMode: 'locked-closed',
    },
    drawerWidth: width / 2,
    drawerPosition: 'right',
    contentComponent: DrawComponent,
  },
)
