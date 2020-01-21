import BASE_URL from './baseUrl'
/**
 * 以下为新房页面接口及定义
 */
// 资讯头条
export interface InewInfo {
  id: string
  title: string
}
// 热门楼盘
export interface InewHotItem {
  id: string
  uri: string
  name: string
  area: string
  address: string
  price: string
}
// 楼盘评测
export interface InewEvaluation {
  id: string
  title: string
  imgs: string[]
}
// 小Q看房
export interface InewLookItem {
  id: string
  title: string
  people: number
  date: string
  uri: string
}
// 优惠楼盘
export interface InewDiscountItem {
  id: string
  name: string
  people: number
  uri: string
  lightspot: string
}
// 最新开盘
export interface InewOpenItem {
  id: string
  name: string
  area: string
  address: string
  typeDesc: string
  openDate: string
  uri: string
}
export interface InewAssetsResult {
  banners: Ibanner[]
  info: InewInfo[][]
  hot: InewHotItem[]
  evaluation: InewEvaluation
  lookList: InewLookItem[]
  discountList: InewDiscountItem[]
  openList: InewOpenItem[]
}

export function getNewAssets(): Promise<{ result: InewAssetsResult }> {
  return fetch(`${BASE_URL}/getNewAssets`).then(res => res.json())
}
