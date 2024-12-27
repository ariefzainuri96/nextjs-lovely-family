"use client";

import { Accordion } from "@/components/ui/accordion";
import { menuList } from "@/features/(main)/dashboard/model/menu-model";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ImgLogo from "@/public/images/img-logo.png";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "./sidebar-provider";
import { useEffect } from "react";
import { useSheetSidebarContext } from "../../components/sheet-sidebar/sheet-sidebar-provider";
import { MenuItem } from "../../components/menu-item";

type SidebarSectionProps = {
    isForDrawer?: boolean;
};

export default function SidebarSection({ isForDrawer }: SidebarSectionProps) {
    const pathname = usePathname();
    const { accordionValue, setAccordionValue } = useSidebarContext();
    const { setSheetOpen } = useSheetSidebarContext();

    useEffect(() => {
        function checkWindowSize() {
            // xl: tailwind breakpoint
            if (window.innerWidth > 1280) {
                setSheetOpen(false);
            }
        }

        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    return (
        <div
            className={twMerge(
                "h-full min-w-[325px] max-w-[325px] bg-blue2",
                pathname === "/login" || pathname === "/register"
                    ? "hidden"
                    : isForDrawer
                      ? ""
                      : "hidden xl:block",
            )}
        >
            <div className="flex flex-col">
                <div className="flex w-full flex-row items-center gap-2 px-[1.5rem] py-[.75rem]">
                    <Image src={ImgLogo} alt="logo" width={44} height={64} />
                    <div className="flex flex-col items-start">
                        <span className="text-[1.75rem] font-semibold text-white">
                            SIMART
                        </span>
                        <span className="text-[.75rem] font-medium text-white">
                            Universitas Mercu Buana Yogyakarta
                        </span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col items-start pl-[1.5rem]">
                        <Accordion
                            value={accordionValue}
                            onValueChange={setAccordionValue}
                            type="single"
                            className="w-full"
                            collapsible
                        >
                            {menuList.map((item, index) => {
                                return <MenuItem key={index} data={item} />;
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
