import React from "react";
import { twMerge } from "tailwind-merge";
import { RowProps } from "./row";

const Column = ({ children, className, ...props }: RowProps) => {
    return (
        <div
            className={twMerge("flex flex-col items-start", className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Column;
