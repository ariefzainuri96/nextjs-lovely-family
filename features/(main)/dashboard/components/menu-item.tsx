"use client";

import { MenuModel } from "@/features/(main)/dashboard/model/menu-model";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuChildItem } from "./menu-child-item";
import IcDashboard from "@/public/icons/ic-dashboard.svg";
import IcSettings from "@/public/icons/ic-settings.svg";
import IcKonfigurasiBisnis from "@/public/icons/ic-konfigurasi-bisnis.svg";
import IcMasterData from "@/public/icons/ic-master-data.svg";
import IcManajemenInventaris from "@/public/icons/ic-manajemen-inventaris.svg";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { useSidebarContext } from "../sections/sidebar-section/sidebar-provider";
import { useSheetSidebarContext } from "./sheet-sidebar/sheet-sidebar-provider";

export const MenuItem = ({ data }: { data: MenuModel }) => {
    const router = useRouter();
    const { setSheetOpen } = useSheetSidebarContext();
    const { accordionValueLayer1, setAccordionValueLayer1 } =
        useSidebarContext();

    function selectedIcon(): any {
        switch (data.icon) {
            case "dashboard":
                return IcDashboard;
            case "konfigurasi-umum":
                return IcSettings;
            case "konfigurasi-bisnis":
                return IcKonfigurasiBisnis;
            case "master-data":
                return IcMasterData;
            case "manajemen-inventaris":
                return IcManajemenInventaris;
            default:
                break;
        }
    }

    const Content = () => {
        return (
            <div
                onClick={(e) => {
                    if (data.child) return;

                    e.preventDefault();

                    setSheetOpen(false);

                    router.push(data.path!!);
                }}
                className={twMerge(
                    "flex w-full flex-row items-center gap-[1rem] p-4",
                    !data.child && "cursor-pointer hover:bg-[#082F76]",
                )}
            >
                <Image
                    src={selectedIcon()}
                    alt={`${data.title}`}
                    width={20}
                    height={20}
                />
                <span className="line-clamp-1 flex-1 overflow-ellipsis text-start font-semibold text-white">
                    {data.title}
                </span>
            </div>
        );
    };

    if (data.child) {
        return (
            <AccordionItem value={data.title}>
                <AccordionTrigger
                    chevronStyle="text-white"
                    className="p-0 pr-2 hover:bg-[#082F76]"
                >
                    <Content />
                </AccordionTrigger>
                <AccordionContent className="p-0">
                    <Accordion
                        value={accordionValueLayer1}
                        onValueChange={setAccordionValueLayer1}
                        className="w-full"
                        type="single"
                        collapsible
                    >
                        {(data.child ?? []).map((item, index) => {
                            return <MenuChildItem key={index} data={item} />;
                        })}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        );
    }

    return <Content />;
};
