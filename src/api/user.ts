import BASE_URL from './baseUrl'

/**
 * 以下为获取用户信息接口及定义
 */
export interface IuserInfo {
  id: string
  nickName: string
  avatar: string
}
export function getUserInfo(): Promise<{ result: IuserInfo }> {
  return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
}
