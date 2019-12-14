import React, {FC} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import {IdiscountItem} from '../index'
interface Iprops {
  discountList: IdiscountItem[]
}

const NewDiscount: FC<Iprops> = ({discountList}) => {
  return discountList.length ? (
    <View style={style.discountWrapper}>
      <Text style={style.discountTitle}>优惠楼盘</Text>
      <View style={style.discountBox}>
        {discountList.map(item => {
          return (
            <View style={style.discountItem} key={item.id}>
              <View style={style.imgbox}>
                <Image style={style.discountImg} source={{uri: item.uri}} />
                <Text style={style.discountSpot}>{item.lightspot}</Text>
              </View>
              <Text style={style.discountName}>{item.name}</Text>
              <Text style={style.discountInfo}>
                已有{item.people}人获取优惠
              </Text>
            </View>
          )
        })}
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={style.viewMore}>查看全部</Text>
      </TouchableOpacity>
    </View>
  ) : null
}
const style = StyleSheet.create({
  discountWrapper: {
    padding: 15,
  },
  discountTitle: {
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  discountBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  discountItem: {
    padding: 8,
    paddingBottom: 15,
    width: '50%',
    height: 180,
  },
  imgbox: {
    flex: 1,
    position: 'relative',
  },
  discountImg: {
    flex: 1,
  },
  discountSpot: {
    position: 'absolute',
    lineHeight: 24,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'red',
    color: '#ffffff',
    left: -5,
  },
  discountName: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    marginTop: 6,
  },
  discountInfo: {
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
