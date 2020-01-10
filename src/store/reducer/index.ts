export enum EacionType {
  CHANGE_DRAWER_STATUS = 'CHANGE_DRAWER_STATUS',
  CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS',
  CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD',
  CHANGE_STORE_DATA = 'CHANGE_STORE_DATA',
  CHANGE_USER_INFO = 'CHANGE_USER_INFO',
  CHANGE_USER_NICKNAME = 'CHANGE_USER_NICKNAME',
  ADD_SEARCH_HISTORY = 'ADD_SEARCH_HISTORY',
  CLEAR_SEARCH_HISTORY = 'CLEAR_SEARCH_HISTORY',
}

const initStore: Istore = {
  drawerStatus: false,
  isLogined: false,
  phoneNumber: '+8618928451269',
  password: '123456',
  searchHistory: [],
  userInfo: {
    id: '',
    nickName: '',
    avatar: '',
  },
}

interface Iaction {
  type: EacionType
  payload?: any
}

export default (store: Istore = initStore, action: Iaction) => {
  const { type, payload } = action
  switch (type) {
    case EacionType.CHANGE_DRAWER_STATUS: // 全局页面载入loading
      const { drawerStatus } = store
      return { ...store, drawerStatus: !drawerStatus }
    case EacionType.CHANGE_LOGIN_STATUS: // 更改登陆态
      return { ...store, isLogined: payload }
    case EacionType.CHANGE_USER_PASSWORD: //  更改账户密码
      return { ...store, password: payload }
    case EacionType.CHANGE_STORE_DATA: // 更改store数据
      return action.payload
    case EacionType.CHANGE_USER_INFO: // 更改用户信息
      return { ...store, userInfo: payload }
    case EacionType.ADD_SEARCH_HISTORY: // 添加搜索历史记录
      const { searchHistory } = store
      return { ...store, searchHistory: [...searchHistory, payload] }
    case EacionType.CLEAR_SEARCH_HISTORY: // 清除搜索历史记录
      return { ...store, searchHistory: [] }
    default:
      return store
  }
}
