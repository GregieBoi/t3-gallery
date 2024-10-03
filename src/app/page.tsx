import { url } from "inspector";
import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48 p-4">
              <img src={image.url} alt="image"/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
