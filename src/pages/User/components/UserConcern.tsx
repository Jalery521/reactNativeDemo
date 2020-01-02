import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
const concerns = [
  {
    name: 'ershoufang',
    text: '二手房',
  },
  {
    name: 'xinfang',
    text: '新房',
  },
  {
    name: 'zufang',
    text: '租房',
  },
  {
    name: 'shangyezhongxin',
    text: '商业办公',
  },
  {
    name: 'xiaoqu',
    text: '小区',
  },
  {
    name: 'jingjiren',
    text: '经纪人',
  },
]

const UserConcern: FC = () => {
  return (
    <View style={style.concernWrapper}>
      <Text style={style.concernTitle}>我的关注</Text>
      <View style={style.concernContent}>
        {concerns.map((item, index) => {
          return (
            <View style={style.concernItem} key={index}>
              <Icon name={item.name} size={20} />
              <Text style={style.itemName}>{item.text}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
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
