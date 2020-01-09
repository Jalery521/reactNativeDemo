import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Icon from '@/components/Icon'
import PickImage from '@/components/PickerImage'
import { width } from '@/utils'

interface Iprops {
  navigation: any
  isLogined: boolean
  userInfo: any
}

const UserInformation: FC<Iprops> = (props) => {
  const { isLogined, navigation, userInfo } = props

  function handlePickImage(image: any) {
    console.log(image)
  }

  return (
    <View style={styles.informationWrapper}>
      <ImageBackground
        source={{
          uri:
            'https://i.qfangimg.com/resource/qfang-mobile/static/img/user-center-bg.png',
        }}
        style={styles.bgWrapper}
      />
      <View style={styles.informationContent}>
        {isLogined ? (
          <PickImage
            style={[styles.userAvatar, { overflow: 'hidden', zIndex: 99 }]}
            cb={handlePickImage}>
            <Image
              style={{ flex: 1 }}
              source={{
                uri: userInfo.avatar,
              }}
            />
          </PickImage>
        ) : (
          <Image
            style={styles.userAvatar}
            source={{
              uri:
                'https://i.qfangimg.com/resource/qfang-mobile/static/img/default-portrait.png',
            }}
          />
        )}
        <View style={styles.informationBox}>
          {isLogined ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.loginBtn}>{userInfo.nickName}</Text>
            </View>
          ) : (
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.loginBtn}>
              登录/注册
            </Text>
          )}
          <View style={styles.userRecords}>
            <View style={styles.recordItem}>
              <Text style={styles.marginR6}>浏览记录</Text>
              <Icon name='arrowright' size={10} color='#999' />
            </View>
            <View style={styles.recordItem}>
              <Text style={styles.marginR6}>我的订阅</Text>
              <Icon name='arrowright' size={10} color='#999' />
            </View>
            <View style={styles.recordItem}>
              <Text style={styles.marginR6}>我的预约</Text>
              <Icon name='arrowright' size={10} color='#999' />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  informationWrapper: {
    height: 180,
    flex: 1,
    position: 'relative',
  },
  bgWrapper: {
    height: 120,
    marginLeft: -15,
    marginRight: -15,
    width,
    alignItems: 'center',
  },
  informationContent: {
    top: 10,
    left: 0,
    right: 0,
    height: 165,
    paddingTop: 30,
    position: 'absolute',
  },
  userAvatar: {
    position: 'absolute',
    zIndex: 99,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  informationBox: {
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    borderStyle: 'solid',
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
const mapStateToProps = (store: Istore) => {
  return {
    isLogined: store.isLogined,
    userInfo: store.userInfo,
  }
}
export default connect(mapStateToProps)(UserInformation)
