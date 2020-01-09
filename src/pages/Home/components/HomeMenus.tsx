import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

interface ImenuItem {
  name: string
  uri: string
  value: string
}

interface Iprops {
  navigation: any
}

const menus: ImenuItem[] = [
  {
    name: '二手房',
    uri: 'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-sale.png',
    value: 'Second',
  },
  {
    name: '新房',
    uri:
      'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse.png',
    value: 'New',
  },
  {
    name: '租房',
    uri: 'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-rent.png',
    value: 'Rent',
  },
  {
    name: '商业办公',
    uri:
      'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-office.png',
    value: 'Office',
  },
  {
    name: '海外',
    uri:
      'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-overseas.png',
    value: 'Overseas',
  },
]
const HomeMenus: FC<Iprops> = ({ navigation }) => {
  function handleNavigation({ value }: ImenuItem) {
    navigation.navigate(value)
  }
  return (
    <View style={styles.menuWrapper}>
      {menus.map((menu, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => handleNavigation(menu)}
            key={index}>
            <Image style={styles.itemImg} source={menu} />
            <Text style={styles.itemName}>{menu.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  menuWrapper: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: 60,
    height: 80,
  },
  itemImg: {
    width: 60,
    height: 60,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
})

export default HomeMenus
