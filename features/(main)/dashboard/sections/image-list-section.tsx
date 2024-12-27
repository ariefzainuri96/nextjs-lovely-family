import React from "react";
import { getPhoto } from "../actions/dashboard-actions";
import CustomImage from "@/components/reusable-components/CustomImage";

export default async function ImageListSection() {
    const data = await getPhoto();

    return (
        <section className="grid-cols-gallery grid w-full gap-4 p-4">
            {(data ?? []).map((item) => {
                return <CustomImage key={item.id} image={item} />;
            })}
        </section>
    );
}
