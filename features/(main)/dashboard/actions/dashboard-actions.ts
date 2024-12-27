"use server";

import { logout } from "@/features/(auth)/login/actions/login-actions";
import { redirect, RedirectType } from "next/navigation";

export const handleLogout = () => {
    try {
        logout();
    } catch (error) {
        console.log(error);
    } finally {
        redirect("/login", RedirectType.replace);
    }
};
