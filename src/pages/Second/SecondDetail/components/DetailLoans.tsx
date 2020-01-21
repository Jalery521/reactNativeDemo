import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { VictoryPie } from 'victory-native'
import { IsecondHouseLoanItem } from '@/api/second'
import commonStyle from './styles'

interface Iprops {
  loans: IsecondHouseLoanItem[]
}

const colors = ['#fcc900', '#f39801', '#59b9c7', '#3eb36f']

const DetailLoans: FC<Iprops> = ({ loans }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <View style={styles.titleBox}>
        <Text style={commonStyle.commonTitle}>房贷</Text>
        <Text style={styles.tipStyle}>查询结果仅供参考</Text>
      </View>
      {loans.length ? (
        <View style={{ flexDirection: 'row' }}>
          <VictoryPie
            width={160}
            height={160}
            labels={() => ''}
            data={loans.slice(0, 3)}
            y={(d: IsecondHouseLoanItem) => d.proportion}
            innerRadius={56}
            colorScale={colors}
          />
          <View style={{ flex: 1 }}>
            {loans.map((loan, index) => {
              return (
                <View key={index} style={styles.loanItem}>
                  <Text
                    style={[
                      styles.dotStyle,
                      { backgroundColor: colors[index] },
                    ]}></Text>
                  <Text style={styles.loanLable}>{loan.name}</Text>
                  <Text>{loan.value}</Text>
                  {index === 2 ? (
                    <Text style={[styles.loanLable, { fontSize: 12 }]}>
                      (基准利率{loan.interest})
                    </Text>
                  ) : null}
                </View>
              )
            })}
          </View>
        </View>
      ) : null}
      <TouchableOpacity activeOpacity={0.8} style={commonStyle.viewMoreBtn}>
        <Text style={{ color: '#6789b2' }}>查看更多房源信息</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tipStyle: {
    color: '#999999',
    fontSize: 12,
  },
  loanItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  loanLable: {
    color: '#666666',
    marginRight: 10,
  },
})

export default DetailLoans
