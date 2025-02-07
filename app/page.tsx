import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative h-[85vh] mb-16">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pZLxmk0XCSHIKeTpuklhmkUyWVniSZ.png"
          alt="Hero image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-6xl font-light mb-4 tracking-wide max-w-4xl">
            Bienvenido a mi blog
          </h1>
          <p className="text-lg font-light tracking-wider mb-8">WP THEME</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="group">
              <Link href={`/post/${i + 1}`}>
                <div className="relative h-64 mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Post thumbnail"
                    fill
                    className="object-cover rounded-none group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <h2 className="text-xl font-light mb-2 group-hover:text-gray-600">
                  The Art of Slow Living
                </h2>
                <p className="text-sm text-muted-foreground">
                  Posted on August 24, 2023
                </p>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
