import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CustomTextProps = {
    children: ReactNode;
    className?: string;
};

export default function CustomText({ children, className }: CustomTextProps) {
    return (
        <span className={twMerge("poppins400-16", className)}>{children}</span>
    );
}
