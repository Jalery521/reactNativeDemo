import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {IrecommendItem, IhotHistoryItem} from './index.d'
import HomeHeader from './components/HomeHeader'
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
  isShow: boolean
  banner: {
    uri: string
  }
  hotSearch: IhotHistoryItem[]
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
      hotSearch: [],
      isShow: false,
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
      console.log(result)
      const {price, banner, recommends, hotSearch} = result
      this.setState({
        price,
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
    const {isShow} = this.state
    this.setState({
      isShow: !isShow,
    })
  }

  render() {
    const {recommends, loading, price, banner, isShow, hotSearch} = this.state
    const {navigation} = this.props
    return (
      <>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <SafeAreaView>
          <ScrollView>
            <Loading isShow={loading}>
              <HomeSearch
                isShow={isShow}
                handleChangeIsShow={this.handleChangeIsShow}
                hotSearch={hotSearch}
              />
              <View style={{backgroundColor: '#f5f5f5'}}>
                <View
                  style={{
                    padding: 20,
                    paddingTop: 10,
                    backgroundColor: 'white',
                  }}>
                  <HomeHeader
                    handleChangeIsShow={this.handleChangeIsShow}
                    navigation={navigation}
                  />
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
