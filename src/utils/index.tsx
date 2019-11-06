import React, {FC} from 'react'
import {
  Modal,
  View,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from 'react-native'
import Icon from '../components/Icon'
interface IwithNavigationParams {
  isBack?: boolean
  title: string
}

export const withNavigation = (params: IwithNavigationParams) => {
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

interface IloadingProps {
  isShow: boolean
  children: any
}
export const Loading: FC<IloadingProps> = ({isShow, children}) => {
  return isShow ? (
    <Modal transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator style={{alignSelf: 'center'}} />
      </View>
    </Modal>
  ) : (
    <View>{children}</View>
  )
}
