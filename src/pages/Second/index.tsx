import React, {PureComponent} from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native'
import Icon from '../../components/Icon'
import commonStyle from '../common/style'
import {getSecondHouses} from '../../api'
import {height} from '../../utils'
import Footer from '../../components/Footer'
import Separator from '../../components/Separator'
import NavHeader from '../../components/NavHeader'
import Loading from '../../components/Loading'
interface Iprops {
  navigation: any
}

interface Istate {
  tableData: any[]
  loading: boolean
}

class SecondScreen extends PureComponent<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      tableData: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.requestData()
  }

  requestData = async () => {
    this.setState({
      loading: true,
    })
    const {tableData} = this.state
    try {
      const {result} = await getSecondHouses()
      let newTableData: any[] = result
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
    const {tableData, loading} = this.state
    return (
      <SafeAreaView style={{flex: 1}}>
        <Loading isShow={loading}>
          <View style={{paddingTop: 60}}>
            <View style={style.searchWrapper}>
              <View style={style.searchBox}>
                <Icon name='sousuo' size={16} color='#a0a0a0' />
                <TextInput placeholder='你想找的小区、商圈' />
              </View>
            </View>
            <FlatList
              data={tableData}
              ListFooterComponent={<Footer />}
              // ListHeaderComponent={

              // }
              ItemSeparatorComponent={Separator}
              renderItem={({item}: any) => {
                return (
                  <View
                    key={item.id}
                    style={[
                      commonStyle.houseItem,
                      {paddingLeft: 20, paddingRight: 20},
                    ]}>
                    <View style={{flexDirection: 'row'}}>
                      <Image style={commonStyle.itemImg} source={item} />
                      <View>
                        <Text style={commonStyle.descTitle}>{item.title}</Text>
                        <Text style={commonStyle.descTags}>{item.desc}</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={commonStyle.totalPrice}>
                            {item.total}
                          </Text>
                          <Text style={commonStyle.averagePrice}>
                            {item.price}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          {(item.traits as any[]).map(trait => {
                            return (
                              <Text style={commonStyle.houseTrait} key={trait}>
                                {trait}
                              </Text>
                            )
                          })}
                        </View>
                      </View>
                    </View>
                  </View>
                )
              }}
            />
          </View>
        </Loading>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  searchWrapper: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
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

const params = {
  isBack: false,
  title: '二手房',
}

export default NavHeader(params)(SecondScreen)
