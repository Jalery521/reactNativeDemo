import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'
import { IsecondHouseShool } from '@/api/second'
import commonStyle from './styles'
interface Iprops {
  schools: IsecondHouseShool[]
}

const DetailSchools: FC<Iprops> = ({ schools }) => {
  return (
    <View style={commonStyle.commonWrapper}>
      <Text style={commonStyle.commonTitle}>学区</Text>
      {schools.map((school) => {
        return (
          <View key={school.id} style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ flex: 1, color: '#333' }}>{school.name}</Text>
              <View
                style={{
                  width: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.schoolLevel}>{school.level}</Text>
                <Icon name='arrowright' size={14} color='#c5c4c4' />
              </View>
            </View>
            <Text style={{ color: '#999999' }}>距离{school.distance}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  schoolLevel: {
    padding: 5,
    backgroundColor: '#fdf3e2',
    color: '#eda43a',
    fontSize: 12,
    marginRight: 10,
  },
})

export default DetailSchools
