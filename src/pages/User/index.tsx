import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView} from 'react-native'
import HeaderLeft from '../../components/HeaderNavigation/HeaderLeft'
import HeaderRight from '../../components/HeaderNavigation/HeaderRight'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'

interface Iprops {
  navigation: any
}

class User extends PureComponent<Iprops> {
  static navigationOptions = ({navigation}: Iprops) => {
    return {
      title: '个人中心',
      headerLeft: () => <HeaderLeft navigation={navigation} />,
      headerRight: () => <HeaderRight navigation={navigation} />,
    }
  }

  constructor(props: Iprops) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView>
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
