import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ievaluate } from '@/api'
import commonStyle from './styles'
interface Iprops {
  evaluates: Ievaluate[]
}

const DetailEvaluates: FC<Iprops> = ({ evaluates }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <Text style={commonStyle.commonTitle}>经纪人房评</Text>
      {evaluates.length
        ? evaluates.slice(0, 2).map((evaluate) => {
            return (
              <View key={evaluate.id} style={{ marginBottom: 15 }}>
                <Text>{evaluate.title}:</Text>
                <Text style={{ color: '#999999', marginTop: 10 }}>
                  {evaluate.remark}
                </Text>
              </View>
            )
          })
        : null}
      <TouchableOpacity activeOpacity={0.8} style={commonStyle.viewMoreBtn}>
        <Text style={{ color: '#6789b2' }}>查看更多房评</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailEvaluates
