export type TCurrentUser = {
    userId: number;
    email: string;
};

export type TFormError = {
    message: string;
    path: (string | number)[];
};
