// 热门楼盘
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { IhotItem } from '../index'
interface Iprops {
  hot: IhotItem[]
}
const NewHot: FC<Iprops> = ({ hot }) => {
  return hot.length ? (
    <View style={style.hotWrapper}>
      <View style={style.hotContainer}>
        <View>
          <Text style={style.hotTitle}>热门楼盘</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={style.hotContent}>
          {hot.map(item => {
            return (
              <View style={style.hotItem} key={item.id}>
                <Image style={style.itemImg} source={item} />
                <View style={{ paddingLeft: 10 }}>
                  <Text style={style.itemName}>{item.name}</Text>
                  <Text style={style.itemAddress}>
                    {item.area} {item.address}
                  </Text>
                  <Text style={style.itemPrice}>{item.price}/㎡</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  ) : null
}
const style = StyleSheet.create({
  hotWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  hotContainer: {
    paddingLeft: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  hotTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 60,
  },
  hotContent: {
    height: 180,
  },
  hotItem: {
    width: 150,
    marginRight: 10,
    borderColor: '#f0f0f0',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  itemImg: {
    width: '100%',
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  itemAddress: {
    fontSize: 12,
    color: '#9e9e9e',
    lineHeight: 16,
  },
  itemPrice: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ff6b71',
    fontWeight: 'bold',
  },
})

export default NewHot
