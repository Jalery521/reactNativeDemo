import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
const features = [
  {
    name: 'xiaoqu',
    text: '找小区',
  },
  {
    name: 'student',
    text: '学校',
  },
  {
    name: 'weituo',
    text: '业主委托',
  },
  {
    name: 'gujia',
    text: '估房价',
  },
  {
    name: 'test',
    text: '查房价',
  },
  {
    name: 'chengjiao',
    text: '查成交',
  },
  {
    name: 'jisuan',
    text: '算房贷',
  },
  {
    name: 'baike',
    text: '百科',
  },
  {
    name: 'zizhi',
    text: '购房资质',
  },
  {
    name: 'jingjiren',
    text: '找经纪人',
  },
]

const HomeFeature: FC = () => {
  return (
    <View style={style.featureWrapper}>
      {features.map((item, index) => {
        return (
          <View style={style.featureItem} key={index}>
            <Icon name={item.name} size={20} />
            <Text style={style.itemName}>{item.text}</Text>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  featureWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  featureItem: {
    width: '20%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
})

export default HomeFeature
