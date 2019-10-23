type TrecommendCategory = 'new' | 'second' | 'rent'

interface IrecommendItem {
  id: string
  uri: string
  title: string
  desc: string
  tags: string[]
  total: string
  price: string
  traits: string[]
  sale: string
}
