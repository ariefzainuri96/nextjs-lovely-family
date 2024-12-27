"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";
import CustomDialogError from "./custom-dialog-error";
import { ShowerHead } from "lucide-react";

// Define the context type
type CustomDialogErrorContextType = ReturnType<typeof useCustomDialogError>;

// Create the context with an initial value of `undefined`
const CustomDialogErrorContext =
    createContext<CustomDialogErrorContextType | null>(null);

// Custom hook to consume the context
export function useCustomDialogErrorContext() {
    const context = useContext(CustomDialogErrorContext);

    if (!context) {
        throw new Error(
            "useCustomDialogErrorContext must be used within a CustomDialogErrorProvider",
        );
    }

    return context;
}

// Create the provider component
export default function CustomDialogErrorProvider({
    children,
}: {
    children: ReactNode;
}) {
    const hooks = useCustomDialogError();

    return (
        <CustomDialogErrorContext.Provider value={hooks}>
            <CustomDialogError />
            {children}
        </CustomDialogErrorContext.Provider>
    );
}

function useCustomDialogError() {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState("");

    const showError = (message: string) => {
        setOpen(true);
        setError(message);
    };

    return { open, setOpen, error, setError, showError } as const;
}
