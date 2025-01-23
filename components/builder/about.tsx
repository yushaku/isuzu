"use client"

import { ComponentProps } from "react"
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"
import { builder } from "@builder.io/sdk"

builder.init("1d386f1910ac419fadff2e315e40cf2b")

export function RenderBuilderContent(
  props: ComponentProps<typeof BuilderComponent>
) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing()
  // If "content" has a value or the section is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />
  }

  return null
}
