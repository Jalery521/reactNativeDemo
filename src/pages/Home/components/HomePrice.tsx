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
    <View>
      <View style={{height: 26}}>
        <Text>深圳二手房房价</Text>
        <Text>;&gt</Text>
      </View>
      <View>
        <View>
          <Text>{price.average}元/㎡</Text>
          <Text>{price.month}月均价</Text>
        </View>
        <View>
          <Text>{price.trend}</Text>
          <Text>环比上月</Text>
        </View>
      </View>
    </View>
  )
}
export default HomePrice
