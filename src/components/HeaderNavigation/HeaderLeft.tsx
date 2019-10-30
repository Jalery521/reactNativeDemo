import React, {FC} from 'react'
import Icon from '../Icon'

interface Iprops {
  toHome?: boolean
  navigation: any
}

const HeaderLeft: FC<Iprops> = ({toHome, navigation}) => {
  function handleBack() {
    toHome ? navigation.navigate('Home') : navigation.goBack()
  }

  return (
    <Icon
      name={toHome ? 'shouye' : 'fanhui'}
      onPress={handleBack}
      size={20}
      color='#666'
      style={{marginLeft: 15}}
    />
  )
}

export default HeaderLeft
