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
    <View style={{padding: 20}}>
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>为您推荐</Text>
        <View style={{flexDirection: 'row', paddingTop: 4}}>
          <Text
            onPress={() => changeRecommendCategory('second')}
            style={{
              fontSize: 12,
              color: recommendCategory === 'second' ? '#ffb200' : '#666',
            }}>
            二手房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('new')}
            style={{
              fontSize: 12,
              marginLeft: 12,
              color: recommendCategory === 'new' ? '#ffb200' : '#666',
            }}>
            新房
          </Text>
          <Text
            onPress={() => changeRecommendCategory('rent')}
            style={{
              fontSize: 12,
              marginLeft: 12,
              color: recommendCategory === 'rent' ? '#ffb200' : '#666',
            }}>
            租房
          </Text>
        </View>
      </View>
      <View>
        {recommends.map(recommend => {
          return (
            <View key={recommend.id} style={style.recommendItem}>
              <View style={{flexDirection: 'row'}}>
                <Image style={{width: 100, height: 80}} source={recommend} />
                <View style={{paddingLeft: 10}}>
                  <Text style={{fontSize: 16}}>{recommend.title}</Text>
                  {recommendCategory === 'new' ? (
                    <Text>{recommend.tags.join('  ')}</Text>
                  ) : (
                    <Text style={{fontSize: 12, color: '#666'}}>
                      {recommend.desc}
                    </Text>
                  )}
                  {recommendCategory === 'second' ? (
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: '#ff6d6d', fontWeight: 'bold'}}>
                        {recommend.total}
                      </Text>
                      <Text style={{marginLeft: 10, color: '#999'}}>
                        {recommend.price}
                      </Text>
                    </View>
                  ) : (
                    <Text style={{color: '#ff6d6d', fontWeight: 'bold'}}>
                      {recommend.price}
                    </Text>
                  )}
                  <View style={{flexDirection: 'row'}}>
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
                <View style={{flexDirection: 'row', paddingLeft: 20}}>
                  <Text style={style.saleIcon}>惠</Text>
                  <Text style={{marginLeft: 10, color: '#698bb3'}}>
                    {recommend.sale}
                  </Text>
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
  recommendItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 15,
    paddingTop: 10,
  },
  houseTrait: {
    color: '#75919e',
    backgroundColor: '#effaff',
    padding: 5,
    borderRadius: 3,
    marginRight: 5,
  },
  saleIcon: {
    color: '#fff',
    backgroundColor: '#eb6465',
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 2,
  },
})

export default HomeRecommends
