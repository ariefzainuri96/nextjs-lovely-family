"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../../ui/dialog";
import { useCustomDialogLoadingContext } from "./custom-dialog-loading-provider";
import CircularProgress from "../circular-progress";
import Column from "../column";

export default function CustomDialogLoading() {
    const { open, setOpen } = useCustomDialogLoadingContext();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="w-[10rem] border-none p-0 outline-none"
                hideXIcon={true}
            >
                <DialogTitle className="p-0"></DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
                <Column className="items-center gap-2 pb-3">
                    <CircularProgress />
                    <span className="poppins500-14">Loading...</span>
                </Column>
            </DialogContent>
        </Dialog>
    );
}
