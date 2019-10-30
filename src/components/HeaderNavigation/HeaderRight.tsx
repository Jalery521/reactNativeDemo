import React, {FC} from 'react'
import Icon from '../Icon'

interface Iprops {
  navigation: any
}

const HeaderRight: FC<Iprops> = ({navigation}) => {
  return (
    <Icon name='daohang' size={20} color='#333' style={{marginRight: 15}} />
  )
}
export default HeaderRight
