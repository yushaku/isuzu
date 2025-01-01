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
  CarouselNext,
  CarouselPrevious,
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
        <CarouselPrevious />
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="h-[70dvh] rounded-lg">
                <div
                  className="size-full rounded bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>

      <BestProducts />

      <div
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
      <Categories />
      <Feedback />
    </section>
  )
}

const BestProducts = () => {
  return (
    <div>
      <h3 className="mb-5 mt-10 text-center text-3xl font-bold text-primary">
        Sản phẩm nổi bật
      </h3>

      <Carousel className="container p-10">
        <CarouselContent>
          {topProducts.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
              <Card className="relative mt-14 overflow-visible rounded-3xl text-center">
                <img src={item.image} alt="image" className="h-48 w-full" />

                <CardContent className="mt-4">
                  <p>{item.name}</p>
                </CardContent>

                <span className="flex items-center justify-center">
                  {Array.from({ length: item.stars }, (_, i) => {
                    return (
                      <StarIcon
                        key={i}
                        className="size-4 fill-orange-500 text-orange-500"
                      />
                    )
                  })}
                </span>

                <CardHeader>
                  <CardDescription className="line-through">
                    {item.basePrice}
                  </CardDescription>
                  <CardDescription className="font-bold text-primary">
                    {item.price}
                  </CardDescription>
                </CardHeader>
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

          <article className="flex">
            <div
              className="my-2 w-80 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url("${cate.banner}")` }}
            ></div>

            <Carousel className="w-full">
              <CarouselContent>
                {cate.items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="py-2 md:basis-1/2 lg:basis-1/4"
                  >
                    <Card className="text-center hover:shadow-xl">
                      <img
                        src={item.image}
                        alt="image"
                        className="h-48 w-full"
                      />

                      <CardContent className="mt-2">
                        <p>{item.name}</p>
                      </CardContent>

                      <span className="flex items-center justify-center">
                        {Array.from({ length: item.stars }, (_, i) => {
                          return (
                            <StarIcon
                              key={i}
                              className="size-4 fill-orange-500 text-orange-500"
                            />
                          )
                        })}
                      </span>

                      <CardHeader className="py-3">
                        <CardDescription className="line-through">
                          {item.basePrice}
                        </CardDescription>
                        <CardDescription className="text-xl font-bold">
                          {item.price}
                        </CardDescription>
                      </CardHeader>
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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
