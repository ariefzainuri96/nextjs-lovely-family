"use client";

import { toTitleCase } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useCallback, useState } from "react";
import Row from "./row";
import { twMerge } from "tailwind-merge";
import icHome from "@/public/icons/ic-home.svg";

const Breadcrumbs = () => {
    const [paths, setPaths] = useState<string[]>([]);
    const pathname = usePathname();
    const router = useRouter();

    // use callback
    const getPaths = useCallback(() => {
        return pathname
            .split("/")
            .filter((item) => item !== "")
            .map((item) => {
                return toTitleCase(item.replaceAll("-", " "));
            });
    }, [pathname]);

    useEffect(() => {
        setPaths(getPaths());
    }, [getPaths]);

    return (
        <div className="w-full overflow-x-auto">
            <Row className="gap-2">
                <Image
                    onClick={(e) => {
                        e.preventDefault();

                        router.replace("/");
                    }}
                    src={icHome}
                    alt={"Home"}
                    className="cursor-pointer"
                />
                {paths.map((item, index) => {
                    return (
                        <Row key={index} className="gap-2">
                            <div className="size-[.375rem] rounded-full bg-[#465478]" />
                            <span
                                className={twMerge(
                                    "text-[.875rem] font-medium",
                                    item.toLowerCase() ===
                                        (pathname.split("/").pop() ?? "")
                                        ? "text-[#1E3A8A]"
                                        : "text-[#465478]",
                                )}
                            >
                                {item}
                            </span>
                        </Row>
                    );
                })}
            </Row>
        </div>
    );
};

export default Breadcrumbs;
