import React, {FC} from 'react'
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native'
import Icon from '../../../components/Icon'
const {width} = Dimensions.get('window')
const UserInformation: FC = () => {
  return (
    <View style={style.informationWrapper}>
      <View style={style.bgWrapper}>
        <Image
          style={{flex: 1, width}}
          source={{
            uri:
              'https://i.qfangimg.com/resource/qfang-mobile/static/img/user-center-bg.png',
          }}
        />
      </View>
      <View style={style.informationBox}>
        <Image
          style={style.userAvatar}
          source={{
            uri:
              'https://i.qfangimg.com/resource/qfang-mobile/static/img/default-portrait.png',
          }}
        />
        <Text style={style.loginBtn}>登录/注册</Text>
        <View style={style.userRecords}>
          <View style={style.recordItem}>
            <Text style={style.marginR6}>浏览记录</Text>
            <Icon name='arrowright' size={10} color='#999' />
          </View>
          <View style={style.recordItem}>
            <Text style={style.marginR6}>我的订阅</Text>
            <Icon name='arrowright' size={10} color='#999' />
          </View>
          <View style={style.recordItem}>
            <Text style={style.marginR6}>我的预约</Text>
            <Icon name='arrowright' size={10} color='#999' />
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  informationWrapper: {
    height: 180,
    flex: 1,
    position: 'relative',
  },
  bgWrapper: {
    height: 140,
    alignItems: 'center',
  },
  informationTitle: {
    position: 'absolute',
    top: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  informationBox: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 135,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 40,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  userAvatar: {
    position: 'absolute',
    top: -30,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  loginBtn: {
    fontSize: 16,
    color: '#333',
  },
  userRecords: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  recordItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginR6: {
    marginRight: 5,
  },
})

export default UserInformation
