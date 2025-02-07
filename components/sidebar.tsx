import Image from "next/image"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">About Me</h3>
        <div className="relative h-32 w-32 mx-auto mb-4">
          <Image src="/placeholder.svg" alt="Author photo" fill className="object-cover rounded-full" />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Hi, I'm Emily. I write about literature, life, and everything in between. Welcome to my blog!
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Latest Posts</h3>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Link key={i} href={`/post/${i + 1}`} className="flex gap-4 group">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image src="/placeholder.svg" alt="Post thumbnail" fill className="object-cover rounded-lg" />
              </div>
              <div>
                <h4 className="text-sm font-medium group-hover:text-gray-600">The Art of Slow Living</h4>
                <p className="text-xs text-muted-foreground">August 24, 2023</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

