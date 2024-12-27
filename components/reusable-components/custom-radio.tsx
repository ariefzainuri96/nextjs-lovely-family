import React, { ComponentPropsWithoutRef } from "react";
import Row from "./row";
import { twMerge } from "tailwind-merge";

type CustomRadioProps = {
    label?: string;
    className?: string;
} & ComponentPropsWithoutRef<"input">;

export default function CustomRadio({
    label,
    className,
    ...props
}: CustomRadioProps) {
    return (
        <Row className={twMerge("gap-4", className)}>
            <input className="size-5" type="radio" {...props} />
            {label && (
                <label htmlFor={props.id} className="poppins500-16">
                    {label}
                </label>
            )}
        </Row>
    );
}
