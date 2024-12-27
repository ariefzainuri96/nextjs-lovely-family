export type GetPhotoResponse = {
    status?: number;
    message?: string;
    data?: PhotoData[];
};

export type PhotoData = {
    id?: number;
    filename?: string;
    mime?: string;
    extension?: string;
    imageUrl?: string;
    thumbUrl?: string;
    userId?: number;
};
