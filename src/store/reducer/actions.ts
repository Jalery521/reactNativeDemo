import {EacionType} from './index'
import {getUserInfo} from '../../api'

export const changeDrawerStatus = () => {
  return {
    type: EacionType.CHANGE_DRAWER_STATUS,
  }
}

export const changeLoginStatus = (payload: boolean) => {
  return {
    type: EacionType.CHANGE_LOGIN_STATUS,
    payload,
  }
}

export const changeUserPassword = (payload: string) => {
  return {
    type: EacionType.CHANGE_USER_PASSWORD,
    payload,
  }
}

export const changeStoreData = (payload: Istore) => {
  return {
    type: EacionType.CHANGE_STORE_DATA,
    payload,
  }
}

export const changeUserInfo = (payload: any) => {
  return {
    type: EacionType.CHANGE_USER_INFO,
    payload,
  }
}

export const pickUserInfo = () => {
  return (dispatch: any) => {
    return new Promise(resolve => {
      getUserInfo().then(({result}: any) => {
        dispatch(changeUserInfo(result.userInfo))
        dispatch(changeLoginStatus(true))
        resolve()
      })
    })
  }
}

export const wipeLoginData = () => {
  return (dispatch: any) => {
    dispatch(changeUserInfo({id: '', avatar: '', nickName: ''}))
    dispatch(changeLoginStatus(false))
  }
}
