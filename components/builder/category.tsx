/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import Link from "next/link"
import { Collection, Product } from "@/types"

import { cn } from "@/lib/utils"
import useDebounce from "@/hooks/useDebounce"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination"

type Props = {
  category: Collection
  categoryList: Collection[]
  products: Array<Product>
}

export const Category = ({ category, categoryList, products }: Props) => {
  const [search, setSearch] = React.useState("")
  const dSearch = useDebounce(search, 500)

  const result = products.filter((product) => {
    return product.data.name.toLowerCase().includes(dSearch.toLowerCase())
  })

  return (
    <section className="container p-4 lg:py-10">
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xl" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-bold">
                {category.data.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Input
          className="w-1/4"
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-12 flex gap-5">
        <ul className="hidden w-72 md:block">
          <li className="mb-5 text-xl font-bold">DANH MỤC SẢN PHẨM</li>

          {categoryList.map((item, index) => {
            const isSelected = category.id === item.id
            return (
              <li
                key={index}
                className={cn(
                  "rounded-lg border-t border-border/50 py-2 hover:bg-accent hover:font-bold",
                  isSelected && "font-bold"
                )}
              >
                <Link href={`/category/${item.data.alias}`}>
                  {item.data.name}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {result.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.data.alias}`}
              className="flex flex-col items-center justify-center rounded-lg border border-border"
            >
              <img
                src={product.data.images[0].image}
                alt={product.data.name}
                className="size-48"
              />
              <p className="mt-2">{product.data.name}</p>
              <Button className="my-2">Liên hệ</Button>
            </Link>
          ))}
        </div>
      </div>

      <Pagination className="mt-24 hidden">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  )
}
