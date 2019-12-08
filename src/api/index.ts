const BASE_URL =
  'https://www.fastmock.site/mock/91d0a86196f8fa285374f59b9c397d6d/qfang'

// 获取首页信息
export const getHomeAssets = () => {
  return fetch(`${BASE_URL}/getHomeAssets`).then(res => res.json())
}
// 获取用户信息
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
}
// 获取二手房列表
export const getSecondHouses = () => {
  return fetch(`${BASE_URL}/getSecondHouses`).then(res => res.json())
}
// 获取新房资讯头条
export const getNewAssets = () => {
  return fetch(`${BASE_URL}/getNewAssets`).then(res => res.json())
}
