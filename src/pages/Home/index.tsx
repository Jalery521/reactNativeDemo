import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {IhotHistoryItem} from './index.d'
import HomeHeader from './components/HomeHeader'
import HomeSearch from './components/HomeSearch'
import HomeMenus from './components/HomeMenus'
import HomeFeature from './components/HomeFeature'
import HomeCategories from './components/HomeCategories'
import HomePrice from './components/HomePrice'
import HomeBanner from './components/HomeBanner'
import HomeRecommends from './components/HomeRecommends'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import {getHomeAssets} from '../../api'
interface Iprops {
  navigation: any
}

interface Istate {
  priceTrend: {
    month: number
    average: number
    trend: number
  }
  recommends: {
    newRecommends: IhouseItem[]
    rentRecommends: IhouseItem[]
    secondRecommends: IhouseItem[]
  }
  loading: boolean
  showSearch: boolean
  banner: {
    uri: string
  }
  hotSearch: IhotHistoryItem[]
}

class HomeScreen extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: null,
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      priceTrend: {
        month: 0,
        average: 0,
        trend: 0,
      },
      recommends: {
        secondRecommends: [],
        rentRecommends: [],
        newRecommends: [],
      },
      loading: false,
      banner: {
        uri: '',
      },
      hotSearch: [],
      showSearch: false,
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
      const {priceTrend, banner, recommends, hotSearch} = result
      this.setState({
        priceTrend,
        banner,
        recommends,
        hotSearch,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }
  handleChangeIsShow = () => {
    const {showSearch} = this.state
    this.setState({
      showSearch: !showSearch,
    })
  }

  render() {
    const {
      recommends,
      loading,
      priceTrend,
      banner,
      showSearch,
      hotSearch,
    } = this.state
    const {navigation} = this.props
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <Loading isShow={loading}>
          <ScrollView>
            {showSearch ? (
              <HomeSearch
                handleChangeIsShow={this.handleChangeIsShow}
                hotSearch={hotSearch}
              />
            ) : (
              <View style={{backgroundColor: '#f5f5f5'}}>
                <View
                  style={{
                    padding: 20,
                    paddingTop: 10,
                    backgroundColor: '#fff',
                  }}>
                  <HomeHeader
                    handleChangeIsShow={this.handleChangeIsShow}
                    navigation={navigation}
                  />
                  <HomeMenus navigation={navigation} />
                  <HomeFeature />
                  <HomeCategories />
                  <HomePrice priceTrend={priceTrend} />
                  <HomeBanner banner={banner} />
                  <HomeRecommends recommends={recommends} />
                </View>
                <Footer siteName='深圳' />
              </View>
            )}
          </ScrollView>
        </Loading>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
