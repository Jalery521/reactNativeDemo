import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from './Icon'
interface IheaderParams {
  title: string
  isBack?: boolean
  navigation: any
}

export const NavHeader: FC<IheaderParams> = ({ isBack, title, navigation }) => {
  return (
    <View style={styles.headerWrapper}>
      <Icon
        name={isBack ? 'fanhui' : 'shouye'}
        onPress={() =>
          isBack ? navigation.goBack() : navigation.navigate('Home')
        }
        size={20}
        color='#666'
      />
      <Text style={styles.titleStyle}>{title}</Text>
      <Icon name='daohang' size={20} color='#333' />
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

export default NavHeader
