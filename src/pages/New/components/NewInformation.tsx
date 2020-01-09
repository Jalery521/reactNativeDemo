// Q房资讯
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { Iinformation } from '../index'
interface Iprops {
  information: Iinformation[][]
}
const NewInformation: FC<Iprops> = ({ information }) => {
  return information.length ? (
    <View style={styles.informationWrapper}>
      <Image
        style={styles.informationIcon}
        source={{
          uri:
            'https://i.qfangimg.com/resource/qfang-mobile/static/img/headline-pic.png',
        }}
      />
      <View style={{ flex: 1 }}>
        <Swiper horizontal={false} autoplay={true} showsPagination={false}>
          {information.map((item, index) => {
            return (
              <View key={index} style={styles.informationItem}>
                {item.map(subItem => {
                  return <Text key={subItem.id}>● {subItem.title}</Text>
                })}
              </View>
            )
          })}
        </Swiper>
      </View>
    </View>
  ) : null
}
const styles = StyleSheet.create({
  informationWrapper: {
    borderTopColor: '#f5f5f5',
    borderStyle: 'solid',
    borderTopWidth: 1,
    height: 70,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  informationIcon: {
    width: 36,
    height: 39,
    marginRight: 10,
  },
  informationItem: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
})
export default NewInformation
