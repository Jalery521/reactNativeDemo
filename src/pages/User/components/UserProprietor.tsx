import React, {FC} from 'react'
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get('window')
const UserProprietor: FC = () => {
  return (
    <View style={style.proprietorWrapper}>
      <Text style={style.proprietorTitle}>我是业主</Text>
      <View style={style.proprietorContent}>
        <Image
          style={style.estimatePrice}
          source={{
            uri:
              'https://i.qfangimg.com/resource/qfang-mobile/static/img/user-assess.png',
          }}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  proprietorWrapper: {
    marginTop: 20,
  },
  proprietorTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  proprietorContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  estimatePrice: {
    width: width - 30,
    height: 120,
  },
})

export default UserProprietor
