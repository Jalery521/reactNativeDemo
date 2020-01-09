import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '@/components/Icon'

interface Iprops {
  navigation: any
  handleChangeIsShow: () => void
}

const HomeHeader: FC<Iprops> = (props) => {
  const { handleChangeIsShow, navigation } = props
  return (
    <View style={styles.headerWarpper}>
      <View style={styles.headerContent}>
        <Text style={styles.headerCity}>深圳</Text>
        <View style={styles.inputWarpper}>
          <Icon name='sousuo' size={16} color='#a0a0a0' />
          <Text onPress={handleChangeIsShow} style={styles.headerInput}>
            你想找的小区、商圈
          </Text>
        </View>
      </View>
      {/* <Text >

      </Text> */}
      <View style={styles.personIcon}>
        <Icon
          onPress={() => navigation.navigate('User')}
          name='customuser'
          size={28}
          color='#888'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWarpper: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    borderRadius: 4,
  },
  headerCity: {
    width: 60,
    lineHeight: 20,
    borderRightColor: '#eee',
    borderRightWidth: 2,
    borderStyle: 'solid',
    textAlign: 'center',
  },
  inputWarpper: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInput: {
    paddingLeft: 8,
    lineHeight: 48,
    flex: 1,
    color: '#ccd0db',
  },
  personIcon: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  font12: {
    fontSize: 12,
  },
})

export default HomeHeader
