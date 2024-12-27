import React from "react";
import Image from "next/image";
import ImageLogo from "@/public/images/img_logo.png";
import ImageFacebook from "@/public/images/img_facebook.png";
import ImageGoogle from "@/public/images/img_google.png";
import localFont from "next/font/local";
import Link from "next/link";
import Row from "@/components/reusable-components/row";
import { MailIcon } from "lucide-react";

const chickenPieFont = localFont({
    src: "../../../public/fonts/Chicken-Pie.ttf",
    display: "swap",
});

const RegisterPage = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="w-full max-w-[600px] overflow-y-auto">
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
                        Create an Account!
                    </h1>

                    <Row className="mt-8 cursor-pointer gap-4 rounded-md border border-black p-3 hover:bg-slate-50">
                        <Image
                            src={ImageFacebook}
                            alt="facebook"
                            width={16}
                            height={16}
                        />
                        <span className="poppins400-16">
                            Continue with Facebook
                        </span>
                    </Row>

                    <Row className="mt-4 cursor-pointer gap-4 rounded-md border border-black p-3 hover:bg-slate-50">
                        <Image
                            src={ImageGoogle}
                            alt="google"
                            width={16}
                            height={16}
                        />
                        <span className="poppins400-16">
                            Continue with Facebook
                        </span>
                    </Row>

                    <div className="relative mt-8 flex w-full items-center justify-center">
                        <div className="relative z-0 h-[1px] w-full bg-slate-200" />
                        <span className="absolute z-10 items-center bg-white px-4">
                            or
                        </span>
                    </div>

                    <Row className="mt-8 cursor-pointer gap-4 rounded-md border border-black p-3 hover:bg-slate-50">
                        <MailIcon size={16} />
                        <span className="poppins400-16">Signup with Email</span>
                    </Row>

                    <span className="poppins400-16 mt-6 text-center text-gray-600">
                        Already have an account?{" "}
                        <Link
                            className="poppins600-16 text-black"
                            href={"/login"}
                            replace
                        >
                            Login
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
