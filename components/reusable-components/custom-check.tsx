import { CheckIcon } from "lucide-react";
import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type CustomCheckProps = {
    label?: string;
    className?: string;
} & ComponentPropsWithoutRef<"input">;

export const CustomCheck = ({
    label,
    className,
    ...props
}: CustomCheckProps) => {
    return (
        <div className={twMerge("flex flex-row items-center gap-4", className)}>
            <input
                type="checkbox"
                className="disabled:border-steel-400 disabled:bg-steel-400 peer relative mt-[2px] size-[1.25rem] shrink-0 appearance-none rounded-sm border-2
        border-gray1 bg-white checked:border-0 checked:bg-blue-500
        "
                {...props}
            />
            {label && (
                <label
                    htmlFor={props.id}
                    className="text-sm font-normal text-gray-500"
                >
                    {label}
                </label>
            )}
            <CheckIcon className="pointer-events-none absolute mt-[2px] hidden size-[1.25rem] text-white peer-checked:block" />
        </div>
    );
};
