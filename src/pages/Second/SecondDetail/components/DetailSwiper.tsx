import React, { FC } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from '@/components/Icon'
import { width } from '@/utils'
const swiperHeight = (width / 375) * 250

interface Iporps {
  imgs: string[]
  navigation: any
}

const DetailSwiper: FC<Iporps> = ({ imgs, navigation }) => {
  return (
    <View style={styles.topWrapper}>
      {imgs.length ? (
        <Swiper autoplay={true}>
          {imgs.map((uri) => {
            return (
              <View style={styles.swiperItem} key={uri}>
                <Image style={styles.itemImg} source={{ uri }} />
              </View>
            )
          })}
        </Swiper>
      ) : null}
      <View style={styles.topButtonBox}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.topButton}
          onPress={() => navigation.goBack()}>
          <Icon name='fanhui' size={24} color='#ffffff' />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.topButton}>
          <Icon name='test1' size={24} color='#ffffff' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topWrapper: {
    height: swiperHeight,
    position: 'relative',
  },
  swiperItem: {
    flex: 1,
  },
  itemImg: {
    width,
    flex: 1,
  },
  topButtonBox: {
    position: 'absolute',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    top: 10,
    right: 15,
    left: 15,
  },
  topButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
})

export default DetailSwiper
