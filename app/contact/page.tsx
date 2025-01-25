import { ContactForm } from "./form"

export default function ContactPage() {
  return (
    <div className="container flex min-h-[70dvh] flex-col items-center justify-center gap-10 md:flex-row">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.1487605741976!2d106.0596964422926!3d21.177419376213198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350eabc17de5f3%3A0xfeb6d4871fb7163b!2zxJAuIE5nLiBHaWEgVOG7sS83MCBIdXnhu4FuIFF1YW5nLCBLaHUgxJDhu40gWMOhLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1737816646775!5m2!1svi!2s"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>

      <div className="w-full md:w-2/3 lg:w-1/3">
        <h2 className="mb-5 text-center text-3xl font-bold text-primary">
          Liên hệ ngay
        </h2>
        <ContactForm />
      </div>
    </div>
  )
}
