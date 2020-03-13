import React, { FC, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, InteractionManager } from 'react-native'
import { IfiltrationItem, ImoreQuery, TmoreType } from '@/api/filtration'
import { width } from '@/utils'
const subItemWidth = (width - 60) / 3

interface Iprops {
  defaultActive: ImoreQuery[]
  moreData: IfiltrationItem[]
  changeMoreQuery: (more: ImoreQuery[]) => void
}

const FiltrationMore: FC<Iprops> = ({ moreData, defaultActive, changeMoreQuery }) => {
  const activeArr: ImoreQuery[] = defaultActive.length ? JSON.parse(JSON.stringify(defaultActive)) : []
  const [activeContent, changeActiveContent] = useState(activeArr)

  function handleCheckSubItem(type: TmoreType, value: string) {
    changeActiveContent([...activeContent, { type, value }])
  }

  function handleReset() {
    changeActiveContent([])
  }

  return (
    moreData && moreData.length ? (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {
            moreData.map((item) => {
              return (
                <View key={item.value} style={styles.categoryItem}>
                  <Text style={styles.itemTitle}> {item.name}</Text>
                  <View style={styles.subWrapper}>
                    {
                      item.items.map((subItem, index) => {
                        const isHaveMargin = index % 3 === 1
                        const isChecked = activeContent.some((activeItem) => activeItem.type === item.value && activeItem.value === subItem.id)
                        return (
                          <Text key={subItem.id} style={[styles.subItem, isChecked ? styles.activeSubItem : null, isHaveMargin ? { marginLeft: 15, marginRight: 15 } : null]} onPress={() => handleCheckSubItem(item.value as TmoreType, subItem.id)}>{subItem.label}</Text>
                        )
                      })
                    }
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { backgroundColor: '#efefef' }]} onPress={handleReset}>
            <Text>重置</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { marginLeft: 15, backgroundColor: '#fed243' }]} onPress={() => changeMoreQuery(activeContent)}>
            <Text>确定</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : null
  )
}

const styles = StyleSheet.create({
  categoryItem: {
    paddingLeft: 15,
    paddingRight: 15
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  subWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subItem: {
    width: subItemWidth,
    height: 32,
    lineHeight: 32,
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#efefef',
    marginBottom: 10
  },
  activeSubItem: {
    borderColor: '#ffb200',
    backgroundColor: 'rgba(255,198,1,.2)'
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

export default FiltrationMore
