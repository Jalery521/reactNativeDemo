import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
import { IhomePriceTrend } from '@/api/home'
interface Iprops {
  priceTrend: IhomePriceTrend
}

const HomePrice: FC<Iprops> = ({ priceTrend }) => {
  return (
    <View style={styles.priceWrapper}>
      <View style={styles.priceTitle}>
        <Text style={styles.priceCategory}>深圳二手房房价</Text>
        <Icon name='arrowright' size={14} color='#999' />
      </View>
      <View style={styles.priceContent}>
        <View style={styles.contentItem}>
          <View style={styles.itemBox}>
            <Text style={styles.itemNumber}>{priceTrend.average}</Text>
            <Text style={styles.color999}> 元/㎡</Text>
          </View>
          <Text style={styles.color999}>{priceTrend.month}月均价</Text>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.itemBox}>
            <Text style={[styles.itemNumber, styles.redNumber]}>
              {priceTrend.trend}
            </Text>
            <Text style={[styles.redNumber, styles.font12]}> %</Text>
          </View>
          <View style={styles.priceTrend}>
            <Text style={styles.color999}>环比上月</Text>
            <Icon name='shangjiantou' size={10} color='#ff5860' />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  priceWrapper: {
    margin: 15,
  },
  priceTitle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceCategory: {
    fontSize: 16,
    flex: 1,
  },
  priceContent: {
    height: 60,
    flexDirection: 'row',
  },
  contentItem: {
    flex: 1,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  color999: {
    color: '#999',
  },
  redNumber: {
    color: '#ff5860',
  },
  font12: {
    fontSize: 12,
  },
  priceTrend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default HomePrice
