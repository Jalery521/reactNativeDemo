import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView} from 'react-native'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'
import HeaderNavigation from '../../components/HeaderNavigation'
interface Iprops {
  navigation: any
}

class User extends PureComponent<Iprops> {
  static navigationOptions = {
    header: null,
  }

  constructor(props: Iprops) {
    super(props)
  }
  render() {
    const {navigation} = this.props
    return (
      <SafeAreaView>
        <HeaderNavigation title='个人中心' navigation={navigation} />
        <ScrollView>
          <View style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
            <UserInformation />
            <UserConcern />
            <UserProprietor />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default User
