"use client";

import React, { createContext, ReactNode, useContext } from "react";
import useSheetSidebar from "./use-sheet-sidebar";

// Define the context type
type SheetSidebarContextType = ReturnType<typeof useSheetSidebar>;

// Create the context with an initial value of `undefined`
const SheetSidebarContext = createContext<SheetSidebarContextType | null>(null);

// Custom hook to consume the context
export function useSheetSidebarContext() {
    const context = useContext(SheetSidebarContext);

    if (!context) {
        throw new Error(
            "useSheetSidebarContext must be used within a SheetSidebarProvider",
        );
    }

    return context;
}

// Create the provider component
export const SheetSidebarProvider = ({ children }: { children: ReactNode }) => {
    const sheetSidebar = useSheetSidebar();

    return (
        <SheetSidebarContext.Provider value={sheetSidebar}>
            {children}
        </SheetSidebarContext.Provider>
    );
};
