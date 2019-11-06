import React, {PureComponent} from 'react'
import {View, Text, TextInput, Image} from 'react-native'
import {withNavigation} from '../../utils'
interface Iprops {
  navigation: any
}

interface Istate {}

class SecondScreen extends PureComponent<Iprops> {
  constructor(props: Iprops) {
    super(props)
  }

  render() {
    return <View>我是二手房</View>
  }
}

const params = {
  isBack: false,
  title: '二手房',
}

export default withNavigation(params)(SecondScreen)
