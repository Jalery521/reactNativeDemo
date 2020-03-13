import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IfiltrationChild } from '@/api/filtration'

interface Iprops {
  houseData: IfiltrationChild[]
  defualtAcitve: string
  changeHouseQuery: (value: string) => void
}

const FiltrationHouse: FC<Iprops> = ({ houseData, defualtAcitve, changeHouseQuery }) => {
  console.log(defualtAcitve)
  const [activeContent, changeActiveContent] = useState(defualtAcitve || '')

  function handleReset() {
    changeActiveContent('')
  }

  return (
    houseData && houseData.length ? (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {
            houseData.map((house, index) => {
              const isChecked = activeContent === house.id
              return (
                <TouchableOpacity activeOpacity={0.8} key={index} style={styles.houseItem} onPress={() => changeActiveContent(house.id)}>
                  <Text style={isChecked ? { color: '#ffb200' } : null} >{house.label}</Text>
                  <View style={[styles.checkBox, isChecked ? styles.activeCheckBox : null]}>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { backgroundColor: '#efefef' }]} onPress={handleReset} >
            <Text>重置</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={[styles.bottomBtn, { marginLeft: 15, backgroundColor: '#fed243' }]} onPress={() => changeHouseQuery(activeContent)}>
            <Text>确定</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : null
  )
}

const styles = StyleSheet.create({
  houseItem: {
    flexDirection: 'row',
    height: 45,
    marginLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  checkBox: {
    width: 14,
    height: 14,
    borderColor: '#efefef',
    borderStyle: 'solid',
    borderWidth: 1
  },
  activeCheckBox: {
    borderColor: '#ffb200'
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

export default FiltrationHouse
