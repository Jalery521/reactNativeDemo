import React, {FC} from 'react'
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native'
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
        <Text style={style.informationTitle}>个人中心</Text>
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
          <Text style={style.recordItem}>浏览记录 ></Text>
          <Text style={style.recordItem}>我的订阅 ></Text>
          <Text style={style.recordItem}>我的预约 ></Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  informationWrapper: {
    height: 210,
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
    left: 15,
    right: 15,
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
  recordItem: {fontSize: 16},
})

export default UserInformation
