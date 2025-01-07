import React from "react"
import Image from "next/image"

import { ContactForm } from "./form"

export default function ContactPage() {
  return (
    <div className="container flex min-h-[70dvh] flex-col items-center justify-center gap-10 md:flex-row">
      <Image
        className="hidden rounded-xl md:block"
        alt="logo"
        src="https://sudospaces.com/phonglien-vn/2021/07/may-khoan-bat-vit-makita.png"
        width={300}
        height={300}
      />

      <div className="w-full md:w-2/3 lg:w-1/3">
        <h2 className="mb-5 text-center text-3xl font-bold text-primary">
          Liên hệ ngay
        </h2>
        <ContactForm />
      </div>
    </div>
  )
}
