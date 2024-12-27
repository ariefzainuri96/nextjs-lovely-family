import React from "react";
import Column from "./column";
import { twMerge } from "tailwind-merge";
import { TPengumumanTable } from "@/db/schema/pengumuman-table";

export const AnnouncementItem = ({
    data,
    className,
}: {
    data: TPengumumanTable;
    className?: string;
}) => {
    return (
        <div
            className={twMerge(
                "w-full rounded-[12px] bg-white shadow-md",
                className,
            )}
        >
            <Column className="px-[2rem] py-[1.5rem]">
                <span className="text-[1.125rem] font-semibold text-textSecondary">
                    {data.judul}
                </span>
                <span className="mt-[0.5rem] text-[0.875rem] text-textSecondary">
                    {data.pengumuman.length > 100
                        ? `${data.pengumuman.substring(0, 100)}...`
                        : data.pengumuman}
                    {data.pengumuman.length > 100 && (
                        <span className="text-[0.875rem] font-semibold text-blue1 underline">
                            Baca Selengkapnya
                        </span>
                    )}
                </span>
            </Column>
            <span></span>
        </div>
    );
};
