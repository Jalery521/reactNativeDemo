import React, {FC, useState} from 'react'
import {Modal, View, Text, Picker, TextInput} from 'react-native'
import Icon from '../../../components/Icon'
const pickerOptions = [
  {
    name: '二手房',
    value: 'second',
  },
  {
    name: '租房',
    value: 'rent',
  },
  {
    name: '新房',
    value: 'new',
  },
  {
    name: '写字楼（租）',
    value: 'office_rent',
  },
  {
    name: '写字楼（售）',
    value: 'office_sale',
  },
]
const HomeSearch: FC = () => {
  const [category, changeCategory] = useState('second')
  const [searchText, changeSearchText] = useState('')
  return (
    <Modal>
      <View>
        <View>
          <Picker
            selectedValue={category}
            onValueChange={val => changeCategory(val)}>
            {pickerOptions.map(option => {
              return (
                <Picker.Item
                  key={option.value}
                  label={option.name}
                  value={option.value}
                />
              )
            })}
          </Picker>
        </View>
        <Icon name='sousuo' size={16} color='#999' />
        <TextInput
          value={searchText}
          onChangeText={val => changeSearchText(val.trim())}
        />
      </View>
      <Text>取消</Text>
    </Modal>
  )
}

export default HomeSearch
