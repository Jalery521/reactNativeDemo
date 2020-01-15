import React, { FC } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from './Icon'
interface IheaderParams {
  title: string
  isBack?: boolean
  isScan?: boolean
  navigation: any
}

export const NavHeader: FC<IheaderParams> = ({
  isBack = false,
  title,
  navigation,
  isScan = false,
}) => {
  function showScanView() {
    Alert.alert('敬请期待', '该功能仍在开发中', [
      {
        text: '确定',
      },
    ])
  }

  return (
    <View style={styles.headerWrapper}>
      <Icon
        name={isBack ? 'fanhui' : 'shouye'}
        onPress={() => {
          isBack ? navigation.goBack() : navigation.navigate('Home')
        }}
        size={20}
        color='#666'
      />
      <Text style={styles.titleStyle}>{title}</Text>
      <Icon
        name={isScan ? 'saoma' : 'daohang'}
        size={20}
        color='#333'
        onPress={() => {
          isScan ? showScanView() : navigation.openDrawer()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default withNavigation(NavHeader)
