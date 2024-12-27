"use client";

import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../../ui/dialog";
import Column from "../column";
import { useCustomDialogErrorContext } from "./custom-dialog-error-provider";
import CustomText from "../custom-text";

export default function CustomDialogError() {
    const { open, setOpen, error } = useCustomDialogErrorContext();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="w-[15rem] border-none p-0 outline-none"
                hideXIcon={true}
            >
                <DialogTitle className="p-0"></DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
                <Column className="w-full items-center gap-2 pb-3">
                    <Image
                        src={require("@/public/icons/ic-warning.svg")}
                        width={65}
                        height={65}
                        color="red"
                        alt={""}
                    />

                    <CustomText className="text-center">{error}</CustomText>
                </Column>
            </DialogContent>
        </Dialog>
    );
}
