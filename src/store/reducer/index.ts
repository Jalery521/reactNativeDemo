export enum EacionType {
  CHANGE_DRAWER_STATUS = 'CHANGE_DRAWER_STATUS',
  CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS',
}

const initState: Istore = {
  drawerStatus: false,
  isLogined: false,
}

export default (store: Istore = initState, action: any) => {
  switch (action.type) {
    case EacionType.CHANGE_DRAWER_STATUS:
      const {drawerStatus} = store
      return {...store, drawerStatus: !drawerStatus}
    case EacionType.CHANGE_LOGIN_STATUS:
      const {isLogined} = store
      return {...store, isLogined: !isLogined}
    default:
      return store
  }
}
