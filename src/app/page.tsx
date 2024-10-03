import { url } from "inspector";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/RM4zbiZHj0e8NTLhb25hpBFnQfTeD2t7gZqxz5UHujvIWPyL",
  "https://utfs.io/f/RM4zbiZHj0e8bVTeaNwtPiOSU1LxbapWM9VgoI2kKeZs3NEG",
  "https://utfs.io/f/RM4zbiZHj0e8QaOe3pNgZ5EGAF7DCfbisIoXHaTp2NLzSx1M",
  "https://utfs.io/f/RM4zbiZHj0e86rKTA2XFphnYr8fWyaKdeTD9Ao0EcC16ZwG2"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))
        }
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48 p-4">
              <img src={image.url} alt="image"/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
