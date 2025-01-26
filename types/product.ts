export type ProductImage = {
  image: string
  alt: string
}
export type Product = {
  data: {
    name: string
    description: string
    isSpecial: boolean
    images: Array<ProductImage>
    alias: string
    collection: {
      id: string
      model: string
    }
    specifications: Array<{
      title: string
      value: string
    }>
  }
  lastUpdated: number
  firstPublished: number
}

export type Collection = {
  id: string
  data: {
    name: string
    alias: string
    banner: string
    sideBanner: string
    description: string
  }
  lastUpdated: number
  firstPublished: number
}
