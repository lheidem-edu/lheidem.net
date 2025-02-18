import "./globals.css";
import localFont from "next/font/local";

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
            path: "./Iosevka-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <body className={iosevkaFont.className}>{children}</body>
        </html>
    );
}
