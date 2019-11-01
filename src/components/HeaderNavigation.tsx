import React, {FC, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from './Icon'
import DrawerNavigation from './DrawerNavigation'
interface Iprops {
  toHome?: boolean
  navigation: any
  title: string
}

const HeaderNavigation: FC<Iprops> = props => {
  const {toHome, title, navigation} = props
  const [drawerStatus, changeDrawerStatus] = useState(false)
  function handleBack() {
    toHome ? navigation.navigate('Home') : navigation.goBack()
  }
  function handleDrawer() {
    changeDrawerStatus(!drawerStatus)
  }
  return (
    <>
      <View style={style.navigationWrapper}>
        <Icon
          name={toHome ? 'shouye' : 'fanhui'}
          onPress={handleBack}
          size={20}
          color='#666'
        />
        <Text style={style.titleBox}>{title}</Text>
        <Icon onPress={handleDrawer} name='daohang' size={20} color='#333' />
      </View>
      {drawerStatus ? <DrawerNavigation navigation={navigation} /> : null}
    </>
  )
}

const style = StyleSheet.create({
  navigationWrapper: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleBox: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default HeaderNavigation
