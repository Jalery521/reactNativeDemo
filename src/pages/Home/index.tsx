import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {IrecommendItem} from './index.d'
import HomeSearch from './components/HomeSearch'
import HomeMenus from './components/HomeMenus'
import HomeFeature from './components/HomeFeature'
import HomeCategories from './components/HomeCategories'
import HomePrice from './components/HomePrice'
import HomeBanner from './components/HomeBanner'
import HomeRecommends from './components/HomeRecommends'
import CommonFooter from '../../components/CommonFooter'
import {Loading} from '../../utils'
import {getHomeAssets} from '../../api'
interface Iprops {
  navigation: any
}

interface Istate {
  price: {
    month: number
    average: number
    trend: number
  }
  recommends: {
    new: IrecommendItem[]
    rent: IrecommendItem[]
    second: IrecommendItem[]
  }
  loading: boolean
  banner: {
    uri: string
  }
}

class Home extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: null,
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      price: {
        month: 0,
        average: 0,
        trend: 0,
      },
      recommends: {
        second: [],
        rent: [],
        new: [],
      },
      loading: false,
      banner: {
        uri: '',
      },
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
      const {result} = await getHomeAssets()
      const {price, banner, recommends} = result
      this.setState({
        price,
        banner,
        recommends,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const {recommends, loading, price, banner} = this.state
    const {navigation} = this.props
    return (
      <>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <SafeAreaView>
          <ScrollView>
            <Loading isShow={loading}>
              <View style={{backgroundColor: '#f5f5f5'}}>
                <View
                  style={{
                    padding: 20,
                    paddingTop: 10,
                    backgroundColor: 'white',
                  }}>
                  <HomeSearch navigation={navigation} />
                  <HomeMenus />
                  <HomeFeature />
                  <HomeCategories />
                  <HomePrice price={price} />
                  <HomeBanner banner={banner} />
                  <HomeRecommends recommends={recommends} />
                </View>
                <CommonFooter siteName='深圳' />
              </View>
            </Loading>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default Home
