import React, { FC, useState } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IfiltrationItem, TareaType } from '@/api/filtration'

interface Iprops {
  defaultActive: {
    type: TareaType
    value: string
  }
  areaData: IfiltrationItem[]
  changeAreaQuery: (type: TareaType, value: string) => void
}

const FiltrationArea: FC<Iprops> = ({ areaData, defaultActive: { type, value }, changeAreaQuery }) => {
  const [activeContent, changeActiveContent] = useState(type || 'area')
  const [subActiveContent, chagneSubActiveContent] = useState(value || '')

  function handleReset() {
    changeActiveContent('area')
    chagneSubActiveContent('')
  }

  return (
    areaData && areaData.length ? (
      <View style={{ flex: 1 }}>
        <View style={styles.contentWrapper}>
          <View style={{ width: 140 }} >
            {
              areaData.map((item) => {
                const isActived = activeContent === item.value
                return (
                  <Text key={item.value} style={[styles.leftItem, isActived ? { color: '#ffb200' } : null]} onPress={(e) => changeActiveContent(item.value as TareaType)}>{item.name}</Text>
                )
              })
            }
          </View>
          <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
            <ScrollView>
              {
                areaData.find((item) => item.value === activeContent)!.items.map((item) => {
                  const isChecked = subActiveContent === item.id
                  return (
                    <Text style={[styles.leftItem, { borderBottomColor: '#eaeaea' }, isChecked ? { color: '#ffb200' } : null]} key={item.id} onPress={() => chagneSubActiveContent(item.id)}>{item.label}</Text>
                  )
                })
              }
            </ScrollView>
          </View>
        </View>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { backgroundColor: '#efefef' }]} onPress={handleReset}>
            <Text>重置</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { marginLeft: 15, backgroundColor: '#fed243' }]} onPress={() => changeAreaQuery(activeContent, subActiveContent)}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  }
})

export default FiltrationArea
