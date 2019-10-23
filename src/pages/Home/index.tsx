import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native'

import HomeSearch from './components/HomeSearch'
import HomeMenus from './components/HomeMenus'
import HomeCategories from './components/HomeCategories'
import HomePrice from './components/HomePrice'
import HomeBanner from './components/HomeBanner'
import HomeRecommends from './components/HomeRecommends'
import Loading from '../../utils/Loading'
import api from '../../api'
interface Iprops {
  navigation: any
}

interface Istate {
  price: {
    month: number
    average: number
    trend: number
  }
  recommends: IrecommendItem[]
  searchText: string
  recommendCategory: TrecommendCategory
  loading: boolean
  banner: {
    uri: string
  }
}

class Home extends PureComponent<Iprops, Istate> {
  static navigationOptions = () => {
    return {
      header: null,
    }
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      price: {
        month: 0,
        average: 0,
        trend: 0,
      },
      recommends: [],
      searchText: '',
      recommendCategory: 'second',
      loading: false,
      banner: {
        uri: '',
      },
    }
  }

  componentDidMount() {
    this.initData()
  }
  initData = async () => {
    this.setState({
      loading: true,
    })
    try {
      const [{result: assets}, {result: recommends}] = await Promise.all([
        api.getHomeAssets(),
        api.getRecommend(),
      ])
      const {price, banner} = assets
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

  requestData = async () => {
    this.setState({loading: true})
    try {
      const {result: recommends} = await api.getRecommend()
      this.setState({
        recommends,
      })
    } finally {
      this.setState({loading: false})
    }
  }

  changeSearchText = (searchText: string) => {
    this.setState({searchText})
  }
  changeRecommendCategory = (recommendCategory: TrecommendCategory) => {
    if (recommendCategory !== this.state.recommendCategory) {
      this.setState({recommendCategory})
      this.requestData()
    }
  }

  render() {
    const {
      recommends,
      searchText,
      recommendCategory,
      loading,
      price,
      banner,
    } = this.state
    const {changeSearchText, changeRecommendCategory} = this
    const {navigation} = this.props
    const searchProps = {searchText, changeSearchText, navigation}
    const recommendProps = {
      recommendCategory,
      recommends,
      changeRecommendCategory,
    }
    return (
      <>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <SafeAreaView>
          <ScrollView>
            <Loading isShow={loading}>
              <View style={{flex: 1}}>
                <HomeSearch {...searchProps} />
                <HomeMenus />
                <HomeCategories />
                <HomePrice price={price} />
                <HomeBanner banner={banner} />
                <HomeRecommends {...recommendProps} />
              </View>
            </Loading>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default Home
