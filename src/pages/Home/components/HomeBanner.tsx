import React, {FC} from 'react'
import {Image, View} from 'react-native'
import {width} from './../../../utils'
const bannerWidth = width - 30
const bannerHeight = (bannerWidth / 640) * 200
interface Iprops {
  banner: Ibanner
}

const HomeBanner: FC<Iprops> = ({banner}) => {
  return banner.uri ? (
    <View style={{marginLeft: 15, marginRight: 15}}>
      <Image
        style={{width: bannerWidth, height: bannerHeight}}
        source={banner}
      />
    </View>
  ) : null
}
export default HomeBanner
