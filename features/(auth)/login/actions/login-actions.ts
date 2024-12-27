"use server";

import { CURRENT_USER } from "@/lib/constant";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { ZLoginForm } from "../types/login-form";
import { TLoginResponse } from "../types/login-response";
import { httpPost } from "@/lib/data/networking";
import "dotenv/config";
import { TFormError } from "@/model/current-user";

const key = new TextEncoder().encode(process.env.SECRET_KEY);

export async function authenticate(_: any, formData: FormData) {
    try {
        // const nis = formData.get("nis")?.toString() ?? "";
        // const password = formData.get("password")?.toString() ?? "";

        const form = Object.fromEntries(formData);

        const validation = ZLoginForm.safeParse(form);

        if (!validation.success) {
            const { errors } = validation.error;
            const error: TFormError[] = errors.map((error) => {
                return {
                    message: error.message,
                    path: error.path,
                };
            });
            return { status: 300, message: "Invalid request", error: error };
        }

        const data: TLoginResponse | undefined = await httpPost(
            "/users/login",
            validation.data,
        );

        if (data?.status === 200) {
            await setAuthCookies(data.data ?? "");

            return { status: 200, message: "Login Success" };
        } else {
            return {
                status: 401,
                message: `Login failed, error: ${data?.message}`,
            };
        }
    } catch (error) {
        return { status: 401, message: `${error}`, data: formData };
    }
}

async function encrypt(payload: any, expires: Date) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expires)
        .sign(key);
}

export async function decrypt<T>(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });

    return payload as T;
}

export async function setAuthCookies(token: string) {
    // 60000 millisecond => 1 minute
    // 60 => how many minutes
    const expires = new Date(Date.now() + 60 * 24 * 60000);
    const session = await encrypt(token, expires);
    cookies().set(CURRENT_USER, session, { expires, httpOnly: true }); // httpOnly true -> we can only get cookies in server side
}

export async function logout() {
    cookies().delete("currentUser");
}
