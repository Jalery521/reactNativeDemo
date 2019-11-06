import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView} from 'react-native'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'
import {withNavigation} from '../../utils'
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
        <View style={{padding: 15, paddingTop: 0}}>
          <UserInformation navigation={navigation} />
          <UserConcern />
          <UserProprietor />
        </View>
      </ScrollView>
    )
  }
}

const params = {title: '个人中心', isBack: true}
export default withNavigation(params)(UserScreen)
