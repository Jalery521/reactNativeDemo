// 小Q看房
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '../../../components/Icon'
interface Iprops {
  lookList: any[]
}
const NewLook: FC<Iprops> = ({ lookList }) => {
  return lookList.length ? (
    <View style={style.lookWrapper}>
      <View style={style.lookContent}>
        <View style={style.titleWrapper}>
          <Text style={style.lookTitle}>小Q看房</Text>
          <TouchableOpacity activeOpacity={0.8} style={style.moreBox}>
            <Text style={{ marginRight: 5, color: '#666666' }}>更多</Text>
            <Icon name='arrowright' size={12} color='#666666' />
          </TouchableOpacity>
        </View>
        <View>
          {lookList.map((item, index) => {
            return (
              <View
                style={[style.itemBox, index > 0 ? style.itemDivider : null]}
                key={item.id}>
                <View style={style.itemLeft}>
                  <Text style={style.itemTitle}>{item.title}</Text>
                  <Text style={style.itemInfo}>
                    {item.date}&nbsp;&nbsp;&nbsp;{item.people}人&nbsp;阅读
                  </Text>
                </View>
                <View>
                  <Image style={style.itemImg} source={item} />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  ) : null
}

const style = StyleSheet.create({
  lookWrapper: {
    paddingTop: 10,
    backgroundColor: '#f5f5f5',
  },
  lookContent: {
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 0,
  },
  titleWrapper: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBox: {
    height: 140,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
  itemDivider: {
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  itemLeft: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    lineHeight: 20,
  },
  itemInfo: {
    color: '#666',
    marginTop: 15,
  },
  itemImg: {
    width: 140,
    flex: 1,
  },
})
export default NewLook
