import { useCustomDialogErrorContext } from "@/components/reusable-components/custom-dialog-error/custom-dialog-error-provider";
import { useCustomDialogLoadingContext } from "@/components/reusable-components/custom-dialog-loading/custom-dialog-loading-provider";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { authenticate } from "./actions/login-actions";
import { useRouter } from "next/navigation";

export default function useLogin() {
    const { showError } = useCustomDialogErrorContext();
    const { hideLoading } = useCustomDialogLoadingContext();
    const router = useRouter();
    const [response, handleLogin] = useFormState(authenticate, undefined);

    useEffect(() => {
        if (response) hideLoading();

        if (response?.status === 200) {
            router.replace("/");
        } else if ((response?.status ?? 0) >= 400) {
            showError(response?.message ?? "");
        }
    }, [response]);

    return { handleLogin, response } as const;
}
