import React, { PureComponent } from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import NavHeader from '@/components/NavHeader'
import LoginByPassword from './components/LoginByPassword'
import LoginByPhone from './components/LoginByPhone'
import { height } from '@/utils'
interface Iprops {
  navigation: any
}

export type TpageType = 'loginByPhone' | 'loginByPassword'

interface Istate {
  pageType: TpageType
}

class LoginScreen extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: () => <NavHeader title='登陆' isBack={true} isScan={true} />,
  }

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
    const { pageType } = this.state
    const { navigation } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ padding: 15, height: height - 80 }}>
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
      </SafeAreaView>
    )
  }
}

export default LoginScreen
