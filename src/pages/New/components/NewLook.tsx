// 小Q看房
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { InewLookItem } from '@/api/new'
import Icon from '@/components/Icon'
interface Iprops {
  lookList: InewLookItem[]
}
const NewLook: FC<Iprops> = ({ lookList }) => {
  return lookList.length ? (
    <View style={styles.lookWrapper}>
      <View style={styles.lookContent}>
        <View style={styles.titleWrapper}>
          <Text style={styles.lookTitle}>小Q看房</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.moreBox}>
            <Text style={{ marginRight: 5, color: '#666666' }}>更多</Text>
            <Icon name='arrowright' size={12} color='#666666' />
          </TouchableOpacity>
        </View>
        <View>
          {lookList.map((item, index) => {
            return (
              <View
                style={[styles.itemBox, index > 0 ? styles.itemDivider : null]}
                key={item.id}>
                <View style={styles.itemLeft}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemInfo}>
                    {item.date}&nbsp;&nbsp;&nbsp;{item.people}人&nbsp;阅读
                  </Text>
                </View>
                <View>
                  <Image style={styles.itemImg} source={item} />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  ) : null
}

const styles = StyleSheet.create({
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
