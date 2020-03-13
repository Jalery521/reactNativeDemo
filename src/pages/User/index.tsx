import React, { PureComponent } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'
import NavHeader from '@/components/NavHeader'
interface Iprops {
  navigation: any
}

class UserScreen extends PureComponent<Iprops> {
  static navigationOptions = {
    header: () => <NavHeader title='用户中心' isBack={true} />,
  }

  constructor(props: Iprops) {
    super(props)
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ padding: 15, paddingTop: 0 }}>
            <UserInformation navigation={navigation} />
            <UserConcern />
            <UserProprietor />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default UserScreen
