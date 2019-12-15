import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../../../components/Icon'
interface Iprops {
  priceTrend: {
    month: number
    average: number
    trend: number
  }
}

const HomePrice: FC<Iprops> = ({ priceTrend }) => {
  return (
    <View style={style.priceWrapper}>
      <View style={style.priceTitle}>
        <Text style={style.priceCategory}>深圳二手房房价</Text>
        <Icon name='arrowright' size={14} color='#999' />
      </View>
      <View style={style.priceContent}>
        <View style={style.contentItem}>
          <View style={style.itemBox}>
            <Text style={style.itemNumber}>{priceTrend.average}</Text>
            <Text style={style.color999}> 元/㎡</Text>
          </View>
          <Text style={style.color999}>{priceTrend.month}月均价</Text>
        </View>
        <View style={style.contentItem}>
          <View style={style.itemBox}>
            <Text style={[style.itemNumber, style.redNumber]}>
              {priceTrend.trend}
            </Text>
            <Text style={[style.redNumber, style.font12]}> %</Text>
          </View>
          <View style={style.priceTrend}>
            <Text style={style.color999}>环比上月</Text>
            <Icon name='shangjiantou' size={10} color='#ff5860' />
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
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
