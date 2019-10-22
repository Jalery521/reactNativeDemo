import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'

class User extends PureComponent {
  static navigationOptions = () => {
    return {
      header: null,
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>hello world</Text>
      </View>
    )
  }
}

export default User
