import React, {FC} from 'react'
import {Text, View, Image} from 'react-native'
import commonStyle from '../../../../common/style'
interface Iprops {
  recommends: IhouseItem[]
}

const NewRecommends: FC<Iprops> = ({recommends}) => {
  return (
    <View>
      {recommends && recommends.length
        ? recommends.map((recommend, index) => {
            return (
              <View
                key={recommend.id}
                style={[
                  commonStyle.houseItem,
                  index > 0 ? commonStyle.houseDivider : null,
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={commonStyle.itemImg} source={recommend} />
                  <View>
                    <Text style={commonStyle.descTitle}>{recommend.title}</Text>
                    <Text>{recommend.tags.join('  ')}</Text>
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
                <View
                  style={{marginTop: 12, marginLeft: 12, flexDirection: 'row'}}>
                  <Text style={commonStyle.saleIcon}>惠</Text>
                  <Text style={commonStyle.saleDesc}>{recommend.sale}</Text>
                </View>
              </View>
            )
          })
        : null}
    </View>
  )
}

export default NewRecommends
