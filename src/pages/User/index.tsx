import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView} from 'react-native'
import UserInformation from './components/UserInformation'
import UserConcern from './components/UserConcern'
import UserProprietor from './components/UserProprietor'
import {withNavigation} from '../../utils'
interface Iprops {
  navigation: any
}

class User extends PureComponent<Iprops> {
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

const params = {title: '个人中心', isBack: true}

export default withNavigation(params)(User)
