import React, { FC } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
import { width } from '@/utils'
const estimateWidth = width - 30
const estimateHeight = (width / 686) * 201
const UserProprietor: FC = () => {
  return (
    <View style={styles.proprietorWrapper}>
      <Text style={styles.proprietorTitle}>我是业主</Text>
      <View style={styles.proprietorContent}>
        <Image
          style={styles.estimateImg}
          source={{
            uri:
              'https://i.qfangimg.com/resource/qfang-mobile/static/img/user-assess.png',
          }}
        />
      </View>
      <View style={styles.handleBox}>
        <View style={styles.handleItem}>
          <Icon name='ershoufang' size={14} />
          <Text style={styles.handleName}>我要卖房</Text>
        </View>
        <View style={styles.handleItem}>
          <Icon name='zufang' size={14} />
          <Text style={styles.handleName}>我要出租</Text>
        </View>
        <View style={styles.handleItem}>
          <Icon name='weituo' size={14} />
          <Text style={styles.handleName}>我的委托</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  proprietorWrapper: {
    marginTop: 20,
  },
  proprietorTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  proprietorContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  estimateImg: {
    width: estimateWidth,
    height: estimateHeight,
    borderRadius: 8,
  },
  handleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  handleItem: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f5f5f5',
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
  handleName: {
    color: '#333',
    marginLeft: 4,
  },
})

export default UserProprietor
