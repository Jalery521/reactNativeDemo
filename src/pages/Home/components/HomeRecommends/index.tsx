import React, {FC, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NewRecomends from './components/NewRecommends'
import RentRecommends from './components/RentRecommends'
import SecondRecommends from './components/SecondRecommends'
interface Iprops {
  recommends: {
    newRecommends: IhouseItem[]
    rentRecommends: IhouseItem[]
    secondRecommends: IhouseItem[]
  }
}
const HomeRecommends: FC<Iprops> = ({recommends}) => {
  const [recommendCategory, changeRecommendCategory] = useState('SECOND')
  const {secondRecommends, newRecommends, rentRecommends} = recommends

  return (
    <View style={style.recommendWrapper}>
      <View style={style.recommendCategory}>
        <Text style={style.recommendTitle}>为您推荐</Text>
        <View style={style.categoryBox}>
          <Text
            onPress={() => changeRecommendCategory('SECOND')}
            style={{
              color: recommendCategory === 'SECOND' ? '#ffb200' : '#666',
              fontSize: 12,
            }}>
            二手房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('NEW')}
            style={{
              color: recommendCategory === 'NEW' ? '#ffb200' : '#666',
              fontSize: 12,
              marginLeft: 12,
            }}>
            新房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('RENT')}
            style={{
              color: recommendCategory === 'RENT' ? '#ffb200' : '#666',
              fontSize: 12,
              marginLeft: 12,
            }}>
            租房
          </Text>
        </View>
      </View>
      {recommendCategory === 'NEW' ? (
        <NewRecomends recommends={newRecommends} />
      ) : recommendCategory === 'SECOND' ? (
        <SecondRecommends recommends={secondRecommends} />
      ) : (
        <RentRecommends recommends={rentRecommends} />
      )}
    </View>
  )
}

const style = StyleSheet.create({
  recommendWrapper: {
    marginTop: 15,
  },
  recommendCategory: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryBox: {
    flexDirection: 'row',
    paddingTop: 4,
  },
})

export default HomeRecommends
