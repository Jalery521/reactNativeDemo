import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { InewOpenItem } from '@/api/new'
interface Iprops {
  openList: InewOpenItem[]
}
const NewOpening: FC<Iprops> = ({ openList }) => {
  return openList.length ? (
    <View style={styles.openWrapper}>
      <Text style={styles.openTitle}>最新开盘</Text>
      <View>
        {openList.map((item, index) => {
          return (
            <View
              style={[styles.openItem, index > 0 ? styles.itemDivider : null]}
              key={item.id}>
              <View style={styles.itemTop}>
                <View style={styles.imgBox}>
                  <Image style={styles.itemImg} source={{ uri: item.uri }} />
                  <Text style={styles.itemStatus}>待售</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemAddress}>
                    {item.area}&nbsp;&nbsp;{item.address}/{item.typeDesc}
                  </Text>
                  <Text style={styles.itemPrice}>价格待定</Text>
                </View>
              </View>
              <View style={styles.itemBottom}>
                <Text style={styles.itemOpenDate}>
                  开盘时间：{item.openDate}
                </Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  ) : null
}

const styles = StyleSheet.create({
  openWrapper: {
    padding: 15,
  },
  openTitle: {
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  openItem: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemDivider: {
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  itemTop: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    height: 120,
  },
  imgBox: {
    width: 140,
    position: 'relative',
    marginRight: 15,
  },
  itemImg: {
    width: '100%',
    flex: 1,
  },
  itemStatus: {
    position: 'absolute',
    backgroundColor: '#4dab6c',
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 26,
    color: '#fff',
  },
  itemName: {
    color: '#333',
    fontSize: 16,
    marginBottom: 4,
  },
  itemAddress: {
    color: '#999',
  },
  itemPrice: {
    color: '#ff6d6d',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  itemBottom: {
    height: 30,
    flexDirection: 'row',
    paddingLeft: 40,
    alignItems: 'center',
  },
  itemOpenDate: {
    color: '#698bb3',
  },
})

export default NewOpening
