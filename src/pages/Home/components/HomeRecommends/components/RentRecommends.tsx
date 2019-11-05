import React, {FC} from 'react'
import {Text, View, Image} from 'react-native'
import {IrecommendItem} from '.././../../index.d'
import commonStyle from '../style'
interface Iprops {
  recommends: IrecommendItem[]
}

const RentRecommends: FC<Iprops> = ({recommends}) => {
  return (
    <View>
      {recommends.length
        ? recommends.map((recommend, index) => {
            return (
              <View
                key={recommend.id}
                style={[
                  commonStyle.recommendItem,
                  index > 0 ? commonStyle.recommendDivider : null,
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={commonStyle.itemImg} source={recommend} />
                  <View>
                    <Text style={commonStyle.descTitle}>{recommend.title}</Text>
                    <Text style={commonStyle.descTags}>{recommend.desc}</Text>
                    <Text style={commonStyle.totalPrice}>
                      {recommend.price}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      {recommend.traits.map(trait => {
                        return (
                          <Text style={commonStyle.houseTrait} key={trait}>
                            {trait}
                          </Text>
                        )
                      })}
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        : null}
    </View>
  )
}

export default RentRecommends
