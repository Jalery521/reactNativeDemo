import React, {FC} from 'react'
import {Modal, View, ActivityIndicator} from 'react-native'

interface IloadingProps {
  isShow: boolean
  children: any
}
const Loading: FC<IloadingProps> = ({isShow, children}) => {
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
