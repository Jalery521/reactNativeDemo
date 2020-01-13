import React, { FC, useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

type IchoiceType = 'picker' | 'camera'

interface Iprops {
  type?: IchoiceType
  children: any
  title?: string
  cropParams?: {
    width: number
    height: number
  }
  toBase64?: boolean
  style?: {
    [key: string]: any
  }
  cb: (image: any) => void
}

const defaultTitle = '选择图片'
const defaultCropParams = {
  width: 100,
  height: 100,
}
const PickImage: FC<Iprops> = ({
  type,
  children,
  style,
  cropParams = defaultCropParams,
  toBase64 = false,
  title = defaultTitle,
  cb,
}) => {
  const [isShow, changeIsShow] = useState(false)
  const pickOption = {
    ...cropParams,
    cropping: true,
    writeTempFile: true,
    includeBase64: toBase64,
  }
  function handlePickImage() {
    type === undefined ? changeIsShow(true) : handleOption(type)
  }

  async function handleOption(type: IchoiceType) {
    const openFn =
      type === 'camera' ? ImagePicker.openCamera : ImagePicker.openPicker
    try {
      const image = await openFn(pickOption)
      cb(image)
      changeIsShow(false)
    } catch (err) {
      console.log(err)
    }
  }

  function handleCancel() {
    changeIsShow(false)
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePickImage}
      style={style}>
      {children}
      <Modal transparent={true} visible={isShow} animationType='fade'>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.3)',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.optionWrapper}>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{title}</Text>
              <Text
                style={styles.optionItem}
                onPress={() => handleOption('camera')}>
                拍照
              </Text>
              <Text
                style={styles.optionItem}
                onPress={() => handleOption('picker')}>
                选择照片
              </Text>
            </View>
            <View style={[styles.optionContent, { marginTop: 10 }]}>
              <Text style={styles.optionItem} onPress={handleCancel}>
                取消
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  optionWrapper: {
    padding: 15,
    height: 190,
  },
  optionContent: {
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  optionTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#989b9a',
    lineHeight: 30,
  },
  optionItem: {
    color: '#4085d4',
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center',
    borderTopColor: '#ebeeed',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
})

export default PickImage
