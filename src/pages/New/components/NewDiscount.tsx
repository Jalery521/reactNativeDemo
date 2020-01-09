// 优惠楼盘
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { IdiscountItem } from '../index'
interface Iprops {
  discountList: IdiscountItem[]
}

const NewDiscount: FC<Iprops> = ({ discountList }) => {
  return discountList.length ? (
    <View style={styles.discountWrapper}>
      <View style={styles.discountContent}>
        <Text style={styles.discountTitle}>优惠楼盘</Text>
        <Text style={styles.titleIcon}>惠</Text>
        <View style={styles.discountBox}>
          {discountList.map((item) => {
            return (
              <View style={styles.itemBox} key={item.id}>
                <View style={styles.imgbox}>
                  <Image style={styles.itemImg} source={item} />
                  <Text style={styles.itemSpot}>{item.lightspot}</Text>
                </View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemInfo}>已有{item.people}人获取优惠</Text>
              </View>
            )
          })}
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.viewMore}>查看全部</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null
}
const styles = StyleSheet.create({
  discountWrapper: {
    backgroundColor: '#f5f5f5',
    paddingTop: 15,
    paddingBottom: 15,
  },
  discountContent: {
    padding: 15,
    position: 'relative',
    backgroundColor: '#fff',
  },
  discountTitle: {
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  titleIcon: {
    position: 'absolute',
    backgroundColor: '#f85b62',
    left: 94,
    padding: 4,
    paddingBottom: 0,
    top: 15,
    color: '#fff',
    fontSize: 14,
    lineHeight: 14,
    borderRadius: 6,
    borderBottomLeftRadius: 0,
  },
  discountBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBox: {
    padding: 8,
    paddingBottom: 15,
    width: '50%',
    height: 180,
  },
  imgbox: {
    flex: 1,
    position: 'relative',
  },
  itemImg: {
    flex: 1,
  },
  itemSpot: {
    position: 'absolute',
    lineHeight: 24,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ff5c00',
    color: '#ffffff',
    left: -5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginTop: 6,
  },
  itemInfo: {
    color: '#999999',
  },
  viewMore: {
    backgroundColor: '#f5f5f5',
    color: '#6789b2',
    textAlign: 'center',
    lineHeight: 40,
  },
})

export default NewDiscount
