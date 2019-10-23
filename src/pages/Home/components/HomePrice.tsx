import React, {FC} from 'react'
import {View, Text} from 'react-native'

interface Iprops {
  price: {
    month: number
    average: number
    trend: number
  }
}

const HomePrice: FC<Iprops> = ({price}) => {
  return (
    <View style={{margin: 20}}>
      <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', flex: 1}}>
          深圳二手房房价
        </Text>
        <Text>〉</Text>
      </View>
      <View style={{height: 60, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {price.average}
            </Text>
            <Text style={{color: '#666', fontSize: 12}}> 元/㎡</Text>
          </View>
          <Text>{price.month}月均价</Text>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ff5860'}}>
              {price.trend}
            </Text>
            <Text style={{color: '#ff5860', fontSize: 12}}> %</Text>
          </View>
          <Text>环比上月</Text>
        </View>
      </View>
    </View>
  )
}
export default HomePrice
