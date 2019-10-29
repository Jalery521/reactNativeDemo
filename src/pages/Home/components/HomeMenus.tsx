import React, {FC} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const HomeMenus: FC = () => {
  const menus = [
    {
      name: '二手房',
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-sale.png',
    },
    {
      name: '新房',
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse.png',
    },
    {
      name: '租房',
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-rent.png',
    },
    {
      name: '商业办公',
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-office.png',
    },
    {
      name: '海外',
      uri:
        'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-overseas.png',
    },
  ]
  return (
    <View style={style.menuWrapper}>
      {menus.map((menu, index) => {
        return (
          <View style={style.menuBox} key={index}>
            <Image style={style.itemImage} source={menu} />
            <Text style={style.itemName}>{menu.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  menuWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuBox: {
    width: 60,
    height: 80,
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    textAlign: 'center',
  },
})

export default HomeMenus
