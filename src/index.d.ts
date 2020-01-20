declare module 'react-native-baidu-map' {
  export const MapView: any
  export const Overlay: any
}
interface Istore {
  drawerStatus: boolean
  isLogined: boolean
  phoneNumber: string
  password: string
  searchHistory: string[]
  userInfo: {
    nickName: string
    id: string
    avatar: string
  }
}
interface IhouseItem {
  id: string
  uri: string
  title: string
  desc: string
  tags: string[]
  total: string
  price: string
  traits: string[]
  sale: string
}
