import { builder } from "@builder.io/sdk"

import { PUBLIC_KEYS } from "@/config/site"

import { RenderBuilderContent } from "../../components/builder"

builder.init(PUBLIC_KEYS.BUILDER)

interface PageProps {
  params: {
    page: string[]
  }
}

export default async function Page(props: PageProps) {
  const model = "page"
  const content = await builder
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      prerender: true, // Set prerender to false to return JSON instead of HTML
    })
    .toPromise()

  return (
    <section className="container">
      <h2>demo builder app</h2>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={model} />
    </section>
  )
}
