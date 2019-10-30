import React, {FC} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Icon from './Icon'
const {width} = Dimensions.get('window')
const drawerWidth = width / 2

interface Iprops {
  isShow: boolean
}
const DrawerNavigation: FC<Iprops> = ({isShow}) => {
  return isShow ? (
    <View style={style.modalWrapper}>
      <View style={style.drawerWrapper}>
        <View></View>
      </View>
    </View>
  ) : null
}
const style = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#b2b2b2',
  },
  drawerWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: drawerWidth,
    backgroundColor: '#fff',
  },
})

export default DrawerNavigation
