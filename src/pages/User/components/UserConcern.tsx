import React, {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const UserConcern: FC = () => {
  return (
    <View style={style.concernWrapper}>
      <Text style={style.concernTitle}>我的关注</Text>
      <View></View>
    </View>
  )
}

const style = StyleSheet.create({
  concernWrapper: {
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  concernTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default UserConcern
