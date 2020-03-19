import React, { FC, useState } from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { IfiltrationItem, TpriceType } from '@/api/filtration'

interface Iprops {
  defaultActive: {
    type: TpriceType
    value: string
  }
  priceData: IfiltrationItem[]
  changePriceQuery: (type: TpriceType, value: string) => void
}

const FiltrationPrice: FC<Iprops> = ({ defaultActive, priceData, changePriceQuery }) => {
  const { type, value } = defaultActive

  const [activeContent, changeActiveContent] = useState(type || 'total' as TpriceType)
  const [activeSubContent, changeActiveSubContent] = useState(value || '')
  const [customLowPrice, changeCustomLowPrice] = useState('')
  const [customHighPrice, changeCustomHighPrice] = useState('')

  return (
    priceData && priceData.length ? (
      <View style={{ flex: 1 }}>
        <View style={styles.contentWrapper}>
          <View style={{ width: 140, }} >
            {
              priceData.map((item) => {
                const isActived = activeContent === item.value
                return (
                  <Text key={item.value} style={[styles.leftItem, isActived ? { color: '#ffb200' } : null]} onPress={(e) => changeActiveContent(item.value as TpriceType)}>{item.name}</Text>
                )
              })
            }
          </View>
          <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <ScrollView>
              {
                priceData.find((item) => item.value === activeContent)!.items.map((item) => {
                  const isChecked = activeSubContent === item.id
                  return (
                    <Text key={item.id} style={[styles.leftItem, { borderBottomColor: '#eaeaea' }, isChecked ? { color: '#ffb200' } : null]} onPress={() => changeActiveSubContent(item.id)} >{item.label}</Text>
                  )
                })
              }
            </ScrollView>

          </View>
        </View>

        <View style={styles.bottomWrapper}>
          <View style={styles.customPriceBox}>
            <TextInput keyboardType="numeric" placeholder="最低" style={styles.priceInput} value={customLowPrice} onChangeText={(val) => changeCustomLowPrice(val)} /><Text style={{ width: 20, textAlign: 'center', color: '#999' }}>—</Text><TextInput keyboardType="numeric" placeholder="最高" style={styles.priceInput} value={customHighPrice} onChangeText={(val) => changeCustomHighPrice(val)} /><Text style={{ color: '#999' }}> {activeContent === 'total' ? '万元' : '元'}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { marginLeft: 15, backgroundColor: '#fed243' }]} onPress={() => changePriceQuery(activeContent, activeSubContent)}>
            <Text>确定</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : null
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#f0f0f0',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  leftItem: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    lineHeight: 45,
    marginLeft: 15,
    color: '#333'
  },
  bottomWrapper: {
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBtn: {
    height: 36,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  customPriceBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceInput: {
    height: 36,
    backgroundColor: '#f5f5f5',
    flex: 1
  }
})

export default FiltrationPrice
