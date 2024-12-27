"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuChildModel } from "@/features/(main)/dashboard/model/menu-model";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useSheetSidebarContext } from "./sheet-sidebar/sheet-sidebar-provider";

export const MenuChildItem = ({
    data,
    isLayer,
}: {
    data: MenuChildModel;
    isLayer?: boolean;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const { setSheetOpen } = useSheetSidebarContext();
    const isSelected = () => `${pathname}` === (data.path ?? "");

    const Indicator = () => {
        return (
            <>
                {isLayer && <div className="size-[1.25rem]" />}
                <div
                    className={twMerge(
                        "flex size-[1.25rem] items-center justify-center opacity-0",
                        isSelected() && "opacity-100",
                    )}
                >
                    <div className="size-[.75rem] rounded-full bg-[#05DCA2]" />
                </div>
            </>
        );
    };

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
                {/* indicator */}
                <Indicator />
                <span className="flex-1 text-start text-[0.875rem] font-semibold text-white">
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
                    <Accordion type="single" collapsible>
                        {(data.child ?? []).map((item, index) => {
                            return (
                                <MenuChildItem
                                    key={index}
                                    isLayer={true}
                                    data={item}
                                />
                            );
                        })}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        );
    }

    return <Content />;
};
