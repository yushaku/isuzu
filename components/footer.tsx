import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "./icons"

export const Footer = () => {
  return (
    <footer className="border-t border-muted bg-card pt-8 text-card-foreground">
      <section className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-2">
            <h2 className="mb-4 text-lg font-bold text-primary">
              Thông tin công ty
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-secondary-foreground">
                  CÔNG TY TNHH NHẬP KHẨU THƯƠNG MẠI VÀ DỊCH VỤ ANH KHOA PHÁT
                </p>
                <p>
                  Địa chỉ: Số 70 đường Huyền Quang, Phường Ninh Xá, Thàng phố
                  Bắc Ninh, Tỉnh Bắc Ninh
                </p>
                <p>Tư Vấn Bán Hàng (8h - 18h hằng ngày)</p>
                <p>Hotline: 0999.666.888</p>
              </li>
              <li>
                <p className="font-medium text-secondary-foreground">
                  Chăm sóc khách hàng
                </p>
                <p>Email: anhhoaphat@gmail.com</p>
                <p>Hotline: 0999.666.888</p>
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
              <span className="font-bold">Email:</span>{" "}
              <a href="fax:02743628339" className="text-secondary-foreground">
                anhhoaphat@gmail.com
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
      </section>

      <div className="flex items-center justify-center gap-3 border-y border-muted py-4 text-sm">
        <h3>Kết nối với chúng tôi:</h3>

        <Link href="/" className="text-primary underline">
          <Icons.Facebook className="size-7" />
        </Link>

        <Link href="/" className="text-primary underline">
          <Icons.Youtube className="size-8 stroke-red-600" />
        </Link>

        <Link href="http://online.gov.vn/Home/WebDetails/22561?AspxAutoDetectCookieSupport=1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="logo"
            src="https://phonglien.vn/assets/img/icon/Bitmap%20Copy.png"
          />
        </Link>
      </div>

      <div className="py-2 text-center text-sm">
        <p>Isuzu Vietnam Company Limited. All Rights Reserved. © 2024</p>
      </div>
    </footer>
  )
}
