import React, {FC} from 'react'
import {Image, View, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

interface Iprops {
  carousels: Icarousel[]
}

const {width} = Dimensions.get('window')
const HomeCarousels: FC<Iprops> = ({carousels}) => {
  return (
    <Swiper style={{marginTop: 10}} height={120} autoplay>
      {carousels.map(carousel => {
        return (
          <View
            key={carousel.id}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image style={{width, flex: 1}} source={carousel} />
          </View>
        )
      })}
    </Swiper>
  )
}

export default HomeCarousels
