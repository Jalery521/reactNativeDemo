import React, { FC } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from '@/components/Icon'
interface Iprops {
  isRent: boolean
  activeIndex: number
  changeActiveIndex: (index: number) => void
}

const FiltrationTitle: FC<Iprops> = ({ isRent, activeIndex, changeActiveIndex }) => {
  const titleItems = ['区域', isRent ? '租金' : '售价', '户型', '更多']
  return (
    <View style={styles.titleWrapper}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {
          titleItems.map((title, index) => {
            const isCurrent = index === activeIndex
            return (
              <TouchableOpacity key={index} style={[styles.titleItem]} activeOpacity={0.8} onPress={() => changeActiveIndex(index)} >
                <Text style={{ fontSize: 14, marginRight: 4, color: isCurrent ? '#ffb200' : '#333' }}>{title}</Text>
                <Icon name='jiantouxia' size={10} color={isCurrent ? '#ffb200' : '#ccc'} />
              </TouchableOpacity>
            )
          })
        }
      </View>
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} activeOpacity={0.8} onPress={() => changeActiveIndex(4)}>
        <Icon name='paixu' size={16} color={activeIndex === 4 ? '#ffb200' : '#ccc'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titleWrapper: {
    height: 40,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: '#f0f0f0',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  titleItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default FiltrationTitle
