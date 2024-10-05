import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: {photoId: number}) {

  const image = await getImage(props.photoId);

  const uploaderInfo = await clerkClient().users.getUser(image.userId);
  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img src={image.url} className="object-contain flex-shrink"/>
        </div>

        <div className="w-48 flex flex-col flex-shrink-0 border-l">
            <div className="text-lg border-b text-center p-2">{image.name}</div>

            <div className="p-2">
                <span>Uploaded By:</span>
                <span>{uploaderInfo.fullName}</span>
            </div>

            <div className="p-2">
                <span>Uploaded On:</span>
                <span>{image.createdAt.toLocaleDateString()}</span>
            </div>

            <div className="p-2 text-center">
                <form action={async () => {
                    "use server";

                    const idAsNumber = Number(image.id);

                    await deleteImage(idAsNumber)
                }}
                >
                    <Button type="submit" variant="destructive">
                        Delete
                    </Button>
                </form>
            </div>
        </div>
    </div>
  );
}