import React, {FC, useState} from 'react'
import {Modal, View, Text, Picker, TextInput, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import Icon from '../../../components/Icon'
import {addSearchHistory} from '../../../store/reducer/actions'
import {IhotHistoryItem} from '../index.d'
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
interface Iprops {
  handleChangeIsShow: () => void
  addSearchHistory: (text: string) => void
  isShow: boolean
  hotSearch: IhotHistoryItem[]
  historyData: string[]
}
type Icategory = 'second' | 'rent' | 'new' | 'office_rent' | 'office_sale'

const HomeSearch: FC<Iprops> = props => {
  const [category, changeCategory] = useState('second' as Icategory)
  const [searchText, changeSearchText] = useState('')
  const {
    isShow,
    handleChangeIsShow,
    hotSearch,
    historyData,
    addSearchHistory,
  } = props
  function handleAddHistory(text: string) {
    text = text.trim()
    if (!historyData.includes(text)) {
      addSearchHistory(text)
    }
    // 要跳转的
    // xxxxxxxxxxx
    // 之后清空搜索框
    changeSearchText('')
  }

  return (
    <Modal visible={isShow}>
      <View style={{padding: 15}}>
        <View style={style.searchContent}>
          <View style={style.pickerWrapper}>
            <Picker
              style={style.pickerBox}
              selectedValue={category}
              onValueChange={changeCategory}>
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
          <View style={style.inputWrapper}>
            <Icon name='sousuo' size={18} color='#999' />
            <TextInput
              placeholder='你想找的小区、商圈'
              value={searchText}
              onChangeText={val => changeSearchText(val.trim())}
              onSubmitEditing={({nativeEvent: {text}}) =>
                handleAddHistory(text)
              }
            />
          </View>
          <Text style={style.cancelBtn} onPress={handleChangeIsShow}>
            取消
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={style.historyTitle}>热门搜索</Text>
          <View style={style.historyContent}>
            {hotSearch && hotSearch.length
              ? hotSearch.map(history => {
                  return (
                    <Text key={history.id} style={style.historyItem}>
                      {history.name}
                    </Text>
                  )
                })
              : null}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const style = StyleSheet.create({
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  pickerWrapper: {
    width: 100,
    overflow: 'hidden',
  },
  pickerBox: {
    height: 40,
    width: 160,
    color: '#666',
    backgroundColor: '#f5f5f5',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#f5f5f5',
    borderLeftColor: '#ddd',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  cancelBtn: {
    width: 50,
    color: '#ffc601',
    lineHeight: 40,
    fontSize: 16,
    textAlign: 'center',
  },
  historyTitle: {
    fontSize: 16,
    color: '#333',
  },
  historyContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  historyItem: {
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    marginRight: 10,
  },
})
const mapStateToProps = (store: Istore) => {
  return {
    historyData: store.searchHistory,
  }
}
const mapDispatchToProps = {
  addSearchHistory,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeSearch)
