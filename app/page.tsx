import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
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
    <section className="container grid  items-center gap-6 pb-8 pt-6 md:py-10">
      <Carousel className="w-full">
        <CarouselPrevious />
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="h-[50dvh] rounded-lg p-1">
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

      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 14 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <div className="bg-card p-4 text-card-foreground">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-2">
            <h2 className="mb-4 text-lg font-bold text-primary">Tin Tức</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-secondary-foreground">
                  20.Th9.2024
                </p>
                <p>CHƯƠNG TRÌNH KHUYẾN MÃI DÀNH CHO MÁY MỚI</p>
              </li>
              <li>
                <p className="font-medium text-secondary-foreground">
                  13.Th8.2024
                </p>
                <p>CHƯƠNG TRÌNH KHUYẾN MÃI DÀNH CHO MÁY MỚI</p>
              </li>
              <li>
                <p className="font-medium text-secondary-foreground">
                  27.Th7.2024
                </p>
                <p>
                  SUPPER HOTTTT - 2 EM &quot;KHỦNG LONG&quot; TW009G & TW010G
                  HIỆN ĐÃ CÓ GIÁ VÀ CHƯƠNG TRÌNH KHUYẾN MÃI SIÊU HẤP DẪN KÈM
                  THEO!
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-1 text-sm">
            <h3 className="mb-2 text-lg font-bold text-primary">Liên Hệ</h3>
            <p>
              <span className="font-bold">Phone:</span>{" "}
              <a href="tel:02743628338" className="text-secondary-foreground">
                0274.362.8338
              </a>
            </p>
            <p>
              <span className="font-bold">Fax:</span>{" "}
              <a href="fax:02743628339" className="text-secondary-foreground">
                0274.362.8339
              </a>
            </p>
            <form className="mt-4">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-muted-foreground"
              >
                Nhập email của bạn để đăng ký nhận tin:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  id="email"
                  className="flex-1 rounded border border-muted bg-input p-2 text-foreground"
                  placeholder="example@email.com"
                />
                <button
                  type="submit"
                  className="rounded bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/80"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="mt-8 border-t border-muted pt-4 text-center text-sm">
          <p>Makita Vietnam Company Limited. All Rights Reserved. © 2024</p>
          <p>
            <a
              href="https://makita.com.vn/product/platform-vn/up100dz-may-cat-canh-dung-pinbl2v-max"
              className="text-accent underline"
            >
              Product Link
            </a>
          </p>
        </footer>
      </div>
    </section>
  )
}
