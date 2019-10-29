import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
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
          <View style={style.userWrapper}>
            <UserInformation />
            <UserConcern />
            <UserProprietor />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  userWrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
})

export default User
