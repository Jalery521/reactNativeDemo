import React, {FC} from 'react'
import {View, Text, Image, Dimensions} from 'react-native'
const {width} = Dimensions.get('window')
const UserInformation: FC = () => {
  return (
    <View
      style={{
        height: 210,
        flex: 1,
        position: 'relative',
      }}>
      <View style={{height: 140, position: 'relative', alignItems: 'center'}}>
        <Image
          style={{width, flex: 1}}
          source={{
            uri:
              'https://i.qfangimg.com/resource/qfang-mobile/static/img/user-center-bg.png',
          }}
        />
        <Text
          style={{
            position: 'absolute',
            top: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          个人中心
        </Text>
      </View>
      <View
        style={{
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
        }}>
        <Image
          style={{
            position: 'absolute',
            top: -30,
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
          source={{
            uri:
              'https://i.qfangimg.com/resource/qfang-mobile/static/img/default-portrait.png',
          }}
        />
        <Text style={{fontSize: 16, color: '#333'}}>登录/注册</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>浏览记录 ></Text>
          <Text style={{fontSize: 16}}>我的订阅 ></Text>
          <Text style={{fontSize: 16}}>我的预约 ></Text>
        </View>
      </View>
    </View>
  )
}

export default UserInformation
