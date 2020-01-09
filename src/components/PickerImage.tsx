import React, { FC, useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import style from '@/pages/common/style'

type IchoiceType = 'picker' | 'camera'
interface IoptionItem {
  label: string
  value: IchoiceType
}

interface Iprops {
  type?: IchoiceType
  children: any
  title?: string
  options?: IoptionItem[]
  cropParams?: {
    width: number
    height: number
  }
  style?: {
    [key: string]: any
  }
  cb: (image: any) => void
}

const defaultTitle = '选择图片'
const defaultOptions: IoptionItem[] = [
  { label: '拍照', value: 'camera' },
  { label: '选择照片', value: 'picker' },
]
const defaultCropParams = {
  width: 100,
  height: 100,
}
const PickImage: FC<Iprops> = ({
  type,
  children,
  style,
  cropParams = defaultCropParams,
  title = defaultTitle,
  options = defaultOptions,
  cb,
}) => {
  const [isShow, changeIsShow] = useState(false)
  const pickOption = {
    ...cropParams,
    cropping: true,
    writeTempFile: true,
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
      <Modal transparent={true} visible={isShow}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.2)',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.optionWrapper}>
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{title}</Text>
              {options.map((option) => {
                return (
                  <Text
                    key={option.value}
                    style={styles.optionItem}
                    onPress={() => handleOption(option.value)}>
                    {option.label}
                  </Text>
                )
              })}
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

// interface IoptionItem {
//   label: string
//   value: string
// }

// interface IchoiceModalProps {
//   title: string
//   options: IoptionItem[]
// }

// const choiceModal: FC = (title: string, options: string[]) => {
//   return (

//   )
// }

const styles = StyleSheet.create({
  optionWrapper: {
    padding: 15,
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
