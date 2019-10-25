import React, {FC} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

interface Iprops {
  searchText: string
  changeSearchText: (searchText: string) => void
  navigation: any
}

const HomeSearch: FC<Iprops> = ({searchText, changeSearchText, navigation}) => {
  function toUser() {
    navigation.navigate('User')
  }

  return (
    <View style={style.searchWarpper}>
      <View style={style.searchContent}>
        <Text style={style.searchCity}>深圳</Text>
        <View style={style.inputWarpper}>
          <Text style={style.font12}>放大镜</Text>
          <TextInput
            style={style.searchInput}
            placeholder='你想找的小区、商圈'
            value={searchText}
            onChangeText={val => changeSearchText(val.trim())}
          />
        </View>
      </View>
      <Text style={style.personIcon} onPress={toUser}>
        人员
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  searchWarpper: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContent: {
    flex: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderRadius: 4,
  },
  searchCity: {
    width: 60,
    textAlign: 'center',
  },
  inputWarpper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    height: 50,
    flex: 1,
  },
  personIcon: {
    width: 40,
    textAlign: 'right',
  },
  font12: {
    fontSize: 12,
  },
})

export default HomeSearch
