import React, { PureComponent } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from '@/components/Icon'
import Loading from '@/components/Loading'
import { getSecondDetail, IsecondDetail } from '@/api'
import { width } from '@/utils'
const swiperHeight = (width / 375) * 250
interface Iprops {
  id: string
  navigation: any
}

interface Istate {
  loading: boolean
  detail: IsecondDetail
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
        trait: [],
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
        broker: [],
        evaluate: [],
        school: [],
        graden: {
          price: 0,
          year: 0,
          category: '',
          area: '',
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

  render() {
    const { navigation } = this.props
    const { loading, detail } = this.state
    const { imgs, trait, broker, evaluate, school } = detail
    return (
      <Loading isShow={loading}>
        <ScrollView>
          <View style={styles.topWrapper}>
            {imgs.length ? (
              <Swiper autoplay={true}>
                {imgs.map((uri) => {
                  return (
                    <View style={styles.swiperItem} key={uri}>
                      <Image style={styles.itemImg} source={{ uri }} />
                    </View>
                  )
                })}
              </Swiper>
            ) : null}
            <View style={styles.topButtonBox}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.topButton}
                onPress={() => navigation.goBack()}>
                <Icon name='fanhui' size={24} color='#ffffff' />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.topButton}>
                <Icon name='test1' size={24} color='#ffffff' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailWrapper}>
            <View style={styles.traitBox}>
              {trait.length
                ? trait.map((item) => {
                    return (
                      <Text key={item} style={styles.traitItem}>
                        {item}
                      </Text>
                    )
                  })
                : null}
            </View>
            <Text style={styles.titleStyle}>{detail.title}</Text>
            <View style={styles.baseInfo}>
              <View
                style={[
                  styles.baseItem,
                  {
                    borderRightColor: '#eaeaea',
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                  },
                ]}>
                <Text style={styles.baseValue}>{detail.total}</Text>
                <Text style={styles.baseLabel}>售价</Text>
              </View>
              <View
                style={[
                  styles.baseItem,
                  {
                    borderRightColor: '#eaeaea',
                    borderRightWidth: 1,
                    borderStyle: 'solid',
                  },
                ]}>
                <Text style={styles.baseValue}>{detail.type}</Text>
                <Text style={styles.baseLabel}>房型</Text>
              </View>
              <View style={styles.baseItem}>
                <Text style={styles.baseValue}>
                  {detail.acreage.toFixed(2)}㎡
                </Text>
                <Text style={styles.baseLabel}>建筑面积</Text>
              </View>
            </View>
            <View style={styles.houseInfo}>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>单价：</Text>
                <Text>{detail.price}</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>费用预算：</Text>
                <Text>{detail.budget}</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>朝向：</Text>
                <Text>{detail.orientation}</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>楼层：</Text>
                <Text>{detail.floor}</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>装修：</Text>
                <Text>{detail.decoration}</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>电梯：</Text>
                <Text>没有电梯</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>房源编码：</Text>
                <Text>{detail.number}</Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>委托时间：</Text>
                <Text>
                  {detail.entrustStartTime} - {detail.entrustEndTime}
                </Text>
              </View>
              <View style={styles.houseInfoItem}>
                <Text style={styles.houseInfoLabel}>地铁：</Text>
                <Text>{detail.subway}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Loading>
    )
  }
}

const styles = StyleSheet.create({
  topWrapper: {
    height: swiperHeight,
    position: 'relative',
  },
  swiperItem: {
    flex: 1,
  },
  itemImg: {
    width,
    flex: 1,
  },
  topButtonBox: {
    position: 'absolute',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    top: 10,
    right: 15,
    left: 15,
  },
  topButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  detailWrapper: {
    padding: 15,
  },
  traitBox: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  traitItem: {
    color: '#75919e',
    fontSize: 12,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#effaff',
    marginRight: 3,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 15,
  },
  baseInfo: {
    borderStyle: 'solid',
    borderColor: '#f0f0f0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  baseItem: {
    flex: 1,
    height: 40,
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  baseLabel: {
    fontSize: 12,
    color: '#999',
  },
  baseValue: {
    color: '#ff6d6d',
    fontSize: 16,
  },
  houseInfo: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  houseInfoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  houseInfoLabel: {
    width: 80,
    color: '#999',
  },
})

export default SecondDetail
