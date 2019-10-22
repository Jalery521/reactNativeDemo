const BASE_URL =
  'https://www.fastmock.site/mock/91d0a86196f8fa285374f59b9c397d6d/qfang'

export default {
  getHomeStatic() {
    return fetch(`${BASE_URL}/getHomeStatic`).then(res => res.json())
  },
  getRecommend() {
    return fetch(`${BASE_URL}/getRecommend`).then(res => res.json())
  },
}
