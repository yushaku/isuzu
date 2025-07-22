import { NextResponse } from "next/server"
import { Resend } from "resend"

import EmailTemplate from "@/app/contact/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { username, email, phone, content } = await request.json()

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["anhhoaphat@gmail.com"],
      subject: `New Contact Form Submission from ${username}`,
      react: EmailTemplate({
        username,
        email,
        phone,
        content,
      }) as React.ReactElement,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
