import React, {FC} from 'react'
import {Image, View, Dimensions, StyleSheet} from 'react-native'
const {width} = Dimensions.get('window')

interface Iprops {
  banner: {
    uri: string
  }
}

const HomeBanner: FC<Iprops> = ({banner}) => {
  return banner.uri ? (
    <View style={style.bannerWrapper}>
      <Image style={style.bannerImg} source={banner} />
    </View>
  ) : null
}
const style = StyleSheet.create({
  bannerWrapper: {
    height: 120,
  },
  bannerImg: {
    width,
    flex: 1,
  },
})
export default HomeBanner
