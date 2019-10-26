import React, {FC} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

interface Iprops {
  recommends: IrecommendItem[]
  recommendCategory: TrecommendCategory
  changeRecommendCategory: (recommendCategory: TrecommendCategory) => void
}

const HomeRecommends: FC<Iprops> = ({
  recommends,
  recommendCategory,
  changeRecommendCategory,
}) => {
  return (
    <View style={style.recommendWrapper}>
      <View style={style.recommendCategory}>
        <Text style={style.recommendTitle}>为您推荐</Text>
        <View style={style.categoryBox}>
          <Text
            onPress={() => changeRecommendCategory('second')}
            style={[
              {color: recommendCategory === 'second' ? '#ffb200' : '#666'},
              style.font12,
            ]}>
            二手房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('new')}
            style={[
              {color: recommendCategory === 'new' ? '#ffb200' : '#666'},
              style.marginL12,
              style.font12,
            ]}>
            新房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('rent')}
            style={[
              {color: recommendCategory === 'rent' ? '#ffb200' : '#666'},
              style.marginL12,
              style.font12,
            ]}>
            租房
          </Text>
        </View>
      </View>
      <View>
        {recommends.map(recommend => {
          return (
            <View key={recommend.id} style={style.recommendItem}>
              <View style={style.flexRow}>
                <Image style={style.itemImg} source={recommend} />
                <View>
                  <Text style={style.descTitle}>{recommend.title}</Text>
                  {recommendCategory === 'new' ? (
                    <Text>{recommend.tags.join('  ')}</Text>
                  ) : (
                    <Text style={style.descTags}>{recommend.desc}</Text>
                  )}
                  {recommendCategory === 'second' ? (
                    <View style={style.flexRow}>
                      <Text style={style.totalPrice}>{recommend.total}</Text>
                      <Text style={style.averagePrice}>{recommend.price}</Text>
                    </View>
                  ) : (
                    <Text style={style.totalPrice}>{recommend.price}</Text>
                  )}
                  <View style={style.flexRow}>
                    {recommend.traits.map(trait => {
                      return (
                        <Text style={style.houseTrait} key={trait}>
                          {trait}
                        </Text>
                      )
                    })}
                  </View>
                </View>
              </View>
              {recommendCategory === 'new' ? (
                <View style={[style.marginT12, style.marginL12, style.flexRow]}>
                  <Text style={style.saleIcon}>惠</Text>
                  <Text style={style.saleDesc}>{recommend.sale}</Text>
                </View>
              ) : null}
            </View>
          )
        })}
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  recommendWrapper: {
    margin: 20,
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
  font12: {
    fontSize: 12,
  },
  marginL12: {
    marginLeft: 12,
  },
  marginT12: {
    marginTop: 12,
  },
  recommendItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 15,
    paddingTop: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  itemImg: {
    width: 100,
    height: 80,
    marginRight: 10,
  },
  descTitle: {
    fontSize: 16,
  },
  descTags: {
    fontSize: 12,
    color: '#666',
  },
  totalPrice: {
    color: '#ff6d6d',
    fontWeight: 'bold',
  },
  averagePrice: {
    marginLeft: 10,
    color: '#999',
  },
  houseTrait: {
    color: '#75919e',
    backgroundColor: '#effaff',
    padding: 2,
    borderRadius: 2,
    marginRight: 5,
  },
  saleIcon: {
    color: '#fff',
    backgroundColor: '#eb6465',
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 2,
  },
  saleDesc: {
    marginLeft: 10,
    color: '#698bb3',
  },
})

export default HomeRecommends
