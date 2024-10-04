import { url } from "inspector";
import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images, ...images, ...images, ...images, ...images, ...images, ...images].map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-2x1 h-full w-full text-center">
          Please Sign In Above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
