export enum EacionType {
  CHANGE_DRAWER_STATUS = 'CHANGE_DRAWER_STATUS',
}

const initState: Istore = {
  drawerStatus: false,
}

export default (store: Istore = initState, action: any) => {
  switch (action.type) {
    case EacionType.CHANGE_DRAWER_STATUS:
      const {drawerStatus} = store
      return {...store, drawerStatus: !drawerStatus}
    default:
      return store
  }
}
