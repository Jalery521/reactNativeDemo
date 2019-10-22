import React, {PureComponent} from 'react'
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native'

import HomeSearch from './components/HomeSearch'
import HomeMenus from './components/HomeMenus'
import HomeCategories from './components/HomeCategories'
import HomeCarousels from './components/HomeCarousels'
import HomeRecommends from './components/HomeRecommends'
import Loading from '../../utils/Loading'
import api from '../../api'
interface Iprops {
  navigation: any
}

interface Istate {
  businessMenus: ImenuItem[]
  categories: IcategoryItem[]
  carousels: Icarousel[]
  recommends: IrecommendItem[]
  searchText: string
  recommendCategory: TrecommendCategory
  loading: boolean
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
      businessMenus: [],
      categories: [],
      carousels: [],
      recommends: [],
      searchText: '',
      recommendCategory: 'second',
      loading: false,
    }
  }

  componentDidMount() {
    this.requestStaticData()
    this.requestRecommendData()
  }

  requestStaticData = async () => {
    this.setState({
      loading: true,
    })
    try {
      const {result} = await api.getHomeStatic()
      const {businessMenus, categories, carousels} = result
      this.setState({
        businessMenus,
        categories,
        carousels,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  requestRecommendData = async () => {
    try {
      const {result: recommends} = await api.getRecommend()
      this.setState({
        recommends,
      })
    } catch (err) {
      console.log(err)
    }
  }

  changeSearchText = (searchText: string) => {
    this.setState({searchText})
  }
  changeRecommendCategory = (recommendCategory: TrecommendCategory) => {
    if (recommendCategory !== this.state.recommendCategory) {
      this.setState({recommendCategory})
      this.requestRecommendData()
    }
  }

  render() {
    const {
      businessMenus,
      categories,
      carousels,
      recommends,
      searchText,
      recommendCategory,
      loading,
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
                <HomeMenus menus={businessMenus} />
                <HomeCategories categories={categories} />
                <HomeCarousels carousels={carousels} />
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
