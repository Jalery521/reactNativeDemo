import React, {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from './Icon'

interface Iprops {
  siteName?: string
}

const Footer: FC<Iprops> = ({siteName}) => {
  return (
    <View style={style.footerWrapper}>
      <View style={style.footerContent}>
        <View style={style.footerSite}>
          <Text style={style.siteName}>qfangwang深圳站</Text>
          <Icon name='jiantouxia' size={12} color='#999' />
        </View>
        <View style={style.linksBox}>
          <View style={style.InternalLinks}>
            <Text style={style.linkName}>App下载</Text>
            <Text style={style.linkName}>网站地图</Text>
            <Text style={style.linkName}>房产问答</Text>
            <Text style={style.linkName}>关于我们</Text>
          </View>
          <View>
            <Text style={style.copyRight}>
              Copyright © 2019 qfang.com All Right Reserved
            </Text>
            <Text style={style.copyRight}>
              版权所有：深圳市云房网络科技有限公司
            </Text>
            <Text style={style.copyRight}>ICP备案号：粤ICP备05067219号-3</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  footerWrapper: {
    backgroundColor: '#f5f5f5',
  },
  footerContent: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  footerSite: {
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  siteName: {
    color: '#333',
    fontSize: 14,
  },
  linksBox: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  InternalLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  linkName: {
    fontSize: 14,
    color: '#666',
  },
  copyRight: {
    color: '#ccc',
    fontSize: 12,
    lineHeight: 18,
  },
})

export default Footer
