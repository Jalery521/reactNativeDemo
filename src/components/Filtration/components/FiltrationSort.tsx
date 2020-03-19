import React, { FC, useState } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { TitemValue } from '@/api/filtration'

interface IdataItem {
  label: string
  value: TitemValue
}

function getData(isRent: boolean) {
  let data: IdataItem[] = [
    {
      label: '默认排序',
      value: 'default'
    },
    {
      label: '新上房源优先',
      value: 'new'
    }
  ]
  if (isRent) {
    data = data.concat([{
      label: '租金从低到高',
      value: 'rentLow'
    }, {
      label: '租金从高到低',
      value: 'rentHigh'
    }])
  } else {
    data = data.concat([
      {
        label: '总价从低到高',
        value: 'totalLow'
      },
      {
        label: '总价从高到低',
        value: 'totalHigh'
      },
      {
        label: '单价从低到高',
        value: 'priceLow'
      },
      {
        label: '单价从高到低',
        value: 'priceHigh'
      }
    ])
  }
  return data.concat([
    {
      label: '面积从小到大',
      value: 'areaLow'
    },
    {
      label: '面积从大到小',
      value: 'areaHigh'
    },
    {
      label: '带看量从低到高',
      value: 'lookLow'
    },
    {
      label: '带看量从高到低',
      value: 'lookHigh'
    }
  ])
}

interface Iprops {
  isRent: boolean
  sortValue: TitemValue
  changeSortQuery: (val: TitemValue) => void
}

const FiltrationSort: FC<Iprops> = ({ isRent, sortValue, changeSortQuery }) => {
  const data = getData(isRent)
  return (
    <FlatList data={data} keyExtractor={(item) => item.value} renderItem={({ item }) => {
      return (
        <Text style={[sortValue === item.value ? { color: '#ffb200' } : null, styles.itemStyle]} key={item.value} onPress={() => changeSortQuery(item.value)}>{item.label}</Text>
      )
    }} />
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    height: 45,
    marginLeft: 15,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    fontSize: 14,
    lineHeight: 50
  }
})

export default FiltrationSort
