import { ComponentPropsWithoutRef, useRef } from "react";
import Row from "./row";
import Column from "./column";
import { twMerge } from "tailwind-merge";
import CustomButton from "./custom-button";
import { X } from "lucide-react";
import Image from "next/image";

type CustomFilePickerProps = {
    title: string;
    label: string;
    image?: string;
    className?: string;
    onReset: () => void;
} & ComponentPropsWithoutRef<"input">;

export default function CustomFilePicker({
    title,
    label,
    className,
    image,
    onReset,
    ...props
}: CustomFilePickerProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <Column className={twMerge("w-full", className)}>
            <Row
                className={twMerge(
                    "flex w-full flex-shrink gap-6",
                    image && "hidden",
                )}
            >
                <span className="poppins400-16 flex-1 text-[#4F4F4F]">
                    {title}
                </span>
                <Row className="flex-1">
                    <CustomButton
                        onClick={(e) => {
                            e.preventDefault();

                            fileInputRef?.current?.click();
                        }}
                        title={"Choose File"}
                        borderColor="#E0E0E0"
                        backgroundColor="#F2F2F2"
                        textColor="#4F4F4F"
                        variant={"filled"}
                    />
                </Row>
                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    {...props}
                />
            </Row>
            {image && (
                <div className="relative rounded-[8px] border border-[#E3E3E3]">
                    <div className="relative z-0 p-3">
                        <Image
                            className="rounded-[8px] outline-none"
                            src={image}
                            width={160}
                            height={160}
                            alt="selected-image"
                        />
                    </div>
                    <label className="poppins500-14 absolute left-6 top-[-10px] bg-white px-1 text-[#BFBFBF]">
                        {label}
                    </label>
                    <div
                        onClick={() => onReset()}
                        className="absolute right-[-8px] top-[-8px] flex size-[1.375rem] cursor-pointer items-center justify-center rounded-full bg-[#FF5B5B]"
                    >
                        <X size={16} color="#fff" />
                    </div>
                </div>
            )}
        </Column>
    );
}
