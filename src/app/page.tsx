import { Mail, Map, Key } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luca Heidemann",
    description:
        "Fachinformatiker für Systemintegration in Ausbildung bei BE Bauelemente GmbH",
};

export default function Page() {
    return (
        <div className="flex min-h-svh bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white">
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-16 rounded-lg backdrop-blur-lg">
                <div className="flex flex-col gap-y-16">
                    <header className="flex flex-col gap-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">
                            Luca Heidemann
                        </h1>

                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex items-center gap-x-2">
                                <Map className="h-4 w-4 text-neutral-400" />
                                <a
                                    href="https://www.google.com/maps/place/Nordrhein-Westfalen,+Deutschland"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="border-b border-white/10 text-sm transition-colors hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                                >
                                    Nordrhein-Westfalen, Deutschland
                                </a>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Mail className="h-4 w-4 text-neutral-400" />
                                <a
                                    href="mailto:kontakt@lheidem.net"
                                    className="border-b border-white/10 text-sm transition-colors hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                                >
                                    kontakt@lheidem.net
                                </a>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Key className="h-4 w-4 text-neutral-400" />
                                <a
                                    href="/lheidem.asc"
                                    download
                                    className="border-b border-white/10 text-sm transition-colors hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                                >
                                    PGP-Schlüssel herunterladen
                                </a>
                            </div>
                        </div>
                    </header>

                    <section className="flex flex-col gap-y-16">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Berufserfahrung
                        </h2>

                        <div className="flex w-full flex-col gap-y-2 rounded-lg border border-white/10 p-4">
                            <div className="flex flex-col justify-between gap-y-2 md:flex-row md:items-center md:gap-x-2">
                                <h3 className="text-sm font-semibold text-neutral-100">
                                    Ausbildung zum Fachinformatiker &mdash;
                                    Systemintegration
                                </h3>
                                <span className="text-sm text-neutral-100">
                                    2023 &ndash; heute
                                </span>
                            </div>

                            <div>
                                <a
                                    href="https://be-fenster-tueren.de/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="border-b border-white/10 text-sm text-neutral-400 transition-colors hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                                >
                                    BE Bauelemente GmbH
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-y-16">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Kenntnisse
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Active Directory",
                                "C#",
                                "Debian GNU/Linux",
                                "Git",
                                "Microsoft Windows",
                                "Proxmox Virtual Environment",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-100"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
