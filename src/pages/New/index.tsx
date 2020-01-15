import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native'
import { getNewAssets, InewAssetsResult } from '@/api'
import Icon from '@/components/Icon'
import NavHeader from '@/components/NavHeader'
import Loading from '@/components/Loading'
import Footer from '@/components/Footer'
import NewSwiper from './components/NewSwiper'
import NewMenus from './components/NewMenus'
import NewInformation from './components/NewInformation'
import NewHot from './components/NewHot'
import NewEvaluation from './components/NewEvaluation'
import NewLook from './components/NewLook'
import NewDiscount from './components/NewDiscount'
import NewOpening from './components/NewOpening'
interface Iprops {
  navigation: any
}

interface Istate extends InewAssetsResult {
  loading: boolean
}

class NewScreen extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: () => <NavHeader title='新房' />,
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      banners: [],
      loading: false,
      information: [],
      hot: [],
      evaluation: { id: '', title: '', imgs: [] },
      lookList: [],
      discountList: [],
      openList: [],
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
      const { result } = await getNewAssets()
      const {
        banners,
        information,
        hot,
        evaluation,
        lookList,
        discountList,
        openList,
      } = result
      this.setState({
        banners,
        information,
        hot,
        evaluation,
        lookList,
        discountList,
        openList,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const {
      loading,
      banners,
      information,
      hot,
      evaluation,
      lookList,
      discountList,
      openList,
    } = this.state
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loading isShow={loading}>
          <View style={styles.newWrapper}>
            <View style={styles.searchWrapper}>
              <View style={styles.searchBox}>
                <Icon name='sousuo' size={16} color='#a0a0a0' />
                <TextInput placeholder='你想找的楼盘名、商圈' />
              </View>
            </View>
            <ScrollView>
              <NewSwiper banners={banners} />
              <NewMenus />
              <NewInformation information={information} />
              <NewHot hot={hot} />
              <NewEvaluation evaluation={evaluation} />
              <NewLook lookList={lookList} />
              <NewDiscount discountList={discountList} />
              <NewOpening openList={openList} />
              <Footer />
            </ScrollView>
          </View>
        </Loading>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  newWrapper: {
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
