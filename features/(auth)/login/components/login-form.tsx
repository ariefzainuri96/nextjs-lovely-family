"use client";

import Image from "next/image";
import { useFormStatus } from "react-dom";
import ImageLogo from "@/public/images/img_logo.png";
import ImageFacebook from "@/public/images/img_facebook.png";
import ImageGoogle from "@/public/images/img_google.png";
import CustomTextfield from "@/components/reusable-components/custom-textfield";
import { useEffect } from "react";
import { useCustomDialogLoadingContext } from "@/components/reusable-components/custom-dialog-loading/custom-dialog-loading-provider";
import Row from "@/components/reusable-components/row";
import useLogin from "../use-login";
import localFont from "next/font/local";
import Link from "next/link";

const chickenPieFont = localFont({
    src: "../../../../public/fonts/Chicken-Pie.ttf",
    display: "swap",
});

const LoginForm = () => {
    const { handleLogin, response } = useLogin();

    return (
        <div className="h-full w-full max-w-[600px] flex-1 justify-center overflow-y-auto">
            <div className="flex w-full flex-col p-4">
                <Image
                    priority
                    src={ImageLogo}
                    alt="Umby Logo"
                    className="mt-4 self-center"
                    loading="eager"
                />
                <h1
                    className={`mt-8 self-center text-[1.75rem] ${chickenPieFont.className}`}
                >
                    Welcome Back!
                </h1>
                <form className="mt-[3.5rem]" action={handleLogin}>
                    <CustomTextfield
                        className="w-full"
                        name="email"
                        id="email"
                        label="Email"
                        autoComplete="off"
                        error={
                            (response?.error ?? []).filter((error) =>
                                error.path.includes("email"),
                            )[0]?.message
                        }
                    />
                    <CustomTextfield
                        className="mt-4 w-full"
                        name="password"
                        id="password"
                        type="password"
                        label="Password"
                        autoComplete="off"
                        error={
                            (response?.error ?? []).filter((error) =>
                                error.path.includes("password"),
                            )[0]?.message
                        }
                    />
                    <LoginLocalButton />
                </form>
                <div className="relative mt-8 flex w-full items-center justify-center">
                    <div className="relative z-0 h-[1px] w-full bg-slate-200" />
                    <span className="absolute z-10 items-center bg-white px-4">
                        or
                    </span>
                </div>
                <Row className="mt-8 justify-center gap-5">
                    <div className="cursor-pointer rounded-md border border-black p-3 hover:bg-slate-50">
                        <Image
                            src={ImageFacebook}
                            alt="facebook"
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className="cursor-pointer rounded-md border border-black p-3 hover:bg-slate-50">
                        <Image
                            src={ImageGoogle}
                            alt="google"
                            width={16}
                            height={16}
                        />
                    </div>
                </Row>
                <span className="poppins400-16 mt-6 text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        className="poppins600-16 text-black"
                        href={"/register"}
                    >
                        Sign up
                    </Link>
                </span>
            </div>
        </div>
    );
};

const LoginLocalButton = () => {
    const { showLoading } = useCustomDialogLoadingContext();
    const { pending } = useFormStatus();

    useEffect(() => {
        // i think its a bug of react/nextjs, if i put setOpen(pending) the pending state will always return false
        // so the work around is to use setOpen(true) to show the loading dialog manually
        // and close dialog loading in [LoginForm] when the formstate is returning response
        if (pending) showLoading();
    }, [pending]);

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className={
                "poppins500-16 mt-4 h-[50px] w-full rounded-[0.5rem] bg-bluePrimary text-white " +
                (pending && "bg-slate-400")
            }
        >
            Login Local
        </button>
    );
};

const LoginSSOButton = () => {
    // const { pending } = useFormStatus();

    return (
        <button
            type="button"
            className={
                "mt-[1rem] w-full rounded-[0.5rem] border-[1px] border-bluePrimary py-[0.75rem] text-[1rem] font-medium text-bluePrimary"
            }
        >
            Login SSO
        </button>
    );
};

export default LoginForm;
