"use client"

import { ComponentProps } from "react"
import DefaultErrorPage from "next/error"
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"
import { BuilderContent, builder } from "@builder.io/sdk"

import { PUBLIC_KEYS } from "@/config/site"

builder.init(PUBLIC_KEYS.BUILDER)

export function RenderBuilderContent(
  props: ComponentProps<typeof BuilderComponent>
) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing()
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />
  }

  // If the `content` is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />
}
