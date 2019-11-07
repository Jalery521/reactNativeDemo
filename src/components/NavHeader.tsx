import React from 'react'
import Icon from './Icon'
interface IwithNavigationParams {
  isBack?: boolean
  title: string
}

export const NavHeader = (params: IwithNavigationParams) => {
  const {isBack, title} = params
  return (WrappedComponent: any) => {
    const {displayName, name} = WrappedComponent
    return class extends WrappedComponent {
      static displayName = `HOC-${displayName | name}`
      static navigationOptions = ({navigation}: any) => {
        return {
          title,
          headerLeft: () => (
            <Icon
              style={{padding: 15}}
              name={isBack ? 'fanhui' : 'shouye'}
              onPress={() =>
                isBack ? navigation.goBack() : navigation.navigate('Home')
              }
              size={20}
              color='#666'
            />
          ),
          headerRight: () => (
            <Icon style={{padding: 15}} name='daohang' size={20} color='#333' />
          ),
        }
      }
      render() {
        return super.render()
      }
    }
  }
}

export default NavHeader
