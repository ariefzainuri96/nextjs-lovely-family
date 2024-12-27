import { useState } from "react";

export default function useSidebar() {
    const [accordionValue, setAccordionValue] = useState("");
    const [accordionValueLayer1, setAccordionValueLayer1] = useState("");

    return {
        accordionValue,
        accordionValueLayer1,
        setAccordionValueLayer1,
        setAccordionValue,
    } as const;
}
