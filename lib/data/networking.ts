import { TLoginResponse } from "@/features/(auth)/login/types/login-response";
import "dotenv/config";

if (!process.env.BASE_URL) {
    throw new Error("BASE_URL is not set");
}

export const httpPost = async <T>(url: string, body: any) => {
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

        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
};

export const httpGet = async <T>(url: string) => {
    try {
        const response = await fetch(
            `${process.env.BASE_URL as string}${url}`,
            {
                headers: {
                    "Content-Type": "application/json",
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
};
