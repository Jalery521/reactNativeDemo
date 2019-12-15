import React, { FC } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

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
    <View style={style.categoryWrapper}>
      {categories.map((category, index) => {
        return (
          <View style={style.categoryItem} key={index}>
            <Image style={style.itemImg} source={category} />
            <Text style={style.itemName}>{category.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  categoryWrapper: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    position: 'relative',
  },
  itemImg: {
    width: 80,
    height: 100,
  },
  itemName: {
    position: 'absolute',
    bottom: 10,
    color: '#333',
    left: 13,
  },
})

export default HomeCategories
