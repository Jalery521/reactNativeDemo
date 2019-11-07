import React, {PureComponent} from 'react'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Picker,
  Alert,
  TouchableOpacity,
} from 'react-native'
import {connect} from 'react-redux'
import {changeUserPassword, wipeLoginData} from '../../store/reducer/actions'
import commonStyle from './style'
import {height} from '../../utils'
import NavHeader from '../../components/NavHeader'
interface Iprops {
  navigation: any
  initPhoneNumber: string
  wipeLoginData: () => void
  changeUserPassword: (password: string) => void
}

interface Istate {
  regionCode: string
  phoneNumber: string
  isGetCode: boolean
  verifyCode: string
  countNumber: number
  password: string
}

class ResetPasswordScreen extends PureComponent<Iprops, Istate> {
  private countTimer: any
  constructor(props: Iprops) {
    super(props)
    this.state = {
      regionCode: '+86',
      phoneNumber: '',
      isGetCode: false,
      verifyCode: '',
      countNumber: 59,
      password: '',
    }
    this.countTimer = null
  }

  changeFormItem = (key: keyof Istate, val: any) => {
    this.setState({...this.state, [key]: val})
  }

  handleSubmit = () => {
    const {initPhoneNumber, changeUserPassword, navigation} = this.props
    const {regionCode, phoneNumber, password, verifyCode} = this.state
    if (initPhoneNumber !== `${regionCode}${phoneNumber}`) {
      Alert.alert('', '手机号码错误', [{text: '确定'}])
      return
    }
    if (!/^[1-9][0-9]{5}$/.test(verifyCode)) {
      Alert.alert('', '验证码错误', [{text: '确定'}])
      return
    }
    changeUserPassword(password)
    Alert.alert('', '请使用新密码登陆', [
      {
        text: '确定',
        onPress() {
          wipeLoginData()
          navigation.navigate('User')
        },
      },
    ])
  }

  handleGetCode = () => {
    const {phoneNumber} = this.state
    if (!phoneNumber || !/^[1][35789][1-9]{9}$/.test(phoneNumber)) {
      Alert.alert('', '请填写正确的手机号码', [{text: '确定'}])
      return
    }
    this.setState({
      isGetCode: true,
    })
    this.countTimer = setInterval(() => {
      const {countNumber} = this.state
      if (countNumber === 50) {
        const number = Math.ceil(Math.random() * 899999 + 100000)
        this.setState({
          verifyCode: number + '',
        })
      }
      if (countNumber === 1) {
        clearInterval(this.countTimer)
        this.setState({
          isGetCode: false,
        })
      } else {
        this.setState({
          countNumber: countNumber - 1,
        })
      }
    }, 1000)
  }

  componentWillUnmount() {
    this.countTimer && clearInterval(this.countTimer)
  }

  render() {
    const {
      regionCode,
      phoneNumber,
      isGetCode,
      verifyCode,
      countNumber,
      password,
    } = this.state
    return (
      <ScrollView>
        <SafeAreaView style={{flex: 1}}>
          <View style={{padding: 20, height: height - 80}}>
            <Text style={commonStyle.titleName}>设置密码</Text>
            <View style={commonStyle.contentBox}>
              <View style={commonStyle.formItem}>
                <View style={commonStyle.pickerWrapper}>
                  <Picker
                    style={commonStyle.pickerBox}
                    selectedValue={regionCode}
                    onValueChange={val =>
                      this.changeFormItem('regionCode', val)
                    }>
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
                  onChangeText={val =>
                    this.changeFormItem('phoneNumber', val.trim())
                  }
                />
                {isGetCode ? (
                  <Text>{countNumber} 秒后重试</Text>
                ) : (
                  <Text onPress={this.handleGetCode} style={style.getCodeBtn}>
                    获取验证码
                  </Text>
                )}
              </View>
              <View style={commonStyle.formItem}>
                <TextInput
                  placeholder='请输入验证码'
                  value={verifyCode}
                  onChangeText={val =>
                    this.changeFormItem('verifyCode', val.trim())
                  }
                />
              </View>
              <View style={commonStyle.formItem}>
                <TextInput
                  placeholder='新密码(6-12位字母+数字)'
                  value={password}
                  onChangeText={val =>
                    this.changeFormItem('password', val.trim())
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={commonStyle.loginBtn}
                onPress={this.handleSubmit}>
                <Text style={commonStyle.loginText}>确认</Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: '#999',
                textAlign: 'center',
              }}>
              登录即表示同意《qfangwang用户协议》
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
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
const params = {
  isBack: true,
  title: '重置密码',
}

const mapStateToProps = (store: Istore) => {
  return {
    initPhoneNumber: store.phoneNumber,
  }
}
// export default withNavigation(params)(
//   connect(
//     mapStateToProps,
//     {changeUserPassword, wipeLoginData},
//   )(ResetPassword),
// )
export default connect(
  mapStateToProps,
  {changeUserPassword, wipeLoginData},
)(NavHeader(params)(ResetPasswordScreen) as any)
