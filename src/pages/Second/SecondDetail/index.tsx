import React, { PureComponent } from 'react'
import { View, ImageBackground, Text, ScrollView } from 'react-native'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
interface Iprops {
  id: string
  navigation: any
}

interface Istate {
  loading: boolean
}

class SecondDetail extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: null,
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    const id = navigation.getParams('id')
    this.requestData(id)
  }

  requestData = async (id: string) => {}

  render() {
    const { loading } = this.state
    return (
      <Loading isShow={loading}>
        <ScrollView></ScrollView>
      </Loading>
    )
  }
}

export default SecondDetail
