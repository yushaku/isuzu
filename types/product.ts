export type ProductImage = {
  image: string
  alt: string
}
export type Product = {
  data: {
    name: string
    description: string
    images: Array<ProductImage>
    alias: string
    collection: {
      id: string
      model: string
    }
  }
  lastUpdated: number
  firstPublished: number
}
