import React, {FC} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

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
            <Image style={style.imageStyle} source={category} />
            <Text style={style.categoryName}>{category.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  categoryWrapper: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    position: 'relative',
  },
  imageStyle: {
    width: 80,
    height: 100,
  },
  categoryName: {
    position: 'absolute',
    bottom: 10,
    color: '#333',
    left: 13,
  },
})

export default HomeCategories
