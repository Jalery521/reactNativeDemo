import React, { PureComponent } from 'react'
import { View, ImageBackground, Text, StyleSheet, FlatList } from 'react-native'
import NavHeader from '@/components/NavHeader'
import { width } from '@/utils'
import Loading from '@/components/Loading'
import { getOverseasArea, IareaItem } from '@/api'
const bannerHeight = (width / 375) * 180
const areaItemWidth = (width - 30 - 15) / 2
const areaItemHeight = areaItemWidth * 1.2
interface Iprops {
  navigation: any
}

interface Istate {
  loading: boolean
  areaList: IareaItem[]
}

class Overseas extends PureComponent<Iprops, Istate> {
  static navigationOptions = ({ navigation }: Iprops) => {
    const params = {
      title: '海外房产',
      navigation,
    }
    return {
      header: () => <NavHeader {...params} />,
    }
  }

  constructor(props: Iprops) {
    super(props)
    this.state = {
      loading: false,
      areaList: [],
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
      const { result } = await getOverseasArea()
      this.setState({
        areaList: result,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { loading, areaList } = this.state
    return (
      <View style={{ backgroundColor: '#f3f3f3' }}>
        <Loading isShow={loading}>
          <FlatList
            data={areaList}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => item.enName}
            ListHeaderComponent={<HeaderComponent />}
            columnWrapperStyle={styles.areaContent}
            renderItem={({ item }) => {
              return (
                <ImageBackground style={styles.areaItem} source={item}>
                  <View style={styles.areaName}>
                    <Text style={styles.cnName}>{item.cnName}</Text>
                    <Text style={styles.enName}>{item.enName}</Text>
                  </View>
                </ImageBackground>
              )
            }}
          />
        </Loading>
      </View>
    )
  }
}

const HeaderComponent = () => {
  return (
    <View style={{ backgroundColor: '#f3f3f3' }}>
      <ImageBackground
        style={styles.bannerWrapper}
        source={{
          uri:
            'https://i.qfangimg.com/resource/mobile/overseas/img/index-banner.png',
        }}></ImageBackground>
      <Text style={styles.areaTitle}>按区域找房</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bannerWrapper: {
    width: '100%',
    height: bannerHeight,
    marginBottom: 15,
  },
  areaTitle: {
    fontSize: 18,
    color: '#333333',
    fontWeight: 'bold',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  areaContent: {
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ffffff',
  },
  areaItem: {
    width: areaItemWidth,
    height: areaItemHeight,
    marginBottom: 10,
  },
  areaName: {
    position: 'absolute',
    left: 15,
    right: 0,
    bottom: 20,
  },
  cnName: {
    color: '#ffffff',
    fontSize: 16,
  },
  enName: {
    color: 'rgba(255,255,255,.7)',
    fontSize: 16,
  },
})

export default Overseas
