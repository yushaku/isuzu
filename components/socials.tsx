import React from "react"
import Link from "next/link"
import { Phone } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

export const socials = [
  {
    Logo: Phone,
    title: "phone",
    link: `tel:+${siteConfig.links.phone}`,
  },
  {
    Logo: Icons.facebook,
    title: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    Logo: Icons.zalo,
    title: "Zalo",
    link: "https://www.facebook.com",
  },
]

export const Socials = () => {
  return (
    <div className="fixed bottom-1/4 right-5 z-40 space-y-5 rounded-full bg-sky-400/20 px-2 py-4">
      {socials.map(({ Logo, link }) => {
        return (
          <div className="flex items-center gap-2">
            <Link href={link} className="relative flex">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400/30 opacity-75"></span>
              <Logo className="size-10" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
