import React, { FC } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { IsecondHouseTrend } from '@/api/second'
import commonStyle from './styles'
interface Iprops {
  trend: IsecondHouseTrend
  gardenName: string
}

const DetailTrend: FC<Iprops> = ({ trend, gardenName }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <Text style={commonStyle.commonTitle}>{gardenName}二手房房价走势</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default DetailTrend
