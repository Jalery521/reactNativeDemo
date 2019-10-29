import React, {FC} from 'react'
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native'
interface Iprops {
  isShow: boolean
  children: any
}
const Loading: FC<Iprops> = ({isShow, children}: Iprops) => {
  return isShow ? (
    <Modal transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator style={Style.loading} />
      </View>
    </Modal>
  ) : (
    <View>{children}</View>
  )
}

const Style = StyleSheet.create({
  loading: {
    alignSelf: 'center',
  },
})
export default Loading
