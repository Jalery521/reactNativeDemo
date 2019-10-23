import React, {FC} from 'react'
import {Image, View, Dimensions} from 'react-native'
const {width} = Dimensions.get('window')

interface Iprops {
  banner: {
    uri: string
  }
}

const HomeBanner: FC<Iprops> = ({banner}) => {
  return banner.uri ? (
    <View style={{height: 120}}>
      <Image style={{width, flex: 1}} source={banner} />
    </View>
  ) : null
}

export default HomeBanner
