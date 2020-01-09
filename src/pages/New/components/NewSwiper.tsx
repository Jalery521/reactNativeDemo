import React, { FC } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { width } from '@/utils'
const imageWidth = width - 30
const imageHeight = (imageWidth / 370) * 139
interface Ibanner {
  uri: string
  id: string
}
interface Iprops {
  banners: Ibanner[]
}
const NewSwiper: FC<Iprops> = ({ banners }) => {
  return banners.length ? (
    <View style={styles.swiperWrapper}>
      <Swiper autoplay={true}>
        {banners.map((banner) => {
          return (
            <View style={styles.swiperItem} key={banner.id}>
              <Image style={styles.itemImg} source={banner} />
            </View>
          )
        })}
      </Swiper>
    </View>
  ) : null
}
const styles = StyleSheet.create({
  swiperWrapper: {
    height: imageHeight,
    margin: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  swiperItem: {
    flex: 1,
  },
  itemImg: {
    width: imageWidth,
    flex: 1,
    borderRadius: 6,
  },
})
export default NewSwiper
