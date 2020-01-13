import React, { FC } from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import { width } from '@/utils'
const baseStandard = width / 375
const itemWidth = baseStandard * 80
const itemHeight = baseStandard * 92
const HomeCategories: FC = () => {
  const categories = [
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/feature-one.png',
      name: '临深片区',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/feature-two.png',
      name: '本周热门',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/feature-three.png',
      name: '区域优选',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/feature-four.png',
      name: '好房推荐',
    },
  ]
  return (
    <View style={styles.categoryWrapper}>
      {categories.map((category, index) => {
        return (
          <ImageBackground
            style={styles.categoryItem}
            key={index}
            source={category}>
            <Text style={styles.itemName}>{category.name}</Text>
          </ImageBackground>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  categoryWrapper: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: itemWidth,
    height: itemHeight,
  },
  itemName: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    color: '#333',
    textAlign: 'center',
  },
})

export default HomeCategories
