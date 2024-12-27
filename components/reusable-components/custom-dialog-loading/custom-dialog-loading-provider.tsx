"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import CustomDialogLoading from "./custom-dialog-loading";

// Define the context type
type CustomDialogLoadingContextType = ReturnType<typeof useCustomDialogLoading>;

// Create the context with an initial value of `undefined`
const CustomDialogLoadingContext =
    createContext<CustomDialogLoadingContextType | null>(null);

// Custom hook to consume the context
export function useCustomDialogLoadingContext() {
    const context = useContext(CustomDialogLoadingContext);

    if (!context) {
        throw new Error(
            "useCustomDialogLoadingContext must be used within a CustomDialogLoadingProvider",
        );
    }

    return context;
}

// Create the provider component
export default function CustomDialogLoadingProvider({
    children,
}: {
    children: ReactNode;
}) {
    const hooks = useCustomDialogLoading();

    return (
        <CustomDialogLoadingContext.Provider value={hooks}>
            <CustomDialogLoading />
            {children}
        </CustomDialogLoadingContext.Provider>
    );
}

function useCustomDialogLoading() {
    const [open, setOpen] = useState(false);

    const showLoading = () => setOpen(true);
    const hideLoading = () => setOpen(false);

    return { open, setOpen, showLoading, hideLoading } as const;
}
