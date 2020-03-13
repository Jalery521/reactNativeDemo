import React, { FC, useState } from 'react'
import { View, Modal, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { IsecondQueryForm } from '@/api/second'
import { getFiltrationArea, getFiltrationPrice, getFiltrationHouse, getFiltrationMore, IfiltrationItem, IfiltrationChild, TareaType, TpriceType, ImoreQuery } from '@/api/filtration'
import FiltrationSort, { TitemValue } from './components/FiltrationSort'
import FiltrationTitle from './components/FiltrationTitle'
import FiltrationArea from './components/FiltrationArea'
import FiltrationPrice from './components/FiltrationPrice'
import FiltrationHouse from './components/FiltrationHouse'
import FiltrationMore from './components/FiltrationMore'

interface Iprops {
  isShow: boolean
  changeIsShow: (val: boolean) => void
  isRent?: boolean
  activeIndex: number     // 筛选类型index
  changeActiveIndex: (val: number) => void
  queryForm: IsecondQueryForm
  changeQueryForm: (queryForm: IsecondQueryForm) => void
}

const Filtration: FC<Iprops> = (props: Iprops) => {
  const { isShow, changeIsShow, isRent = false, activeIndex, changeActiveIndex, queryForm, changeQueryForm } = props
  const { order } = queryForm

  const { area, price, house, more } = queryForm

  const [areaData, changeAreaData] = useState([] as IfiltrationItem[])
  const [priceData, changePriceData] = useState([] as IfiltrationItem[])
  const [houseData, changeHouseData] = useState([] as IfiltrationChild[])
  const [moreData, changeMoreData] = useState([] as IfiltrationItem[])

  // 页面上点击筛选类别
  function handleOpenFiltration(index: number) {
    changeIsShow(true)
    handleChangeActiveIndex(index)
  }

  // 更改选中类别
  function handleChangeActiveIndex(index: number) {
    changeActiveIndex(index)
    requestData(index)
  }

  // 更改排序规则
  function changeSortQuery(order: TitemValue) {
    const newQueryForm = { ...queryForm, order }
    changeQueryForm(newQueryForm)
  }

  // 更改区域筛选
  function changeAreaQuery(type: TareaType, value: string) {
    const newQueryForm = { ...queryForm, area: { type, value } }
    changeQueryForm(newQueryForm)
  }

  // 更改售价信息
  function changePriceQuery(type: TpriceType, value: string) {
    const newQueryForm = { ...queryForm, price: { type, value } }
    changeQueryForm(newQueryForm)
  }

  // 更改更多信息
  function changeMoreQuery(more: ImoreQuery[]) {
    const newQueryForm = { ...queryForm, more }
    changeQueryForm(newQueryForm)
  }

  // 更改户型信息
  function changeHouseQuery(house: string) {
    const newQueryForm = { ...queryForm, house }
    changeQueryForm(newQueryForm)
  }

  function requestData(index: number) {
    switch (index) {
      case 0:
        requestAreaData()
        break;
      case 1:
        requestPriceData()
        break;
      case 2:
        requestHouseData()
        break;
      case 3:
        requestMoreData()
        break;
    }
  }

  // 获取区域菜单
  async function requestAreaData() {
    if (areaData.length) return
    try {
      const { result } = await getFiltrationArea()
      changeAreaData(result)
    } catch (err) {
      console.log(err)
    }
  }

  // 获取售价菜单
  async function requestPriceData() {
    if (priceData.length) return
    try {
      const { result } = await getFiltrationPrice()
      changePriceData(result)
    } catch (err) {
      console.log(err)
    }
  }

  // 获取户型菜单
  async function requestHouseData() {
    if (houseData.length) return
    try {
      const { result } = await getFiltrationHouse()
      changeHouseData(result)
    } catch (err) {
      console.log(err)
    }
  }

  // 获取更多菜单
  async function requestMoreData() {
    if (moreData.length) return
    try {
      const { result } = await getFiltrationMore()
      changeMoreData(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View>
      <FiltrationTitle isRent={isRent} activeIndex={activeIndex} changeActiveIndex={handleOpenFiltration} />
      <Modal transparent={true} visible={isShow}>
        <View style={{ flex: 1 }}>
          {/* 筛选内容区域 */}
          <View style={{ height: 400, backgroundColor: '#fff' }}>
            <KeyboardAvoidingView behavior="padding" style={{ height: 400, backgroundColor: '#fff' }}>
              {/* 顶部筛选菜单 */}
              <FiltrationTitle isRent={isRent} activeIndex={activeIndex} changeActiveIndex={handleChangeActiveIndex} />
              <View style={{ flex: 1 }}>
                {/* 底部筛选条件显示区域 */}
                {
                  activeIndex === 0 ? <FiltrationArea defaultActive={area} areaData={areaData} changeAreaQuery={changeAreaQuery} /> : (
                    activeIndex === 1 ? <FiltrationPrice priceData={priceData} defaultActive={price} changePriceQuery={changePriceQuery} /> : (
                      activeIndex === 2 ? <FiltrationHouse defualtAcitve={house} houseData={houseData} changeHouseQuery={changeHouseQuery} /> : (
                        activeIndex === 3 ? <FiltrationMore defaultActive={more} moreData={moreData} changeMoreQuery={changeMoreQuery} /> : <FiltrationSort isRent={isRent} sortValue={order} changeSortQuery={changeSortQuery} />
                      )
                    ))
                }
              </View>
            </KeyboardAvoidingView>
          </View>
          {/* 底部遮罩,点击关闭 */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
            onPress={() => changeIsShow(false)} />
        </View>
      </Modal>
    </View>

  )
}


const styles = StyleSheet.create({

})

export default Filtration
