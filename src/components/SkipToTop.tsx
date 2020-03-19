import React, { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
interface Iprops {
  isShow: boolean
  handleSkipToTop: () => void
}


const SkipToTop: FC<Iprops> = ({ isShow, handleSkipToTop }) => {
  return isShow ? (
    <TouchableOpacity activeOpacity={0.8} style={styles.skipToTopStyle} onPress={handleSkipToTop} >
      <Text style={{ fontSize: 14, color: '#ffffff' }}>顶部</Text>
    </TouchableOpacity>
  ) : null
}

const styles = StyleSheet.create({
  skipToTopStyle: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#666666',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SkipToTop
