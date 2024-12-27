import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { PhotoData } from "@/features/(main)/dashboard/model/get-photo-response";

type CustomImageProps = {
    image: PhotoData;
    className?: string;
};

export default function CustomImage({ image, className }: CustomImageProps) {
    return (
        <div
            className={twMerge(
                "relative h-64 overflow-hidden rounded-xl bg-gray-200 shadow-md",
                className,
            )}
        >
            <Image
                src={image.imageUrl ?? ""}
                alt={image.filename ?? ""}
                className="object-cover hover:opacity-75"
                sizes="(min-width: 2740px) calc(8.46vw + 25px), (min-width: 2480px) calc(9.58vw + 20px), (min-width: 2220px) calc(12.92vw - 31px), (min-width: 1940px) calc(14.23vw - 19px), (min-width: 1680px) calc(17.92vw - 44px), (min-width: 1440px) calc(25.91vw - 116px), (min-width: 1100px) calc(25.31vw - 21px), (min-width: 840px) calc(32.08vw - 14px), (min-width: 580px) calc(50vw - 32px), calc(97.31vw - 34px)"
                fill={true}
            />
        </div>
    );
}
