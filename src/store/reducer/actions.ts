import {EacionType} from './index'

export const changeDrawerStatus = () => {
  return {
    type: EacionType.CHANGE_DRAWER_STATUS,
  }
}

export const changeLoginStatus = () => {
  return {
    type: EacionType.CHANGE_LOGIN_STATUS,
  }
}
