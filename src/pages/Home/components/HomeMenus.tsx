import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

interface ImenuItem {
  label: string
  uri: string
  path: string
}

interface Iprops {
  navigation: any
}

const menus: ImenuItem[] = [
  {
    label: '二手房',
    uri: 'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-sale.png',
    path: 'Second',
  },
  {
    label: '新房',
    uri:
      'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-newhouse.png',
    path: 'New',
  },
  {
    label: '租房',
    uri: 'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-rent.png',
    path: 'Rent',
  },
  {
    label: '商业办公',
    uri:
      'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-office.png',
    path: 'Office',
  },
  {
    label: '海外',
    uri:
      'https://i.qfangimg.com/resource/qfang-mobile/static/img/nav-overseas.png',
    path: 'Overseas',
  },
]
const HomeMenus: FC<Iprops> = ({ navigation }) => {
  function handleNavigation({ path }: ImenuItem) {
    navigation.navigate(path)
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
            <Text style={styles.itemName}>{menu.label}</Text>
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
