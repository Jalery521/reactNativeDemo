import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
const concerns = [
  {
    icon: 'ershoufang',
    label: '二手房',
  },
  {
    icon: 'xinfang',
    label: '新房',
  },
  {
    icon: 'zufang',
    label: '租房',
  },
  {
    icon: 'shangyezhongxin',
    label: '商业办公',
  },
  {
    icon: 'xiaoqu',
    label: '小区',
  },
  {
    icon: 'jingjiren',
    label: '经纪人',
  },
]

const UserConcern: FC = () => {
  return (
    <View style={styles.concernWrapper}>
      <Text style={styles.concernTitle}>我的关注</Text>
      <View style={styles.concernContent}>
        {concerns.map((item, index) => {
          return (
            <View style={styles.concernItem} key={index}>
              <Icon name={item.icon} size={20} />
              <Text style={styles.itemName}>{item.label}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  concernWrapper: {
    marginTop: 30,
  },
  concernTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  concernContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  concernItem: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
})

export default UserConcern
