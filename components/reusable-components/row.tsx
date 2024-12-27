import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type RowProps = {
    children: React.ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<"div">;

const Row = ({ children, className, ...props }: RowProps) => {
    return (
        <div
            className={twMerge("flex flex-row items-center", className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Row;
