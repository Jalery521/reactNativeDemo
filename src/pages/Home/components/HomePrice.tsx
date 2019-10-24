import React, {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'

interface Iprops {
  price: {
    month: number
    average: number
    trend: number
  }
}

const HomePrice: FC<Iprops> = ({price}) => {
  return (
    <View style={style.priceWrapper}>
      <View style={style.priceTitle}>
        <Text style={style.priceCategory}>深圳二手房房价</Text>
        <Text>></Text>
      </View>
      <View style={style.priceContent}>
        <View style={style.contentItem}>
          <View style={style.itemBox}></View>
            <Text style={style.itemNumber}>{price.average}</Text>
            <Text style={style.itemNumber}> 元/㎡</Text>
          </View>
          <Text>{price.month}月均价</Text>
        </View>
        <View style={style.contentItem}>
          <View style={style.itemBox}>
            <Text style={[style.itemNumber, style.redNumber]}>
              {price.trend}
            </Text>
            <Text style={[style.redNumber, style.font12]}> %</Text>
          </View>
          <Text>环比上月</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  priceWrapper: {
    margin: 20,
  },
  priceTitle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceCategory: {
    fontSize: 16,
    fontWeight: 'bold',
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
    marginBottom: 5,
  },
  itemNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  redNumber: {
    color: '#ff5860',
  },
  font12: {
    fontSize: 12,
  },
})

export default HomePrice
