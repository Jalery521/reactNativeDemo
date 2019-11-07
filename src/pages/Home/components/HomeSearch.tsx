import React, {FC, useState} from 'react'
import {View, Text, Picker, TextInput, StyleSheet} from 'react-native'
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
  hotSearch: IhotHistoryItem[]
  historyData: string[]
}
type Icategory = 'second' | 'rent' | 'new' | 'office_rent' | 'office_sale'

const HomeSearch: FC<Iprops> = props => {
  const [category, changeCategory] = useState('second' as Icategory)
  const [searchText, changeSearchText] = useState('')
  const {handleChangeIsShow, hotSearch, historyData, addSearchHistory} = props
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
    <View>
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
          <Icon name='sousuo' size={16} color='#a0a0a0' />
          <TextInput
            placeholder='你想找的小区、商圈'
            value={searchText}
            onChangeText={val => changeSearchText(val.trim())}
            onSubmitEditing={({nativeEvent: {text}}) => handleAddHistory(text)}
          />
        </View>
        <Text style={style.cancelBtn} onPress={handleChangeIsShow}>
          取消
        </Text>
      </View>
      {historyData.length ? (
        <View style={style.historyContent}>
          {historyData.map(history => {
            return (
              <Text style={style.historyItem} key={history}>
                {history}
              </Text>
            )
          })}
        </View>
      ) : (
        <View style={{padding: 15}}>
          <Text style={style.hotTitle}>热门搜索</Text>
          <View style={style.hotContent}>
            {hotSearch && hotSearch.length
              ? hotSearch.map(hot => {
                  return (
                    <Text key={hot.id} style={style.hotItem}>
                      {hot.name}
                    </Text>
                  )
                })
              : null}
          </View>
        </View>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  searchContent: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
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
    paddingLeft: 10,
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
  hotTitle: {
    fontSize: 16,
    color: '#333',
  },
  hotContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hotItem: {
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    marginRight: 10,
  },
  historyContent: {
    borderTopColor: '#f0f0f0',
    borderStyle: 'solid',
    borderTopWidth: 1,
    padding: 15,
    paddingTop: 0,
  },
  historyItem: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    color: '#666',
    borderStyle: 'solid',
    lineHeight: 50,
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
