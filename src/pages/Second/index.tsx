import React, { PureComponent } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import Icon from '@/components/Icon'
import commonStyle from '../common/style'
import { getSecondHouses, IsecondQueryForm } from '@/api/second'
import Footer from '@/components/Footer'
import Separator from '@/components/Separator'
import NavHeader from '@/components/NavHeader'
import Loading from '@/components/Loading'
import Filtration from '@/components/Filtration'
interface Iprops {
  navigation: any
}


interface Istate {
  queryForm: IsecondQueryForm
  tableData: IhouseItem[]
  loading: boolean
  isShow: boolean
  activeIndex: number
}

class SecondScreen extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: () => <NavHeader title='二手房' />,
  }
  constructor(props: Iprops) {
    super(props)
    this.state = {
      queryForm: {
        area: {
          type: 'area',
          value: '',
        },
        price: {
          type: 'total',
          value: '',
        },
        rent: '',
        house: '', // 户型
        more: [],
        currentPage: 1, // 当前页
        pageSize: 0, // 页容量
        order: 'default'
      },
      tableData: [],
      loading: false,
      isShow: false,
      activeIndex: -1  // 筛选类别高亮
    }
  }

  componentDidMount() {
    this.requestData()
  }

  changeIsShow = (isShow: boolean) => {
    this.setState({ isShow })
  }

  changeActiveIndex = (activeIndex: number) => {
    this.setState({ activeIndex })
  }

  changeQueryForm = (queryForm: IsecondQueryForm) => {
    this.setState({ queryForm, isShow: false })
    this.requestData()
  }

  requestData = async () => {
    this.setState({
      loading: true,
    })
    const { tableData, queryForm } = this.state
    try {
      const { result } = await getSecondHouses(queryForm)
      let newTableData = result
      if (tableData.length) {
        newTableData = [...tableData, ...result]
      }
      this.setState({
        tableData: newTableData,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { navigation } = this.props
    const { tableData, loading, isShow, activeIndex, queryForm } = this.state
    const { changeIsShow, changeActiveIndex, changeQueryForm } = this
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loading isShow={loading}>
          <View style={{ paddingTop: 100 }}>
            <View style={styles.searchWrapper}>
              <View style={styles.searchBox}>
                <Icon name='sousuo' size={16} color='#a0a0a0' />
                <TextInput placeholder='你想找的小区、商圈' />
              </View>
              <Filtration isShow={isShow} activeIndex={activeIndex} changeIsShow={changeIsShow} changeActiveIndex={changeActiveIndex} queryForm={queryForm} changeQueryForm={changeQueryForm} />
            </View>
            <FlatList
              data={tableData}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<Footer />}
              ItemSeparatorComponent={Separator}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={[
                      commonStyle.houseItem,
                      { paddingLeft: 15, paddingRight: 15 },
                    ]}
                    onPress={() =>
                      navigation.navigate('SecondDetail', { id: item.id })
                    }>
                    <View style={{ flexDirection: 'row' }}>
                      <Image style={commonStyle.itemImg} source={item} />
                      <View>
                        <Text style={commonStyle.itemDescTitle}>
                          {item.title}
                        </Text>
                        <Text style={commonStyle.itemDescTags}>
                          {item.desc}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={commonStyle.itemTotalPrice}>
                            {item.total}
                          </Text>
                          <Text style={commonStyle.itemAveragePrice}>
                            {item.price}
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          {(item.traits as any[]).map((trait) => {
                            return (
                              <Text style={commonStyle.itemTrait} key={trait}>
                                {trait}
                              </Text>
                            )
                          })}
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </Loading>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
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
    marginBottom: 8,
    alignItems: 'center',
    borderRadius: 6,
    height: 40,
  },
})

export default SecondScreen
