"use server";

import {
    decrypt,
    TAuthCookie,
} from "@/features/(auth)/login/actions/login-actions";
import "dotenv/config";
import { cookies } from "next/headers";

if (!process.env.BASE_URL) {
    throw new Error("BASE_URL is not set");
}

export async function httpPost<T>(
    url: string,
    body: any,
): Promise<T | undefined> {
    try {
        const response = await fetch(
            `${process.env.BASE_URL as string}${url}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(body),
            },
        );

        const data: T = JSON.parse(JSON.stringify(await response.json()));

        console.log(data);

        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

export async function httpGet<T>(url: string): Promise<T | undefined> {
    try {
        const currentUser = await decrypt<TAuthCookie>(
            cookies().get("currentUser")?.value,
        );

        if (!currentUser) {
            return undefined;
        }

        const response = await fetch(
            `${process.env.BASE_URL as string}${url}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${currentUser.token}`,
                },
            },
        );

        const data: T = await response.json();

        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
