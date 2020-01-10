import React, { FC } from 'react'
import { Text, View, Image } from 'react-native'
import commonStyle from '@/pages/common/style'
interface Iprops {
  recommends: IhouseItem[]
}

// 新房类别列表
const NewRecommends: FC<Iprops> = ({ recommends }) => {
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
                    <Text>{recommend.tags.join('  ')}</Text>
                    <Text style={commonStyle.itemTotalPrice}>
                      {recommend.price}
                    </Text>
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
                <View
                  style={{
                    marginTop: 12,
                    marginLeft: 12,
                    flexDirection: 'row',
                  }}>
                  <Text style={commonStyle.itemSaleIcon}>惠</Text>
                  <Text style={commonStyle.itemSaleDesc}>{recommend.sale}</Text>
                </View>
              </View>
            )
          })
        : null}
    </View>
  )
}

export default NewRecommends
