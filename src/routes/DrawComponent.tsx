import React, { FC } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
import { connect } from 'react-redux'

interface Iprops {
  navigation: any
  isLogined: boolean
}

const options = [
  {
    icon: 'shouye',
    label: '首页',
    path: 'Home',
  },
  {
    icon: 'ershoufang',
    label: '二手房',
    path: 'Second',
  },
  {
    icon: 'xinfang',
    label: '新房',
    path: 'New',
  },
  {
    icon: 'zufang',
    label: '租房',
    path: 'Rent',
  },
  {
    icon: 'shangyezhongxin',
    label: '商业办公',
    path: 'Home',
  },
  {
    icon: 'xiaoqu',
    label: '小区',
    path: 'Home',
  },
  {
    icon: 'student',
    label: '学校',
    path: 'Home',
  },
  {
    icon: 'test',
    label: '查房价',
    path: 'Home',
  },
  {
    icon: 'haitao',
    label: '海外',
    path: 'Home',
  },
  {
    icon: 'guanyu',
    label: '关于Q房',
    path: 'Home',
  },
]

const DrawComponent: FC<Iprops> = (props) => {
  const { navigation, isLogined } = props

  function handleOptionNavigate(path: string) {
    navigation.navigate(path)
    navigation.closeDrawer()
  }

  return (
    <View style={styles.contentBox}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.firstOption}
        onPress={() => handleOptionNavigate('User')}>
        <Icon name='customuser' size={18} color='#b7b7b7' />
        {isLogined ? (
          <Text style={styles.optionLabel}>用户中心</Text>
        ) : (
          <Text style={styles.optionLabel}>登陆/注册</Text>
        )}
      </TouchableOpacity>
      <View style={{ flex: 1, paddingTop: 15 }}>
        {options.map((option) => {
          return (
            <TouchableOpacity
              key={option.label}
              activeOpacity={0.8}
              style={styles.optionItem}
              onPress={() => handleOptionNavigate(option.path)}>
              <Icon
                key={option.label}
                name={option.icon}
                size={18}
                color='#b7b7b7'
              />
              <Text style={styles.optionLabel}>{option.label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentBox: {
    backgroundColor: '#fff',
    flex: 1,
  },
  firstOption: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    borderStyle: 'solid',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 15,
  },
  optionLabel: {
    color: '#333333',
    fontSize: 16,
    marginLeft: 15,
  },
})

const mapStateToProps = (store: Istore) => {
  return {
    isLogined: store.isLogined,
  }
}

export default connect(mapStateToProps)(DrawComponent)
