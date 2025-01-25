import { Product } from "@/types"
import { builder } from "@builder.io/sdk"

import { PUBLIC_KEYS } from "@/config/site"
import { ProductDetails } from "@/components/builder/index"

// Replace with your Public API Key.
builder.init(PUBLIC_KEYS.BUILDER)

interface PageProps {
  params: {
    product: string[]
  }
}
export default async function Page(props: PageProps) {
  const productDetails = await builder.getAll("product-details", {
    query: {
      "data.alias": props?.params?.product,
    },
  })

  const product = productDetails[0] as Product
  if (!product)
    return (
      <div className="flex h-screen items-center justify-center">not found</div>
    )

  return <ProductDetails product={product} />
}
