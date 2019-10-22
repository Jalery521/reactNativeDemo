import React, {FC} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

interface Iprops {
  menus: ImenuItem[]
}

const HomeMenus: FC<Iprops> = ({menus}) => {
  return (
    <View style={style.menuWarpper}>
      {menus.map(menu => {
        return (
          <View style={style.menuBox} key={menu.id}>
            <Image style={style.itemImage} source={menu} />
            <Text style={style.itemName}>{menu.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  menuWarpper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
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
