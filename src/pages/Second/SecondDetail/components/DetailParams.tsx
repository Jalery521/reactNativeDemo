import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { IsecondDetail } from '@/api'
import commonStyle from './styles'
interface Iprops {
  detail: IsecondDetail
}

const DetailParams: FC<Iprops> = ({ detail }) => {
  const { traits = [] } = detail
  return (
    <View style={styles.detailWrapper}>
      <View style={styles.traitBox}>
        {traits.length
          ? traits.map((trait) => {
              return (
                <Text key={trait} style={styles.traitItem}>
                  {trait}
                </Text>
              )
            })
          : null}
      </View>
      <Text style={styles.titleStyle}>{detail.title}</Text>
      <View style={styles.baseInfo}>
        <View
          style={[
            styles.baseItem,
            {
              borderRightColor: '#eaeaea',
              borderRightWidth: 1,
              borderStyle: 'solid',
            },
          ]}>
          <Text style={styles.baseValue}>{detail.total}</Text>
          <Text style={styles.baseLabel}>售价</Text>
        </View>
        <View
          style={[
            styles.baseItem,
            {
              borderRightColor: '#eaeaea',
              borderRightWidth: 1,
              borderStyle: 'solid',
            },
          ]}>
          <Text style={styles.baseValue}>{detail.type}</Text>
          <Text style={styles.baseLabel}>房型</Text>
        </View>
        <View style={styles.baseItem}>
          <Text style={styles.baseValue}>{detail.acreage.toFixed(2)}㎡</Text>
          <Text style={styles.baseLabel}>建筑面积</Text>
        </View>
      </View>
      <View style={styles.houseInfo}>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>单价：</Text>
          <Text>{detail.price}</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>费用预算：</Text>
          <Text>{detail.budget}</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>朝向：</Text>
          <Text>{detail.orientation}</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>楼层：</Text>
          <Text>{detail.floor}</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>装修：</Text>
          <Text>{detail.decoration}</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>电梯：</Text>
          <Text>没有电梯</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>房源编码：</Text>
          <Text>{detail.number}</Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>委托时间：</Text>
          <Text>
            {detail.entrustStartTime} - {detail.entrustEndTime}
          </Text>
        </View>
        <View style={styles.houseInfoItem}>
          <Text style={styles.houseInfoLabel}>地铁：</Text>
          <Text>{detail.subway}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={commonStyle.viewMoreBtn}>
          <Text style={{ color: '#6789b2' }}>查看更多房源信息</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailWrapper: {
    padding: 15,
    backgroundColor: '#ffffff',
  },
  traitBox: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  traitItem: {
    color: '#75919e',
    fontSize: 12,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#effaff',
    marginRight: 3,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 15,
  },
  baseInfo: {
    borderStyle: 'solid',
    borderColor: '#f0f0f0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  baseItem: {
    flex: 1,
    height: 40,
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  baseLabel: {
    fontSize: 12,
    color: '#999',
  },
  baseValue: {
    color: '#ff6d6d',
    fontSize: 16,
  },
  houseInfo: {
    paddingTop: 15,
  },
  houseInfoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  houseInfoLabel: {
    width: 80,
    color: '#999',
  },
})

export default DetailParams
