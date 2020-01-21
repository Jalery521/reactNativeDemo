// 热门楼盘
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { InewHotItem } from '@/api/new'
interface Iprops {
  hot: InewHotItem[]
}
const NewHot: FC<Iprops> = ({ hot }) => {
  return hot.length ? (
    <View style={styles.hotWrapper}>
      <View style={styles.hotContainer}>
        <View style={{ position: 'relative' }}>
          <Text style={styles.hotTitle}>热门楼盘</Text>
          <Text style={styles.hotIcon}>HOT</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.hotContent}>
          {hot.map((item) => {
            return (
              <View style={styles.hotItem} key={item.id}>
                <Image style={styles.itemImg} source={item} />
                <View style={{ paddingLeft: 10 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemAddress}>
                    {item.area} {item.address}
                  </Text>
                  <Text style={styles.itemPrice}>{item.price}/㎡</Text>
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  ) : null
}
const styles = StyleSheet.create({
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
  hotIcon: {
    position: 'absolute',
    top: 10,
    left: 80,
    padding: 4,
    paddingBottom: 0,
    backgroundColor: '#f85b62',
    color: '#fff',
    fontSize: 14,
    lineHeight: 14,
    borderRadius: 6,
    borderBottomLeftRadius: 0,
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
