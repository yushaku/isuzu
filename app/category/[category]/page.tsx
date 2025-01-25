import { Collection, Product } from "@/types"
import { builder } from "@builder.io/sdk"

import { PUBLIC_KEYS } from "@/config/site"
import { Category } from "@/components/builder/category"

builder.init(PUBLIC_KEYS.BUILDER)
interface PageProps {
  params: {
    category: string
  }
}
export default async function Page(props: PageProps) {
  const cates = (await builder.getAll("collections", {
    query: {
      // "data.alias": props?.params?.category,
    },
  })) as Collection[]

  const current = cates.find((c) => c.data.alias === props?.params?.category)
  const products = (await builder.getAll("product-details", {
    query: {},
  })) as Product[]

  const productList = products.filter(
    (item) => item.data.collection.id === current?.id
  )

  if (!current)
    return (
      <div className="flex h-screen items-center justify-center">not found</div>
    )

  return (
    <Category category={current} categoryList={cates} products={productList} />
  )
}
