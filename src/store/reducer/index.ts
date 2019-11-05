export enum EacionType {
  CHANGE_DRAWER_STATUS = 'CHANGE_DRAWER_STATUS',
  CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS',
  CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD',
  CHANGE_STORE_DATA = 'CHANGE_STORE_DATA',
  CHANGE_USER_INFO = 'CHANGE_USER_INFO',
}

const initStore: Istore = {
  drawerStatus: false,
  isLogined: false,
  phoneNumber: '+8618928451269',
  password: '123456',
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
  const {type, payload} = action
  switch (type) {
    case EacionType.CHANGE_DRAWER_STATUS:
      const {drawerStatus} = store
      return {...store, drawerStatus: !drawerStatus}
    case EacionType.CHANGE_LOGIN_STATUS:
      return {...store, isLogined: payload}
    case EacionType.CHANGE_USER_PASSWORD:
      return {...store, password: payload}
    case EacionType.CHANGE_STORE_DATA:
      return action.payload
    case EacionType.CHANGE_USER_INFO:
      return {...store, userInfo: payload}
    default:
      return store
  }
}
