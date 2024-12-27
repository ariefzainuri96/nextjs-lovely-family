import { z } from "zod";

export type TLoginForm = {
    email?: string;
    password?: string;
};

export const ZLoginForm = z.object({
    email: z.string().email().min(1, { message: "Email tidak boleh kosong" }),
    password: z.string().min(1, { message: "Password tidak boleh kosong" }),
});
