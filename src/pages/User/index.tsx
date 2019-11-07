import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView} from 'react-native'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'
import NavHeader from '../../components/NavHeader'
interface Iprops {
  navigation: any
  isLogined: boolean
}

class UserScreen extends PureComponent<Iprops> {
  constructor(props: Iprops) {
    super(props)
  }
  render() {
    const {navigation} = this.props
    return (
      <ScrollView>
        <SafeAreaView style={{flex: 1}}>
          <View style={{padding: 15, paddingTop: 0}}>
            <UserInformation navigation={navigation} />
            <UserConcern />
            <UserProprietor />
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const params = {title: '个人中心', isBack: true}
export default NavHeader(params)(UserScreen)
