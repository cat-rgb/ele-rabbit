export interface GoodsDetail {
    id: string
    name: string
    spuCode: string
    desc: string
    price: string
    oldPrice: string
    discount: number
    inventory: number
    brand: Brand
    salesCount: number
    commentCount: number
    collectCount: number
    mainVideos: string[]
    videoScale: number
    mainPictures: string[]
    specs: Spec[]
    skus: Sku[]
    categories: Category[]
    details: Details
    isPreSale: boolean
    isCollect: any
    recommends: any
    userAddresses: any
    evaluationInfo: any
    similarProducts: SimilarProduct[]
    hotByDay: HotByDay[]
  }
  
  export interface Brand {
    id: string
    name: string
    nameEn: string
    picture: string
    logo: string
    type: any
    desc: any
    place: any
  }
  
  export interface Spec {
    id: string
    name: string
    values: Value[]
  }
  
  export interface Value {
    name: string
    picture: string
    available: boolean
    desc: string
  }
  
  export interface Sku {
    id: string
    skuCode: string
    price: string
    oldPrice: string
    inventory: number
    picture: string
    specs: Spec2[]
  }
  
  export interface Spec2 {
    name: string
    valueName: string
  }
  
  export interface Category {
    id: string
    name: string
    layer: number
    parent: Parent
  }
  
  export interface Parent {
    id: string
    name: string
    layer: number
    parent: any
  }
  
  export interface Details {
    properties: Property[]
    pictures: string[]
  }
  
  export interface Property {
    name: string
    value: string
  }
  
  export interface SimilarProduct {
    id: string
    picture: string
    name: string
    price: string
    desc: string
    orderNum: number
    discount: any
  }
  
  export interface HotByDay {
    id: string
    picture: string
    name: string
    price: string
    desc: string
    orderNum: number
    discount: any
  }
  