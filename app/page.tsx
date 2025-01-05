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

const images = [
  "https://makita.com.vn/uploads/2021/06/cleaner-01new-01-01-4.jpg",
  "https://makita.com.vn/uploads/2021/06/2021_lxt-vn-18v-01-1.jpg",
  "/cleaning.png",
  "/40Vmax.png",
]

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6 pb-8">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="bg-cover bg-center h-[70dvh] w-full rounded-lg"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

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

      <Carousel >
        <CarouselContent>
          {topProducts.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Card className="rounded-2xl text-center p-2">
                <img src={item.image} alt="image" className="h-24 md:h-48 w-full" />
                <p className="mt-4 text-sm md:text-lg">{item.name}</p>

                <span>
                  {Array.from({ length: item.stars }, (_, i) => {
                    return (
                      <StarIcon
                        key={i}
                        className="size-4 inline fill-orange-500 text-orange-500"
                      />
                    )
                  })}
                </span>

                <p className="line-through mt-3 text-sm md:text-lg">{item.basePrice}</p>
                <strong className="font-bold text-primary text-sm md:text-lg"> {item.price}</strong>
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
    <div className="container p-10">
      {categories.map((cate, index) => (
        <div key={index} className="mt-10">
          <h4 className="text-center text-2xl font-bold text-primary">
            {cate.title}
          </h4>

          <article className="flex flex-col md:flex-row">
            <div
              className="hidden md:block my-2 md:min-w-64 xl:min-w-80 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url("${cate.banner}")` }}
            />

            <div
              className="md:hidden my-2 w-full h-80 rounded-xl bg-cover bg-center"
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
                        className="h-24 md:h-48 w-full"
                      />
                      <p className="mt-4 4 text-sm md:text-lg">{item.name}</p>
                      <span>
                        {Array.from({ length: item.stars }, (_, i) => {
                          return (
                            <StarIcon
                              key={i}
                              className="size-4 fill-orange-500 inline text-orange-500"
                            />
                          )
                        })}
                      </span>
                      <p className="line-through mt-3 text-sm md:text-lg">{item.basePrice}</p>
                      <strong className="font-bold text-primary text-sm md:text-lg"> {item.price}</strong>
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

      <Carousel className="container p-10">
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
  return <div
    className="size-full rounded bg-cover bg-center"
    style={{ backgroundImage: `url(/banner.webp)` }}
  >
    <div className="container p-10 text-center text-primary-foreground">
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
}