"use client";

import { getAllPengumuman } from "@/features/(main)/konfigurasi-umum/pengumuman/actions/pengumuman-actions";
import { AnnouncementItem } from "@/components/reusable-components/announcement-item";
import CircularLoader from "@/components/reusable-components/circular-progress";
import { useQuery } from "@tanstack/react-query";

export default function AnnouncementList() {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["pengumuman"],
        queryFn: async () => {
            return await getAllPengumuman();
        },
    });

    if (isLoading) {
        return <CircularLoader width={25} height={25} />;
    }

    if (isError) {
        return <button onClick={() => refetch()}>Retry</button>;
    }

    return (
        <>
            {/* pengumuman list */}
            {(data ?? []).map((item, index) => {
                return (
                    <AnnouncementItem
                        className={index > 0 ? "mt-3" : ""}
                        key={index}
                        data={item}
                    />
                );
            })}
        </>
    );
}
