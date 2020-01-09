// 楼盘检测
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '@/components/Icon'
import { Ievaluation } from '../index'
interface Iprops {
  evaluation: Ievaluation
}
const NewEvaluation: FC<Iprops> = ({ evaluation }) => {
  return evaluation.id ? (
    <View style={styles.evaluationWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.evaluationTitle}>楼盘检测</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.moreBox}>
          <Text style={{ marginRight: 5, color: '#666666' }}>更多</Text>
          <Icon name='arrowright' size={12} color='#666666' />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.evaluationName}>{evaluation.title}</Text>
        <View style={styles.imgWrapper}>
          {evaluation.imgs.map((img, index) => {
            return (
              <Image key={index} style={styles.imgItem} source={{ uri: img }} />
            )
          })}
        </View>
      </View>
    </View>
  ) : null
}
const styles = StyleSheet.create({
  evaluationWrapper: {
    height: 200,
    margin: 15,
  },
  titleWrapper: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  evaluationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evaluationName: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  imgWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  imgItem: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
})
export default NewEvaluation
