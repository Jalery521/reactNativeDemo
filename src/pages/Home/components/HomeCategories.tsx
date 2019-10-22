import React, {FC} from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

interface Iprops {
  categories: IcategoryItem[]
}

const HomeCategories: FC<Iprops> = ({categories}) => {
  return (
    <View style={style.categoryWarpper}>
      {categories.map(category => {
        return (
          <View style={style.categoryItem} key={category.id}>
            <Image style={style.imageStyle} source={category} />
            <Text style={style.categoryName}>{category.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  categoryWarpper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
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
