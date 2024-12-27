import CircularLoader from "@/components/reusable-components/circular-progress";
import Column from "@/components/reusable-components/column";
import CustomImage from "@/components/reusable-components/CustomImage";
import { getPhoto } from "@/features/(main)/dashboard/actions/dashboard-actions";
import ImageListSection from "@/features/(main)/dashboard/sections/image-list-section";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

// type SearchParamProps = {
//     searchParams: Record<string, string> | null | undefined;
// };

export const metadata: Metadata = {
    title: "SIMART UMBY",
};

export default function Home() {
    return (
        <div className="h-full w-full flex-1 overflow-y-auto">
            <Column className="gap-2">
                <Suspense fallback={<CircularLoader width={36} height={36} />}>
                    <ImageListSection />
                </Suspense>
            </Column>
        </div>
    );
}
