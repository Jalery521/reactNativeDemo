import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'

import Loading from '@/components/Loading'
import { getSecondDetail, IsecondHouseDetail } from '@/api/second'
import DetailSwiper from './components/DetailSwiper'
import DetailParams from './components/DetailParams'
import DetailBrokers from './components/DetailBrokers'
import DetailEvaluates from './components/DetailEvaluates'
import DetailSchools from './components/DetailSchools'
import DetailGarden from './components/DetailGarden'
// import DetailSupport from './components/DetailSupport'
import DetailLoans from './components/DetailLoans'
import DetailTrend from './components/DetailTrend'
interface Iprops {
  id: string
  navigation: any
}

interface Istate {
  loading: boolean
  detail: IsecondHouseDetail
}

class SecondDetail extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: null,
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      loading: false,
      detail: {
        id: '',
        imgs: [],
        info: {
          traits: [],
          title: '',
          total: '',
          type: '',
          acreage: 0,
          price: 0,
          budget: '',
          orientation: '东',
          floor: 0,
          decoration: '',
          number: 0,
          entrustStartTime: '',
          entrustEndTime: '',
          subway: '',
        },
        brokers: [],
        evaluates: [],
        schools: [],
        garden: {
          name: '',
          price: 0,
          year: 0,
          category: '',
          area: '',
        },
        loans: [],
        trend: {
          houseCount: 0,
          trend: '',
          items: [],
        },
      },
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    const id = navigation.getParam('id')
    this.requestData(id)
  }

  requestData = async (id: string) => {
    this.setState({ loading: true })
    try {
      const { result } = await getSecondDetail(id)
      this.setState({
        detail: result,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  handleScroll = (e: Event) => {
    console.log(e)
  }

  render() {
    const { navigation } = this.props
    const { loading, detail } = this.state
    const {
      imgs,
      info,
      brokers,
      evaluates,
      schools,
      garden,
      loans,
      trend,
    } = detail
    const { name: gradenName } = garden
    return (
      <Loading isShow={loading}>
        <ScrollView
          style={{ backgroundColor: '#f5f5f5' }}
          onScroll={this.handleScroll}>
          <DetailSwiper imgs={imgs} navigation={navigation} />
          <DetailParams info={info} />
          <DetailBrokers brokers={brokers} />
          <DetailEvaluates evaluates={evaluates} />
          <DetailSchools schools={schools} />
          <DetailGarden garden={garden} />
          <DetailLoans loans={loans} />
          <DetailTrend trend={trend} gardenName={gradenName} />
          {/* <DetailSupport /> */}
        </ScrollView>
      </Loading>
    )
  }
}

export default SecondDetail
