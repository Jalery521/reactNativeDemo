import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, Text} from 'react-native'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'
class User extends PureComponent {
  static navigationOptions = () => {
    return {
      header: null,
    }
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1}}>
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
