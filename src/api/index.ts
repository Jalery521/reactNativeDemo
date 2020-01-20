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

export function getHomeAssets(): Promise<{ result: IhomeAssetsResult }> {
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
export function getUserInfo(): Promise<{ result: IuserInfo }> {
  return fetch(`${BASE_URL}/getUserInfo`).then(res => res.json())
}

/**
 * 以下为二手房页面接口
 */
export function getSecondHouses(): Promise<{ result: IhouseItem[] }> {
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

export function getNewAssets(): Promise<{ result: InewAssetsResult }> {
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

export function getOverseasArea(): Promise<{ result: IareaItem[] }> {
  return fetch(`${BASE_URL}/getOverseasArea`).then(res => res.json())
}

/**
 * 二手房详情
 */

export interface Ibroker {
  id: string
  avatar: string
  name: string
  score: number
  evaluatePeople: number
  post: string
  affiliation: string
  relation: string
  phone: number
}

export interface Ievaluate {
  id: string
  title: string
  remark: string
}

export interface Ishool {
  id: string
  name: string
  distance: string
  level: string
}

export interface Igarden {
  name: string
  price: number
  year: number
  category: string
  area: string
}
export interface IsecondDetail {
  id: string
  imgs: string[]
  traits: string[]
  title: string
  total: string
  type: string
  acreage: number
  price: number
  budget: string
  orientation: '东' | '南' | '西' | '北'
  floor: number
  decoration: string
  number: number
  entrustStartTime: string
  entrustEndTime: string
  subway: string
  brokers: Ibroker[]
  evaluates: Ievaluate[]
  schools: Ishool[]
  garden: Igarden

}

export function getSecondDetail(id: string): Promise<{ result: IsecondDetail }> {
  return fetch(`${BASE_URL}/getSecondDetail/${id}`).then(res => res.json())
}
