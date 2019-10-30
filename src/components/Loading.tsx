import React, {FC} from 'react'
import {Modal, View, ActivityIndicator} from 'react-native'
interface Iprops {
  isShow: boolean
  children: any
}
const Loading: FC<Iprops> = ({isShow, children}: Iprops) => {
  return isShow ? (
    <Modal transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator style={{alignSelf: 'center'}} />
      </View>
    </Modal>
  ) : (
    <View>{children}</View>
  )
}
export default Loading
