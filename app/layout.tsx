import "@/styles/globals.css"
import { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpeg"], // Add Twitter-specific image
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>

          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-FSE68T9472" />
    </html>
  )
}
