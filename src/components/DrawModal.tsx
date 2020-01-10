import React, { FC } from 'react'
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native'
import Icon from './Icon'
import { connect } from 'react-redux'
import { width } from '@/utils'
const halfWidth = width / 2
interface Ioption {
  icon: string
  label: string
  path: string
}

interface Iprops {
  navigation: any
  isShow: boolean
  options?: Ioption[]
  isLogined: boolean
  changeIsShow: (value: boolean) => void
}

const defaultOptions: Ioption[] = [
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

const DrawModal: FC<Iprops> = (props) => {
  const {
    navigation,
    isLogined,
    isShow = false,
    options = defaultOptions,
    changeIsShow,
  } = props

  function handleOptionNavigate(path: string) {
    changeIsShow(false)
    navigation.navigate(path)
  }
  function handleModalClick() {
    changeIsShow(false)
  }
  return (
    <Modal transparent={true} visible={isShow}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalStyle}
        onPress={handleModalClick}>
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
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  contentBox: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    width: halfWidth,
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

export default connect(mapStateToProps)(DrawModal)
