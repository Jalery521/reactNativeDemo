import BASE_URL from './baseUrl'

/**
 * 以下为海外获取区域列表
 */
export interface IoverseasAreaItem {
  cnName: string
  enName: string
  uri: string
}

export function getOverseasArea(): Promise<{ result: IoverseasAreaItem[] }> {
  return fetch(`${BASE_URL}/getOverseasArea`).then(res => res.json())
}
