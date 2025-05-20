import React from "react";
import localFont from "next/font/local";
import "./tailwind.css";

const iosevkaFont = localFont({
    src: [
        {
            path: "./Iosevka-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Iosevka-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Iosevka-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <body className={`${iosevkaFont.className} bg-slate-950 p-4`}>
                <div className="mx-auto max-w-3xl">{children}</div>
            </body>
        </html>
    );
}
