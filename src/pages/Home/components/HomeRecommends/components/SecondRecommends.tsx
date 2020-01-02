import React, { FC } from 'react'
import { Text, View, Image } from 'react-native'
import commonStyle from '@/pages/common/style'
interface Iprops {
  recommends: IhouseItem[]
}

const SecondRecommends: FC<Iprops> = ({ recommends }) => {
  return (
    <View>
      {recommends && recommends.length
        ? recommends.map((recommend, index) => {
            return (
              <View
                key={recommend.id}
                style={[
                  commonStyle.houseItem,
                  index > 0 ? commonStyle.itemDivider : null,
                ]}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={commonStyle.itemImg} source={recommend} />
                  <View>
                    <Text style={commonStyle.itemDescTitle}>
                      {recommend.title}
                    </Text>
                    <Text style={commonStyle.itemDescTags}>
                      {recommend.desc}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={commonStyle.itemTotalPrice}>
                        {recommend.total}
                      </Text>
                      <Text style={commonStyle.itemAveragePrice}>
                        {recommend.price}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      {recommend.traits.map((trait) => {
                        return (
                          <Text style={commonStyle.itemTrait} key={trait}>
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
