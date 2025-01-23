"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignJustify, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Switch } from "./ui/switch"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <article className="flex items-center justify-between gap-6 md:gap-10 lg:justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="size-6" />
            <h1 className="inline-block font-bold">{siteConfig.name}</h1>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {siteConfig.mainNav?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn("text-sm font-medium hover:text-primary")}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        </article>

        <MobleMenu />
      </div>
    </header>
  )
}

const MobleMenu = () => {
  const [toggle, setToggle] = useState(false)
  const { setTheme, theme } = useTheme()
  const styled = toggle ? "right-0 top-0" : "-right-full top-0"

  return (
    <div className="z-50">
      <Button onClick={() => setToggle(!toggle)}>
        <AlignJustify className="block size-5" />
      </Button>

      <div
        onClick={() => setToggle(false)}
        className={cn(
          "animate delay-50 fixed -right-full top-0 z-30 hidden h-screen w-screen bg-gray-500/20 duration-100",
          toggle && "right-0 block"
        )}
      />

      <div
        className={cn(
          "animate fixed z-50 h-screen w-80 bg-background p-5",
          styled
        )}
      >
        <h3 className="mt-1 flex justify-between">
          <span className="text-xl font-bold text-primary">
            Điện máy Anh Khoa Phát
          </span>

          <X className="size-6" onClick={() => setToggle(false)} />
        </h3>

        <nav className="mt-5 flex flex-col">
          {siteConfig.mainNav?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "border-b py-3 text-lg font-medium hover:text-primary"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>

        <span className="mx-auto mt-10 flex gap-4">
          <Sun className="size-5" />
          <Switch
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <Moon className="size-5" />
        </span>
      </div>
    </div>
  )
}
