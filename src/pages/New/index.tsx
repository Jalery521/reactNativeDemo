import React, {PureComponent} from 'react'
import {View, StyleSheet, SafeAreaView, TextInput} from 'react-native'
import {getNewAssets} from '../../api'
import Icon from '../../components/Icon'
import NavHeader from '../../components/NavHeader'
import Loading from '../../components/Loading'
import NewSwiper from './components/NewSwiper'
import NewMenus from './components/NewMenus'
import NewInformation from './components/NewInformation'
export interface Iinformation {
  id: string
  title: string
}
interface Iprops {
  navigation: any
}

interface Istate {
  banners: Ibanner[]
  information: Iinformation[][]
  loading: boolean
}

class NewScreen extends PureComponent<Iprops, Istate> {
  static navigationOptions = ({navigation}: Iprops) => {
    const params = {
      navigation,
      title: '新房',
    }
    return {
      header: () => <NavHeader {...params} />,
    }
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      banners: [],
      loading: false,
      information: [],
    }
  }

  componentDidMount() {
    this.requestData()
  }

  requestData = async () => {
    this.setState({
      loading: true,
    })
    try {
      const {result} = await getNewAssets()
      const {banners, information} = result
      this.setState({
        banners,
        information,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const {loading, banners, information} = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
        <Loading isShow={loading}>
          <View style={style.newWrapper}>
            <View style={style.searchWrapper}>
              <View style={style.searchBox}>
                <Icon name='sousuo' size={16} color='#a0a0a0' />
                <TextInput placeholder='你想找的楼盘名、商圈' />
              </View>
            </View>
            <NewSwiper banners={banners} />
            <NewMenus />
            <NewInformation information={information} />
          </View>
        </Loading>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  newWrapper: {
    padding: 15,
    paddingTop: 60,
  },
  searchWrapper: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    alignItems: 'center',
    borderRadius: 6,
    height: 40,
  },
})

export default NewScreen
