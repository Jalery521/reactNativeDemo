const BASE_URL =
  'https://www.fastmock.site/mock/91d0a86196f8fa285374f59b9c397d6d/qfang'

export const getHomeAssets = () => {
  return fetch(`${BASE_URL}/getHomeAssets`).then(res => res.json())
}

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
}

export const getSecondHouses = () => {
  return fetch(`${BASE_URL}/getSecondHouses`).then(res => res.json())
}
