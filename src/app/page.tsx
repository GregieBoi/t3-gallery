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
    <div className="flex flex-wrap justify-center gap-4">
      {
        images.map((image) => (
          <div key={image.id} className="flex w-48 h-48 flex-col">
            <Image 
              src={image.url} 
              width={480}
              height={480}
              style={{ objectFit: "contain" }}
              alt={image.name}
            />
            <div>{image.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default async function HomePage() {


  return (
    <main className="">

      <SignedOut>
        <div className="w-full h-full text-2x1 text-center">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
      
    </main>
  );
}
