"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();

    return (
        <ul className="flex flex-col gap-x-4 gap-y-2 md:flex-row md:items-center">
            <li className="select-none">
                <Link href="/">
                    <img className="h-4 w-4" src="/icon.svg" />
                </Link>
            </li>
            <li className="text-sm tracking-tight text-slate-300 select-none">
                <Link
                    className={`border-b ${
                        path === "/legal/"
                            ? "border-rose-600"
                            : "border-slate-600 hover:border-rose-600"
                    }`}
                    href="/legal/"
                >
                    Impressum
                </Link>
            </li>
            <li className="text-sm tracking-tight text-slate-300 select-none">
                <Link
                    className={`border-b ${
                        path === "/privacy/"
                            ? "border-rose-600"
                            : "border-slate-600 hover:border-rose-600"
                    }`}
                    href="/privacy/"
                >
                    Datenschutzerklärung
                </Link>
            </li>
        </ul>
    );
}
