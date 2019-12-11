import React, {FC} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from '../../../components/Icon'
interface Iprops {
  lookList: any[]
}
const NewLook: FC = () => {
  return (
    <View style={style.lookWrapper}>
      <View style={style.lookContent}>
        <View style={style.titleWrapper}>
          <Text style={style.lookTitle}>小Q看房</Text>
          <TouchableOpacity activeOpacity={0.8} style={style.moreBox}>
            <Text style={{marginRight: 5, color: '#666666'}}>更多</Text>
            <Icon name='arrowright' size={12} color='#666666' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  lookWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  lookContent: {
    backgroundColor: '#fff',
    padding: 15,
  },
  titleWrapper: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default NewLook
