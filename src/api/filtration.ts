import BASE_URL from './baseUrl'

/**
 * 以下为获取搜索中区域下菜单及内容
 */

export type TareaType = 'area' | 'metro' | 'location'
export type TpriceType = 'total' | 'price'
export type TmoreType = 'dimension' |   // 面积
  'decoratio' |  // 装修
  'orientation' |  // 朝向
  'floor' | // 楼层
  'feature' |  // 特色
  'floorYear' |  // 楼龄
  'elevator' |  // 是否有电梯
  'purpose'  // 用途

export interface ImoreQuery {
  type: TmoreType
  value: string
}

export interface IfiltrationChild {
  id: string
  label: string
}

export interface IfiltrationItem {
  name: string
  value: string
  items: IfiltrationChild[]
}
// 获取搜索下区域相关菜单及内容
export function getFiltrationArea(): Promise<{ result: IfiltrationItem[] }> {
  return fetch(`${BASE_URL}/getFiltrationArea`).then((res) => res.json())
}

// 获取售价下相关菜单及内容
export function getFiltrationPrice(): Promise<{ result: IfiltrationItem[] }> {
  return fetch(`${BASE_URL}/getFiltrationPrice`).then((res) => res.json())
}

// 获取搜索下户型相关内容
export function getFiltrationHouse(): Promise<{ result: IfiltrationChild[] }> {
  return fetch(`${BASE_URL}/getFiltrationHouse`).then((res) => res.json())
}

export function getFiltrationMore(): Promise<{ result: IfiltrationItem[] }> {
  return fetch(`${BASE_URL}/getFiltrationMore`).then((res) => res.json())
}
