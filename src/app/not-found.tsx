import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="space-y-8">
            <span className="inline-flex items-center gap-x-2 text-sm text-slate-300">
                <ArrowLeftIcon className="h-4 w-4" />
                <Link
                    className="border-b border-slate-600 hover:border-rose-600"
                    href="/"
                >
                    zurück
                </Link>
            </span>

            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-200">
                    Seite nicht gefunden
                </h1>
                <p className="text-sm text-slate-300">
                    Die angeforderte Seite existiert nicht oder wurde entfernt.
                </p>
            </section>
        </div>
    );
}
