/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Collection, Product } from "@/types"
import { builder } from "@builder.io/sdk"
import { StarIcon } from "lucide-react"

import { PUBLIC_KEYS } from "@/config/site"
import { feedbacks } from "@/lib/mock"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Socials } from "@/components/socials"

const images = [
  "https://makita.com.vn/uploads/2021/06/cleaner-01new-01-01-4.jpg",
  "https://makita.com.vn/uploads/2021/06/2021_lxt-vn-18v-01-1.jpg",
  "/cleaning.png",
  "/40Vmax.png",
]

builder.init(PUBLIC_KEYS.BUILDER)

export default async function IndexPage() {
  const specialProducts = (await builder.getAll("product-details", {
    query: {
      // "data.isSpecial": true,
    },
  })) as any

  const collections = (await builder.getAll("collections", {
    query: {
      // "data.isSpecial": true,
    },
  })) as Collection[]

  return (
    <section className="grid items-center gap-6 overflow-hidden pb-8">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="h-[70dvh] w-full rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Socials />
      <BestProducts specialProducts={specialProducts} />
      <CateList data={collections} />
      <SaleBanner />
      <Categories collections={collections} products={specialProducts} />
      <Feedback />

      <div className="container mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.1487605741976!2d106.0596964422926!3d21.177419376213198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350eabc17de5f3%3A0xfeb6d4871fb7163b!2zxJAuIE5nLiBHaWEgVOG7sS83MCBIdXnhu4FuIFF1YW5nLCBLaHUgxJDhu40gWMOhLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1737816646775!5m2!1svi!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

const BestProducts = ({
  specialProducts,
}: {
  specialProducts: Array<Product>
}) => {
  return (
    <div className="container p-4 lg:py-10">
      <h3 className="mb-5 mt-10 text-left text-3xl font-bold text-primary md:text-center">
        SẢN PHẨM NỔI BẬT
      </h3>

      <Carousel>
        <CarouselContent>
          {specialProducts
            .filter((item) => item.data.isSpecial)
            .map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Link href={`/products/${item.data.alias}`}>
                  <Card className="rounded-2xl p-2 text-center">
                    <img
                      src={item.data.images[0].image}
                      alt={item.data.images[0].alt}
                      className="h-24 w-full md:h-48"
                    />
                    <p className="mt-4 text-sm md:text-lg">{item.data.name}</p>

                    <p className="px-auto mt-3 w-full rounded-lg border border-primary py-2 text-sm text-primary md:text-lg">
                      Liên hệ
                    </p>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

const CateList = ({ data }: { data: Collection[] }) => {
  return (
    <div className="container p-4 lg:py-10">
      <h3 className="mb-5 mt-10 text-left text-3xl font-bold text-primary md:text-center">
        DANH MỤC NỔI BẬT
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Link
            href={`/category/${item.data.alias}`}
            key={index}
            className="group w-full cursor-pointer text-center"
          >
            <img
              src={item.data.banner}
              alt={item.data.name}
              className="w-full rounded-lg"
            />
            <h3 className="text-xl font-bold group-hover:text-primary">
              {item.data.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

const Categories = ({
  collections,
  products,
}: {
  collections: Collection[]
  products: Product[]
}) => {
  const categories = collections.map((cate) => ({
    ...cate,
    products: products.filter(
      (product) => product.data.collection.id === cate.id
    ),
  }))

  return (
    <div className="container py-10">
      {categories.map((cate, index) => (
        <div
          key={index}
          className={cn("mt-10", cate.products.length === 0 && "hidden")}
        >
          <h4 className="mb-5 text-center text-lg font-bold text-primary">
            {cate.data.name}
          </h4>

          <article className="flex flex-col md:flex-row">
            <div
              className="my-2 hidden rounded-xl bg-cover bg-center md:block md:min-w-64 xl:min-w-80"
              style={{ backgroundImage: `url("${cate.data.sideBanner}")` }}
            />

            <div
              className="my-2 h-80 w-full rounded-xl bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url("${cate.data.sideBanner}")` }}
            />

            <Carousel className="flex-1">
              <CarouselContent>
                {cate.products.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
                  >
                    <Link
                      href={`/products/${item.data.alias}`}
                      className="rounded-2xl text-center"
                    >
                      <Card>
                        <img
                          src={item.data.images[0].image}
                          alt="image"
                          className="h-24 w-full md:h-48"
                        />
                        <p className="4 mt-4 line-clamp-2 text-sm">
                          {item.data.name}
                        </p>
                        <Button className="my-3 text-sm md:text-lg">
                          Liên hệ
                        </Button>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </article>
        </div>
      ))}
    </div>
  )
}

const Feedback = () => {
  return (
    <div
      className="size-full rounded bg-cover bg-center"
      style={{ backgroundImage: `url(/banner.webp)` }}
    >
      <h3 className="mb-5 mt-10 text-center text-2xl font-bold text-primary-foreground">
        Khách hàng nói gì về chúng tôi
      </h3>

      <Carousel className="container py-10">
        <CarouselContent>
          {feedbacks.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="relative mt-14 overflow-visible rounded-2xl text-center">
                <Avatar className="absolute -top-8 left-1/2 size-16 -translate-x-1/2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <CardContent className="mt-14">
                  <p>{item.content}</p>
                </CardContent>

                <span className="flex items-center justify-center">
                  <StarIcon className="size-4 fill-orange-500 text-orange-500" />
                  <StarIcon className="size-4 fill-orange-500 text-orange-500" />
                  <StarIcon className="size-4 fill-orange-500 text-orange-500" />
                  <StarIcon className="size-4 fill-orange-500 text-orange-500" />
                  <StarIcon className="size-4 fill-orange-500 text-orange-500" />
                </span>
                <CardHeader>
                  <CardDescription className="font-bold">
                    {item.name}
                  </CardDescription>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

const SaleBanner = () => {
  return (
    <div
      className="size-full rounded bg-cover bg-center"
      style={{ backgroundImage: `url(/banner.webp)` }}
    >
      <div className="container py-10 text-center text-primary-foreground">
        <p className="text-lg">Mua hàng dễ dàng</p>
        <h3 className="mb-5 text-2xl">Không cần Đến Shop</h3>

        <Link
          href="/contact"
          className="my-10 rounded-lg border bg-border px-4 py-2 text-primary"
        >
          Liên hệ ngay
        </Link>
      </div>
    </div>
  )
}
