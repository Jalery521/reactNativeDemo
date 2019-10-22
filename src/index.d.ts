type TrecommendCategory = 'new' | 'second' | 'rent'
interface ImenuItem {
  id: string
  name: string
  uri: string
}
interface Icarousel {
  id: string
  uri: string
}
interface IcategoryItem {
  uri: string
  id: string
  name: string
}
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
