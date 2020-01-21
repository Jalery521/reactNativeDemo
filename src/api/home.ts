import BASE_URL from './baseUrl'
/**
 * 以下为获取首页信息接口及定义
 */
// 二手房价趋势
export interface IhomePriceTrend {
  month: number
  average: number
  trend: number
}
// 二手/新房/租房推荐
export interface IhomeRecommends {
  newRecommends: IhouseItem[]
  rentRecommends: IhouseItem[]
  secondRecommends: IhouseItem[]
}
// 热词搜索
export interface IhomeHotHistoryItem {
  id: string
  name: string
}

export interface IhomeAssetsResult {
  priceTrend: IhomePriceTrend
  recommends: IhomeRecommends
  banner: Ibanner
  hotSearch: IhomeHotHistoryItem[]
}

export function getHomeAssets(): Promise<{ result: IhomeAssetsResult }> {
  return fetch(`${BASE_URL}/getHomeAssets`).then(res => res.json())
}
