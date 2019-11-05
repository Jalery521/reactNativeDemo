const BASE_URL =
  'https://www.fastmock.site/mock/91d0a86196f8fa285374f59b9c397d6d/qfang'

// export default {
//   getHomeAssets() {
//     return fetch(`${BASE_URL}/getHomeAssets`).then(res => res.json())
//   },
//   getUserInfo() {
//     return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
//   },
// }

export const getHomeAssets = () => {
  return fetch(`${BASE_URL}/getHomeAssets`).then(res => res.json())
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
}
