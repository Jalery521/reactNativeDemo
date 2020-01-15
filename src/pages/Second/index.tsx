import React, { PureComponent } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native'
import Icon from '@/components/Icon'
import commonStyle from '../common/style'
import { getSecondHouses } from '@/api'
import Footer from '@/components/Footer'
import Separator from '@/components/Separator'
import NavHeader from '@/components/NavHeader'
import Loading from '@/components/Loading'
interface Iprops {
  navigation: any
}

interface Istate {
  tableData: IhouseItem[]
  loading: boolean
}

class SecondScreen extends PureComponent<Iprops, Istate> {
  static navigationOptions = {
    header: () => <NavHeader title='二手房' />,
  }
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
    const { tableData } = this.state
    try {
      const { result } = await getSecondHouses()
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
    const { tableData, loading } = this.state
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loading isShow={loading}>
          <View style={{ paddingTop: 60 }}>
            <View style={styles.searchWrapper}>
              <View style={styles.searchBox}>
                <Icon name='sousuo' size={16} color='#a0a0a0' />
                <TextInput placeholder='你想找的小区、商圈' />
              </View>
            </View>
            <FlatList
              data={tableData}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<Footer />}
              ItemSeparatorComponent={Separator}
              renderItem={({ item }) => {
                return (
                  <View
                    style={[
                      commonStyle.houseItem,
                      { paddingLeft: 15, paddingRight: 15 },
                    ]}>
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
    alignItems: 'center',
    borderRadius: 6,
    height: 40,
  },
})

export default SecondScreen
