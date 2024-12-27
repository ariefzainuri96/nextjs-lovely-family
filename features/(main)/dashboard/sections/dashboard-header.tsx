"use client";

import { toTitleCase } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import icSearch from "@/public/icons/ic-search.svg";
import icClock from "@/public/icons/ic-clock.svg";
import icNotification from "@/public/icons/ic-notification.svg";
import LogoutPopover from "../components/logout-popover";
import SheetSidebar from "../components/sheet-sidebar/sheet-sidebar";
import Row from "@/components/reusable-components/row";

const DashboardHeader = () => {
    const pathname = usePathname();
    const title = toTitleCase(
        (pathname.split("/").pop() ?? "").replaceAll("-", " "),
    );

    return (
        <div
            className={twMerge(
                "flex w-full flex-row items-center gap-5 px-4 py-[1rem] shadow-md",
                (pathname === "/login" || pathname === "/register") && "hidden",
            )}
        >
            <SheetSidebar />
            <span className="flex-1 text-[1.625rem] font-semibold text-bluePrimary">
                {title === "" ? "Dashboard" : title}
            </span>
            <Image
                src={icSearch}
                alt={"ic-search"}
                className="cursor-pointer"
            />
            <Image src={icClock} alt={"ic-clock"} className="cursor-pointer" />
            <Image
                src={icNotification}
                alt={"ic-bell"}
                color="#000"
                className="cursor-pointer text-bluePrimary"
            />
            <LogoutPopover />
        </div>
    );
};

export default DashboardHeader;
