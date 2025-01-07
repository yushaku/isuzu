/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { StarIcon } from "lucide-react"

import { categories, feedbacks, topProducts } from "@/lib/mock"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export default function IndexPage() {
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
      <BestProducts />
      <SaleBanner />
      <Categories />
      <Feedback />
    </section>
  )
}

const BestProducts = () => {
  return (
    <div className="container p-4 lg:py-10">
      <h3 className="mb-5 mt-10 text-left text-3xl font-bold text-primary md:text-center">
        Sản phẩm nổi bật
      </h3>

      <Carousel>
        <CarouselContent>
          {topProducts.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Card className="rounded-2xl p-2 text-center">
                <img
                  src={item.image}
                  alt="image"
                  className="h-24 w-full md:h-48"
                />
                <p className="mt-4 text-sm md:text-lg">{item.name}</p>

                <span>
                  {Array.from({ length: item.stars }, (_, i) => {
                    return (
                      <StarIcon
                        key={i}
                        className="inline size-4 fill-orange-500 text-orange-500"
                      />
                    )
                  })}
                </span>

                <p className="mt-3 text-sm line-through md:text-lg">
                  {item.basePrice}
                </p>
                <strong className="text-sm font-bold text-primary md:text-lg">
                  {" "}
                  {item.price}
                </strong>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

const Categories = () => {
  return (
    <div className="container py-10">
      {categories.map((cate, index) => (
        <div key={index} className="mt-10">
          <h4 className="text-center text-2xl font-bold text-primary">
            {cate.title}
          </h4>

          <article className="flex flex-col md:flex-row">
            <div
              className="my-2 hidden rounded-xl bg-cover bg-center md:block md:min-w-64 xl:min-w-80"
              style={{ backgroundImage: `url("${cate.banner}")` }}
            />

            <div
              className="my-2 h-80 w-full rounded-xl bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url("${cate.smBanner}")` }}
            />

            <Carousel>
              <CarouselContent>
                {cate.items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <Card className="rounded-2xl text-center">
                      <img
                        src={item.image}
                        alt="image"
                        className="h-24 w-full md:h-48"
                      />
                      <p className="4 mt-4 text-sm md:text-lg">{item.name}</p>
                      <span>
                        {Array.from({ length: item.stars }, (_, i) => {
                          return (
                            <StarIcon
                              key={i}
                              className="inline size-4 fill-orange-500 text-orange-500"
                            />
                          )
                        })}
                      </span>
                      <p className="mt-3 text-sm line-through md:text-lg">
                        {item.basePrice}
                      </p>
                      <strong className="text-sm font-bold text-primary md:text-lg">
                        {" "}
                        {item.price}
                      </strong>
                    </Card>
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
