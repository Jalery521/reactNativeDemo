import React, {FC, useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import Icon from '../../../components/Icon'

interface Iprops {
  navigation: any
  handleChangeIsShow: () => void
}

const HomeHeader: FC<Iprops> = props => {
  const {handleChangeIsShow, navigation} = props
  return (
    <View style={style.headerWarpper}>
      <View style={style.headerContent}>
        <Text style={style.headerCity}>深圳</Text>
        <View style={style.inputWarpper}>
          <Icon name='sousuo' size={16} color='#999' />
          <Text onPress={handleChangeIsShow} style={style.headerInput}>
            你想找的小区、商圈
          </Text>
        </View>
      </View>
      {/* <Text >

      </Text> */}
      <View style={style.personIcon}>
        <Icon
          onPress={() => navigation.navigate('User')}
          name='customuser'
          size={28}
          color='#888'
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  headerWarpper: {
    marginRight: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    borderRadius: 4,
  },
  headerCity: {
    width: 60,
    lineHeight: 20,
    borderRightColor: '#eee',
    borderRightWidth: 2,
    borderStyle: 'solid',
    textAlign: 'center',
  },
  inputWarpper: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInput: {
    paddingLeft: 8,
    lineHeight: 48,
    flex: 1,
    color: '#ccd0db',
  },
  personIcon: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font12: {
    fontSize: 12,
  },
})

export default HomeHeader
