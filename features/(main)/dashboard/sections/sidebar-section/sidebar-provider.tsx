"use client";

import { createContext, ReactNode, useContext } from "react";
import useSidebar from "./use-sidebar";

// Define the context type
type SidebarContextType = ReturnType<typeof useSidebar>;

// Create the context with an initial value of `undefined`
const SidebarContext = createContext<SidebarContextType | null>(null);

// Custom hook to consume the context
export function useSidebarContext() {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error(
            "useSidebarContext must be used within a SidebarProvider",
        );
    }

    return context;
}

// Create the provider component
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const sheetSidebar = useSidebar();

    return (
        <SidebarContext.Provider value={sheetSidebar}>
            {children}
        </SidebarContext.Provider>
    );
};
