/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import { Product, ProductImage } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

type Params = {
  product: Product
}

export const ProductDetails = ({ product }: Params) => {
  const data = product.data
  const [image, setImage] = useState<ProductImage>(data.images[0])

  return (
    <section className="container">
      <div className="flex flex-wrap p-6 lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center rounded-lg border p-3">
            <img
              src={image.image}
              alt={image.alt}
              className="size-96 rounded-lg"
            />
          </div>
          <div
            className={cn("mt-4 flex justify-center space-x-4", {
              hidden: data.images.length === 1,
            })}
          >
            {data.images.map((src, index) => (
              <img
                key={index}
                src={src.image}
                alt={src.alt}
                className={cn(
                  "size-20 rounded-lg border p-1 opacity-50",
                  src.image === image.image
                    ? "border-orange-500 opacity-100"
                    : ""
                )}
                onClick={() => setImage(src)}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-8">
          <h1 className="mb-4 text-2xl font-bold">
            Máy mài công tắc đuôi HK-AGX1080S
          </h1>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Mã sản phẩm:</span> HK-AGX1080S
            </p>
            <p>
              <span className="font-semibold">Điện áp:</span> 220V, 50-60Hz
            </p>
            <p>
              <span className="font-semibold">Công suất:</span> 800W
            </p>
            <p>
              <span className="font-semibold">Tốc độ không tải:</span> 11000 V/p
            </p>
            <p>
              <span className="font-semibold">Đường kính đĩa:</span> 100mm
            </p>
            <p>
              <span className="font-semibold">Trục chính:</span> M10
            </p>
            <p>
              <span className="font-semibold">Dây điện dài:</span> 3m
            </p>
            <p>
              <span className="font-semibold">Trọng lượng:</span> 1.7kg
            </p>
            <p>
              <span className="font-semibold">Bảo hành:</span> 6 tháng
            </p>
            <p>
              <span className="font-semibold">Nhận hàng:</span> Kiểm tra – Thanh
              Toán
            </p>
          </div>

          <div className="mt-6">
            <button className="flex items-center rounded-lg bg-red-500 px-6 py-3 text-lg font-semibold text-white">
              <p className="mr-3 text-lg font-semibold">Liên hệ</p>
              0333.315.233
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-start gap-5 rounded-lg bg-gray-50 p-6 lg:flex-nowrap">
        {/* Form Section */}
        <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="mb-4 font-medium">
              Để lại thông tin để được chúng tôi tư vấn trong thời gian nhanh
              nhất
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Họ tên"
                  className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full rounded-lg border bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-600 px-4 py-2 text-lg font-medium text-white"
              >
                NHẬN TƯ VẤN
              </button>
            </form>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-lg border bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-semibold text-orange-500">
              CAM KẾT CỦA ISUZU
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Cam kết chính hãng:</strong> Hoàn tiền 200% nếu phát
                hiện hàng giả, hàng nhái.
              </li>
              <li>
                <strong>Cam kết tư vấn đúng:</strong> Chuyên gia tư vấn trực
                tiếp qua hotline/zalo:{" "}
                <span className="font-bold text-red-500">
                  {siteConfig.links.phone}
                </span>
              </li>
              <li>
                <strong>Cam kết bảo mật:</strong> Tuyệt đối không chia sẻ thông
                tin khách hàng cho bên thứ 3.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-3 text-2xl font-bold">Chi tiết sản phẩm</h3>
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </section>
  )
}
