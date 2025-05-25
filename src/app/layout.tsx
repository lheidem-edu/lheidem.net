import { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import Navigation from "../lib/components/navigation";
import "./tailwind.css";

export const metadata: Metadata = {
    authors: [{ name: "Luca Heidemann", url: "https://lheidem.net/" }],
};

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
                <div className="mx-auto max-w-3xl space-y-8">
                    <Navigation />
                    {children}
                </div>
            </body>
        </html>
    );
}
