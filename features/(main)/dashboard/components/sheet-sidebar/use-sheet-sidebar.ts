import { useState } from "react";

export default function useSheetSidebar() {
    const [sheetOpen, setSheetOpen] = useState(false);

    return { sheetOpen, setSheetOpen } as const;
}
