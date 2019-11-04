import React, {FC, useState, useEffect, useRef} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Alert,
  TouchableOpacity,
} from 'react-native'
import commonStyle from '../style'
import {TpageType} from '../index'
interface Iprops {
  handleCutPageType: (pageType: TpageType) => void
}

const LoginByPhone: FC<Iprops> = props => {
  const [regionCode, changeRegionCode] = useState('+86')
  const [phoneNumber, changePhoneNumber] = useState('')
  const [isGetCode, changeIsGetCode] = useState(false)
  const [verifyCode, changeVerifyCode] = useState('')
  const [countNumber, changeCountNumber] = useState(59)
  const countTimer = useRef(null as any)
  const {handleCutPageType} = props
  // 点击了获取验证码
  function handleGetCode() {
    if (!phoneNumber || !/^[1][3,5,7,8,9,0][1-9]{9}$/.test(phoneNumber)) {
      Alert.alert('', '请填写正确的手机号码', [{text: '确定'}])
      return
    }
    changeIsGetCode(true)
  }

  function handleLogin() {
    Alert.alert('你点击了登陆')
  }

  useEffect(() => {
    if (isGetCode) {
      countTimer.current && clearInterval(countTimer.current)
      countTimer.current = setInterval(function() {
        if (countNumber === 50) {
          const number = Math.ceil(Math.random() * 899999 + 100000)
          changeVerifyCode(number + '')
        }
        if (countNumber === 1) {
          changeCountNumber(59)
          changeIsGetCode(false)
          clearInterval(countTimer.current)
        } else {
          changeCountNumber(countNumber - 1)
        }
      }, 1000)
    }
  })

  return (
    <View style={{flex: 1}}>
      <Text style={commonStyle.titleName}>手机快捷登陆</Text>
      <Text style={style.loginTips}>
        未注册过的手机号将自动创建Q房网账号，经纪人不会看到您的手机号
      </Text>
      <View style={commonStyle.contentBox}>
        <View style={commonStyle.formItem}>
          <View style={commonStyle.pickerWrapper}>
            <Picker
              style={commonStyle.pickerBox}
              selectedValue={regionCode}
              onValueChange={val => changeRegionCode(val)}>
              <Picker.Item label='+86' value='+86' />
              <Picker.Item label='+852' value='+852' />
              <Picker.Item label='+853' value='+853' />
              <Picker.Item label='+886' value='+886' />
            </Picker>
          </View>
          <TextInput
            style={commonStyle.phoneInput}
            placeholder='请输入手机号'
            value={phoneNumber}
            onChangeText={val => changePhoneNumber(val.trim())}
          />
          {isGetCode ? (
            <Text>{countNumber} 秒后重试</Text>
          ) : (
            <Text onPress={handleGetCode} style={style.getCodeBtn}>
              获取验证码
            </Text>
          )}
        </View>
        <View style={commonStyle.formItem}>
          <TextInput
            placeholder='请输入验证码'
            value={verifyCode}
            onChangeText={val => changeVerifyCode(val.trim())}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={commonStyle.loginBtn}
          onPress={handleLogin}>
          <Text style={commonStyle.loginText}>登陆</Text>
        </TouchableOpacity>
        <View style={style.cutTypeBox}>
          <Text
            onPress={() => handleCutPageType('loginByPassword')}
            style={commonStyle.cutTypeText}>
            账号密码登陆
          </Text>
        </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  loginTips: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  getCodeBtn: {
    fontSize: 14,
    color: '#666',
  },
  cutTypeBox: {
    marginTop: 30,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LoginByPhone
