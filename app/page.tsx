import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <Image
        className="mb-6"
        src="/logo-kemenag.png"
        alt={`logo kemenag`}
        width={128}
        height={128}
        loading="lazy"
        decoding="async"
      />
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Buku Saku Digital</h1>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        Panduan Praktis Bagi Guru dalam Memanfaatkan Video Pendek Sebagai Media Pembelajaran
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Masuk
        </Link>
      </div>
    </section>
  )
}
