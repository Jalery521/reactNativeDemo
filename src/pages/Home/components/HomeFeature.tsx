import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
const features = [
  {
    icon: 'xiaoqu',
    label: '找小区',
  },
  {
    icon: 'student',
    label: '学校',
  },
  {
    icon: 'weituo',
    label: '业主委托',
  },
  {
    icon: 'gujia',
    label: '估房价',
  },
  {
    icon: 'test',
    label: '查房价',
  },
  {
    icon: 'chengjiao',
    label: '查成交',
  },
  {
    icon: 'jisuan',
    label: '算房贷',
  },
  {
    icon: 'baike',
    label: '百科',
  },
  {
    icon: 'zizhi',
    label: '购房资质',
  },
  {
    icon: 'jingjiren',
    label: '找经纪人',
  },
]

const HomeFeature: FC = () => {
  return (
    <View style={styles.featureWrapper}>
      {features.map((item, index) => {
        return (
          <View style={styles.featureItem} key={index}>
            <Icon name={item.icon} size={20} />
            <Text style={styles.itemLabel}>{item.label}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
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
  itemLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
})

export default HomeFeature
