"use client";

import React, { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Column from "./column";
import Row from "./row";

type TextFieldProps = {
    label: string;
    className?: string;
    trailing?: ReactNode;
    variant?: "area" | "input";
    error?: string;
} & ComponentPropsWithoutRef<"input"> &
    ComponentPropsWithoutRef<"textarea">;

export default function CustomTextfield({
    label,
    className,
    trailing,
    variant = "input",
    error,
    ...props
}: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [isEmpty, setIsEmpty] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEmpty(event.target.value.trim() === "");
        if (props.onChange) {
            props.onChange(event);
        }
    };

    const handleAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setIsEmpty(event.target.value.trim() === "");
        if (props.onChange) {
            props.onChange(event);
        }
    };

    return (
        <Column className={twMerge("w-full", className)}>
            <div className="relative w-full">
                {/* Label */}
                <label
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    htmlFor={props.id}
                    className={`absolute left-6 cursor-text font-medium transition-all duration-150 ${
                        isFocused
                            ? "top-[-10px] bg-white px-1 text-[.75rem] text-[#18469C]"
                            : isFocused && (!isEmpty || props.value)
                              ? "top-[-10px] bg-white px-1 text-[.75rem] text-[#18469C]"
                              : !isFocused && (!isEmpty || props.value)
                                ? "top-[-10px] bg-white px-1 text-[.75rem] text-[#BFBFBF]"
                                : "top-3 text-[1rem] text-[#BFBFBF]"
                    }`}
                >
                    {label}
                </label>

                {/* Input */}
                <Row>
                    {variant === "input" && (
                        <input
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={handleInputChange}
                            className={twMerge(
                                `poppins500-16 h-[50px] w-full rounded-md border px-6 transition-colors ${
                                    isFocused || isHovered
                                        ? "border-[#18469C]"
                                        : "border-[#BFBFBF]"
                                }
           duration-300 focus:outline-none`,
                                trailing &&
                                    "flex-1 rounded-br-none rounded-tr-none",
                            )}
                            {...props}
                        />
                    )}
                    {variant === "area" && (
                        <textarea
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={handleAreaChange}
                            className={twMerge(
                                `poppins500-16 w-full rounded-md border px-6 py-4 transition-colors ${
                                    isFocused || isHovered
                                        ? "border-[#18469C]"
                                        : "border-[#BFBFBF]"
                                }
           duration-300 focus:outline-none`,
                                trailing &&
                                    "flex-1 rounded-br-none rounded-tr-none",
                            )}
                            {...props}
                        />
                    )}
                    {trailing}
                </Row>
            </div>
            {error && (
                <span className="poppins400-12 mt-1 text-[#FF5D5D]">
                    {error}
                </span>
            )}
        </Column>
    );
}
