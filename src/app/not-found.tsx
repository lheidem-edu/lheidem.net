import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Seite nicht gefunden - Luca Heidemann",
    description: "Diese Seite konnte nicht gefunden werden.",
};

export default function NotFound() {
    return (
        <div className="flex min-h-svh bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white">
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-16 rounded-lg backdrop-blur-lg">
                <div className="flex flex-col items-center justify-center gap-y-8 text-center">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">
                            404
                        </h1>
                        <p className="text-sm text-neutral-400">
                            Diese Seite konnte nicht gefunden werden.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="border-b border-white/10 text-sm transition-colors hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                    >
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
}
