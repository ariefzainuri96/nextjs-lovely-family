import CustomDialogErrorProvider from "@/components/reusable-components/custom-dialog-error/custom-dialog-error-provider";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LoginForm = dynamic(
    () => import("../../../features/(auth)/login/components/login-form"),
    {
        ssr: false,
    },
);

export const metadata: Metadata = {
    title: "Login",
};

export default function Login() {
    return (
        <CustomDialogErrorProvider>
            <div className="flex h-full w-full flex-row justify-center">
                <LoginForm />
            </div>
        </CustomDialogErrorProvider>
    );
}
