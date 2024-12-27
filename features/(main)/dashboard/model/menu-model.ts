export type MenuModel = {
    title: string;
    icon: string;
    path?: string;
    child?: MenuChildModel[];
};

export type MenuChildModel = {
    title: string;
    path?: string;
    child?: MenuChildModel[];
};

export const menuList: MenuModel[] = [
    {
        title: "Dashboard",
        icon: "dashboard",
        path: "/",
    },
    {
        title: "Konfigurasi Umum",
        icon: "konfigurasi-umum",
        child: [
            {
                title: "Pengumuman",
                path: "/konfigurasi-umum/pengumuman",
            },
            {
                title: "Profil Institusi",
                path: "/konfigurasi-umum/profil-institusi",
            },
            {
                title: "Sistem Setting",
                child: [
                    {
                        title: "Format Penomoran",
                        path: "/konfigurasi-umum/sistem-setting/format-penomoran",
                    },
                    {
                        title: "Signature",
                        path: "/konfigurasi-umum/sistem-setting/signature",
                    },
                ],
            },
            {
                title: "Konfigurasi Email",
                child: [
                    {
                        title: "Konfigurasi SMTP (update setting SMTP) & Batch",
                        path: "/konfigurasi-smtp",
                    },
                    {
                        title: "Template Email",
                        path: "/template-email",
                    },
                ],
            },
            {
                title: "Manajemen Pengguna",
                child: [
                    {
                        title: "Data Pengguna",
                        path: "/data-pengguna",
                    },
                    {
                        title: "Data Role Akses",
                        path: "/data-role-akses",
                    },
                    {
                        title: "Data Menu",
                        path: "/data-menu",
                    },
                ],
            },
        ],
    },
    {
        title: "Konfigurasi Bisnis",
        icon: "konfigurasi-bisnis",
        child: [
            {
                title: "Jenis Approval",
                path: "/jenis-approval",
            },
            {
                title: "Template Approval",
                path: "/template-approval",
            },
        ],
    },
    {
        title: "Master Data",
        icon: "master-data",
        path: "/master-data",
    },
    {
        title: "Manajemen Inventaris",
        icon: "manajemen-inventaris",
        child: [
            {
                title: "Data Draft Aset",
                path: "/data-draft-aset",
            },
            {
                title: "Data Barang Aset",
                path: "/data-barang-aset",
            },
            {
                title: "Data Barang Pakai Habis",
                path: "/data-barang-pakai-habis",
            },
        ],
    },
];
