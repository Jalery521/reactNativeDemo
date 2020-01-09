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
      name: '全部楼盘',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-preferential.png',
      name: '优惠楼盘',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-time.png',
      name: '最新开盘',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-shen.png',
      name: '临深区域',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse-message.png',
      name: '资讯',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-overseas.png',
      name: '海外',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-calculate.png',
      name: '算房贷',
    },
    {
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-search.png',
      name: '帮我找房',
    },
  ]
  return (
    <View style={styles.menuWrapper}>
      {menus.map(item => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.name}
            style={styles.menuItem}>
            <Image style={styles.itemIcon} source={{ uri: item.uri }} />
            <Text>{item.name}</Text>
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
