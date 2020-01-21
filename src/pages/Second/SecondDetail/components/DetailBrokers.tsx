import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
import { IsecondHouseBroker } from '@/api'
import commonStyle from './styles'

interface Iprops {
  brokers: IsecondHouseBroker[]
}

const DetailBrokers: FC<Iprops> = ({ brokers }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <Text style={commonStyle.commonTitle}>推荐经纪人</Text>
      {brokers.length
        ? brokers.map((broker) => {
            return (
              <TouchableOpacity
                key={broker.id}
                activeOpacity={0.8}
                style={styles.brokerItem}>
                <Image
                  style={styles.brokerItemAvatar}
                  source={{ uri: broker.avatar }}
                />
                <View style={{ flex: 1, paddingLeft: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 3 }}>{broker.name}</Text>
                    <Icon name='mingpian' size={18} color='#6789b2' />
                  </View>
                  <Text style={styles.brokerItemEvaluate}>
                    {broker.score}分/{broker.evaluatePeople}人评价
                  </Text>
                  <Text style={styles.brokerItemEvaluate}>
                    {broker.post} - {broker.affiliation}
                  </Text>
                  <Text style={{ fontSize: 12, marginTop: 5 }}>
                    {broker.relation}
                  </Text>
                  <View style={styles.contactWay}>
                    <View style={styles.contactWayItem}>
                      <Icon name='dianhua' size={18} color='#f3b53f' />
                    </View>
                    <View style={styles.contactWayItem}>
                      <Icon name='youxiang' size={18} color='#f3b53f' />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })
        : null}
      <TouchableOpacity activeOpacity={0.8} style={commonStyle.viewMoreBtn}>
        <Text style={{ color: '#6789b2' }}>查看更多经纪人</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  brokerItem: {
    flexDirection: 'row',
    marginBottom: 10,
    position: 'relative',
  },
  brokerItemAvatar: {
    width: 60,
    height: 60,
  },
  brokerItemEvaluate: {
    fontSize: 12,
    color: '#999999',
    marginTop: 2,
  },
  contactWay: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contactWayItem: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fdf8e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default DetailBrokers
