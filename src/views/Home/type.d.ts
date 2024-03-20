export interface HomeHotInfo {
    id: string
    pictures: string[]
    title: string
    alt: string
    target: string
    type: number
  }

  export interface HomeBanner {
    id: string
    imgUrl: string
    hrefUrl: string
    type: number
  }

  export interface Category {
    id: string
    name: string
    icon: string
  }
  

  export interface HomeNew {
    id: string
    picture: string
    name: string
    price: number
    desc: string
  }

  export interface GoodsGuess {
    counts: number
    pageSize: number
    pages: number
    page: number
    items: GoodsItem[]
  }
  
  export interface GoodsItem {
    id: string
    name: string
    desc: string
    price: number
    picture: string
    discount: number
    orderNum: number
  }
  