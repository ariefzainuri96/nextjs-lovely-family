"use server";

import { logout } from "@/features/(auth)/login/actions/login-actions";
import { httpGet } from "@/lib/data/networking";
import { redirect, RedirectType } from "next/navigation";
import { GetPhotoResponse, PhotoData } from "../model/get-photo-response";

export const handleLogout = () => {
    try {
        logout();
    } catch (error) {
        console.log(error);
    } finally {
        redirect("/login", RedirectType.replace);
    }
};

export async function getPhoto(): Promise<PhotoData[] | undefined> {
    try {
        const data = await httpGet<GetPhotoResponse>("/image/");

        return data?.data;
    } catch (error) {}
}
