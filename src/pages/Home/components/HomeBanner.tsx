import React, {FC} from 'react'
import {Image, View} from 'react-native'
import {width} from './../../../utils'
const bannerWidth = width - 40
const bannerHeight = (bannerWidth / 640) * 200
interface Iprops {
  banner: {
    uri: string
  }
}

const HomeBanner: FC<Iprops> = ({banner}) => {
  return banner.uri ? (
    <View style={{marginTop: 15}}>
      <Image
        style={{width: bannerWidth, height: bannerHeight}}
        source={banner}
      />
    </View>
  ) : null
}
export default HomeBanner
