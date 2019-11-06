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
// 二手  / 新房   / 租房    / 商业办公   /  海外  / 写字楼售   / 写字楼租
type TTransactionType =
  | 'SECOND'
  | 'NEW'
  | 'RENT'
  | 'OFFICE'
  | 'OVERSEAS'
  | 'OFFICE_SALE'
  | 'OFFICE_RENT'
