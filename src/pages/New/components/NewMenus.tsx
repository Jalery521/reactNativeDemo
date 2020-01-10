import React, { FC } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
interface Iprops {
  navigation: any
}
const NewMenus: FC = () => {
  const menus = [
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-all.png',
      label: '全部楼盘',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-preferential.png',
      label: '优惠楼盘',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-time.png',
      label: '最新开盘',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-shen.png',
      label: '临深区域',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-message.png',
      label: '资讯',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-overseas.png',
      label: '海外',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-calculate.png',
      label: '算房贷',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-search.png',
      label: '帮我找房',
    },
  ]
  return (
    <View style={styles.menuWrapper}>
      {menus.map((item) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.label}
            style={styles.menuItem}>
            <Image style={styles.itemIcon} source={{ uri: item.uri }} />
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  menuWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuItem: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
})

export default NewMenus
