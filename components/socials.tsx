"use client"

import React from "react"
import Link from "next/link"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Icons } from "./icons"

export const socials = [
  {
    Logo: Phone,
    title: "phone",
    link: `tel:+${siteConfig.links.phone}`,
    description: "Hotline: " + siteConfig.links.phone,
    target: "_self",
  },
  {
    Logo: Icons.facebook,
    title: "Facebook",
    link: siteConfig.links.facebook,
    description: "Facebook: Isuzu Tool",
    target: "_blank",
  },
  {
    Logo: Icons.zalo,
    title: "Zalo",
    link: siteConfig.links.zalo,
    description: "Zalo: " + siteConfig.links.phone,
    target: "_blank",
  },
]

export const Socials = () => {
  return (
    <>
      <div className="fixed bottom-1/4 right-5 z-40 space-y-5 rounded-full bg-sky-400/20 px-2 py-4">
        {socials.map(({ Logo, link, description, title, target }, idx) => {
          // Only Zalo icon opens dialog
          if (title === "Zalo") {
            return (
              <Dialog key={idx}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="relative flex bg-transparent border-0 p-0"
                        aria-label="Zalo QR"
                      >
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400/30 opacity-75"></span>
                        <Logo className="size-10" />
                      </button>
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="left" align="center">
                    {description}
                  </TooltipContent>
                </Tooltip>
                <DialogContent className="flex flex-col items-center justify-center">
                  <img
                    src="/zalo.jpg"
                    alt="Zalo QR"
                    className="max-w-xs max-h-[60vh]"
                  />
                  <DialogTitle className="text-center">
                    <p>Zalo</p>
                    <p>Hotline: {siteConfig.links.phone}</p>
                    <p>Mở app Zalo và quét QR để liên hệ.</p>
                  </DialogTitle>
                </DialogContent>
              </Dialog>
            )
          }
          // Other icons: default behavior
          return (
            <div className="flex items-center gap-2" key={idx}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={link} target={target} className="relative flex">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400/30 opacity-75"></span>
                    <Logo className="size-10" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left" align="center">
                  {description}
                </TooltipContent>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </>
  )
}
