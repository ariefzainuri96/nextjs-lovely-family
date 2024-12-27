import {
    SheetTrigger,
    SheetContent,
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetDescription,
} from "@/components/ui/sheet";
import React from "react";
import { Menu } from "lucide-react";
import { useSheetSidebarContext } from "./sheet-sidebar-provider";
import SidebarSection from "../../sections/sidebar-section/sidebar-section";

export default function SheetSidebar() {
    const { sheetOpen, setSheetOpen } = useSheetSidebarContext();

    return (
        <div className="block xl:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Menu
                        width={24}
                        height={24}
                        color="#000"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent
                    className="w-[325px] p-0"
                    hideXIcon={true}
                    side={"left"}
                >
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription className="hidden"></SheetDescription>
                    </SheetHeader>
                    <SidebarSection isForDrawer={true} />
                </SheetContent>
            </Sheet>
        </div>
    );
}
