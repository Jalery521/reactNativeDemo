import React, {FC} from 'react'
import {Text, View, Image} from 'react-native'
import commonStyle from '../style'
import {IrecommendItem} from '.././../../index.d'
interface Iprops {
  recommends: IrecommendItem[]
}

const SecondRecommends: FC<Iprops> = ({recommends}) => {
  return (
    <View>
      {recommends && recommends.length
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
                    <View style={{flexDirection: 'row'}}>
                      <Text style={commonStyle.totalPrice}>
                        {recommend.total}
                      </Text>
                      <Text style={commonStyle.averagePrice}>
                        {recommend.price}
                      </Text>
                    </View>
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

export default SecondRecommends
