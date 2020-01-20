import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Igarden } from '@/api'
import commonStyle from './styles'
interface Iprops {
  garden: Igarden
}

const DetailGarden: FC<Iprops> = ({ garden = {} }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <Text style={commonStyle.commonTitle}>{garden.name}</Text>
      <View style={styles.gardenParams}>
        <View style={styles.paramItem}>
          <Text style={styles.itemLabel}>均价：</Text>
          <Text style={styles.priceStyle}>{garden.price}元/㎡</Text>
        </View>
        <View style={styles.paramItem}>
          <Text style={styles.itemLabel}>年代：</Text>
          <Text>{garden.year}</Text>
        </View>
        <View style={styles.paramItem}>
          <Text style={styles.itemLabel}>物业类型：</Text>
          <Text>{garden.category}</Text>
        </View>
        <View style={styles.paramItem}>
          <Text style={styles.itemLabel}>区域：</Text>
          <Text>{garden.area}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={commonStyle.viewMoreBtn}>
        <Text style={{ color: '#6789b2' }}>查看更多小区在售房源</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  gardenParams: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paramItem: {
    width: '50%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemLabel: {
    color: '#999999',
    width: 80,
  },
  priceStyle: {
    color: '#ff6d6d',
  },
})

export default DetailGarden
