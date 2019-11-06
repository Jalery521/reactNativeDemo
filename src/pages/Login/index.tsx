import React, {PureComponent} from 'react'
import {SafeAreaView, Text, View, ScrollView, Dimensions} from 'react-native'
import {withNavigation} from '../../utils'
import LoginByPassword from './components/LoginByPassword'
import LoginByPhone from './components/LoginByPhone'
const {height} = Dimensions.get('window')
interface Iprops {
  navigation: any
}

export type TpageType = 'loginByPhone' | 'loginByPassword'

interface Istate {
  pageType: TpageType
}

class LoginScreen extends PureComponent<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      pageType: 'loginByPhone',
    }
  }

  handleCutPageType = (pageType: TpageType) => {
    this.setState({
      pageType,
    })
  }

  render() {
    const {pageType} = this.state
    const {navigation} = this.props
    return (
      <ScrollView>
        <View style={{padding: 20, height: height - 80}}>
          {pageType === 'loginByPhone' ? (
            <LoginByPhone
              handleCutPageType={this.handleCutPageType}
              navigation={navigation}
            />
          ) : (
            <LoginByPassword
              handleCutPageType={this.handleCutPageType}
              navigation={navigation}
            />
          )}
          <Text
            style={{
              fontSize: 14,
              color: '#999',
              textAlign: 'center',
            }}>
            登录即表示同意《qfangwang隐私协议》及《qfangwang用户协议》
          </Text>
        </View>
      </ScrollView>
    )
  }
}
const params = {
  isBack: true,
  title: '登陆',
}
export default withNavigation(params)(LoginScreen)
