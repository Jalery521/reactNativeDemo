const BASE_URL =
  'https://www.fastmock.site/mock/91d0a86196f8fa285374f59b9c397d6d/qfang'


/**
 * 以下为获取首页信息接口及定义
 */
// 二手房价趋势
export interface IpriceTrend {
  month: number
  average: number
  trend: number
}
// 二手/新房/租房推荐
export interface Irecommends {
  newRecommends: IhouseItem[]
  rentRecommends: IhouseItem[]
  secondRecommends: IhouseItem[]
}
// 热词搜索
export interface IhotHistoryItem {
  id: string
  name: string
}
// banner
export interface Ibanner {
  id: string
  uri: string
}

export interface IhomeAssetsResult {
  priceTrend: IpriceTrend
  recommends: Irecommends
  banner: Ibanner
  hotSearch: IhotHistoryItem[]
}

export const getHomeAssets = (): Promise<{ result: IhomeAssetsResult }> => {
  return fetch(`${BASE_URL}/getHomeAssets`).then(res => res.json())
}
/**
 * 以下为获取用户信息接口及定义
 */
export interface IuserInfo {
  id: string
  nickName: string
  avatar: string
}
export const getUserInfo = (): Promise<{ result: IuserInfo }> => {
  return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
}

/**
 * 以下为二手房页面接口
 */
export const getSecondHouses = (): Promise<{ result: IhouseItem[] }> => {
  return fetch(`${BASE_URL}/getSecondHouses`).then(res => res.json())
}

/**
 * 以下为新房页面接口及定义
 */
// 资讯头条
export interface Iinformation {
  id: string
  title: string
}
// 热门楼盘
export interface IhotItem {
  id: string
  uri: string
  name: string
  area: string
  address: string
  price: string
}
// 楼盘评测
export interface Ievaluation {
  id: string
  title: string
  imgs: string[]
}
// 小Q看房
export interface IlookItem {
  id: string
  title: string
  people: number
  date: string
  uri: string
}
// 优惠楼盘
export interface IdiscountItem {
  id: string
  name: string
  people: number
  uri: string
  lightspot: string
}
// 最新开盘
export interface IopenItem {
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
  information: Iinformation[][]
  hot: IhotItem[]
  evaluation: Ievaluation
  lookList: IlookItem[]
  discountList: IdiscountItem[]
  openList: IopenItem[]
}

export const getNewAssets = (): Promise<{ result: InewAssetsResult }> => {
  return fetch(`${BASE_URL}/getNewAssets`).then(res => res.json())
}

/**
 * 以下为海外获取区域列表
 */
export interface IareaItem {
  cnName: string
  enName: string
  uri: string
}

export const getOverseasArea = (): Promise<{ result: IareaItem[] }> => {
  return fetch(`${BASE_URL}/getOverseasArea`).then(res => res.json())
}
