import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MapView } from 'react-native-baidu-map'
import commonStyle from './styles'
interface Iprops {
  locationData?: {
    longitude: number // 经度
    latitude: number // 维度
  }
}

const DetailSupport: FC<Iprops> = ({ locationData }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <Text style={commonStyle.commonTitle}>学区</Text>
      <MapView></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapWrapper: {
    height: 100,
  },
})

export default DetailSupport
