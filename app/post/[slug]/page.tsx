import Image from "next/image"

export default function PostPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose prose-gray max-w-3xl mx-auto">
        <h1 className="font-light text-4xl mb-4 text-center !mt-0">Steinbeck at His Best: The Grapes of Wrath</h1>
        <p className="text-sm text-muted-foreground mb-8 text-center">September 5, 2023</p>
        <div className="relative h-[500px] mb-8 not-prose">
          <Image src="/placeholder.svg" alt="Post cover" fill className="object-cover" />
        </div>
        <p>
          In the vast landscape of American literature, few novels have captured the essence of human resilience quite
          like John Steinbeck's "The Grapes of Wrath." This masterpiece, published in 1939, continues to resonate with
          readers today, its themes of struggle, dignity, and hope as relevant as ever.
        </p>
        <p>
          The novel follows the Joad family's journey from Oklahoma to California during the Great Depression, a trek
          that represents not just physical movement but a profound spiritual and emotional transformation.
        </p>
        <h2>The Power of Human Spirit</h2>
        <p>
          What makes "The Grapes of Wrath" truly remarkable is Steinbeck's ability to weave together individual stories
          with broader social commentary. Through the Joads' experiences, we witness the devastating effects of economic
          hardship, environmental disaster, and social injustice.
        </p>
      </article>
    </div>
  )
}

