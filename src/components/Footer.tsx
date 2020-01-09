import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from './Icon'

interface Iprops {
  siteName?: string
}

const Footer: FC<Iprops> = ({ siteName }) => {
  return (
    <View style={styles.footerWrapper}>
      <View style={styles.footerContent}>
        <View style={styles.footerSite}>
          <Text style={styles.siteName}>qfangwang深圳站</Text>
          <Icon name='jiantouxia' size={12} color='#999' />
        </View>
        <View style={styles.linksBox}>
          <View style={styles.InternalLinks}>
            <Text style={styles.linkName}>App下载</Text>
            <Text style={styles.linkName}>网站地图</Text>
            <Text style={styles.linkName}>房产问答</Text>
            <Text style={styles.linkName}>关于我们</Text>
          </View>
          <View>
            <Text style={styles.copyRight}>
              Copyright © 2019 qfang.com All Right Reserved
            </Text>
            <Text style={styles.copyRight}>
              版权所有：深圳市云房网络科技有限公司
            </Text>
            <Text style={styles.copyRight}>ICP备案号：粤ICP备05067219号-3</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerWrapper: {
    backgroundColor: '#f5f5f5',
    paddingTop: 15,
  },
  footerContent: {
    backgroundColor: '#fff',
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
