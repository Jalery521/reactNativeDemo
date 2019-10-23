import React, {FC} from 'react'
import {Image, View, Dimensions} from 'react-native'
const {width} = Dimensions.get('window')
const HomeBanner: FC = () => {
  return (
    <View style={{height: 120}}>
      <Image
        style={{width, flex: 1}}
        source={{
          uri:
            'https://yun.qfangimg.com/group1/640x200/M00/83/A0/CvtcM12oRHOAf26cAAF3GfEvMek785.jpg',
        }}
      />
    </View>
  )
}

export default HomeBanner
