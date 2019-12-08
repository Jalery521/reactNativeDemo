import React, {FC, useState} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Alert,
  TouchableOpacity,
} from 'react-native'
import {connect} from 'react-redux'
import {pickUserInfo} from '../../../store/reducer/actions'
import commonStyle from '../style'
import {TpageType} from '../index'
interface Iprops {
  handleCutPageType: (pageType: TpageType) => void
  pickUserInfo: any
  navigation: any
  initPhoneNumber: string
  initPassword: string
}

const LoginByPhone: FC<Iprops> = props => {
  const [regionCode, changeRegionCode] = useState('+86')
  const [phoneNumber, changePhoneNumber] = useState('')
  const [password, changePassword] = useState('')
  const {
    handleCutPageType,
    navigation,
    initPassword,
    initPhoneNumber,
    pickUserInfo,
  } = props

  async function handleLogin() {
    if (
      initPhoneNumber !== `${regionCode}${phoneNumber}` ||
      initPassword !== password
    ) {
      Alert.alert('', '手机号或密码错误', [{text: '确定'}])
      return
    }
    await pickUserInfo()
    navigation.navigate('User')
  }

  return (
    <View style={{flex: 1}}>
      <Text style={commonStyle.titleName}>账号密码登陆</Text>
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
        </View>
        <View style={commonStyle.formItem}>
          <TextInput
            placeholder='请输入密码'
            value={password}
            onChangeText={val => changePassword(val.trim())}
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
            onPress={() => handleCutPageType('loginByPhone')}
            style={commonStyle.cutTypeText}>
            手机快捷登陆
          </Text>
          <Text style={style.partitionLine}>|</Text>
          <Text
            onPress={() => navigation.navigate('ForgetPassword')}
            style={commonStyle.cutTypeText}>
            忘记密码
          </Text>
        </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  cutTypeBox: {
    marginTop: 30,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  partitionLine: {
    marginLeft: 20,
    marginRight: 20,
  },
})
const mapStateToProps = (store: Istore) => {
  return {
    initPhoneNumber: store.phoneNumber,
    initPassword: store.password,
  }
}
export default connect(mapStateToProps, {pickUserInfo})(LoginByPhone)
