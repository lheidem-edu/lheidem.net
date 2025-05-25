import { KeyIcon, MailIcon, MapIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luca Heidemann",
    description: "In Ausbildung bei der BE Bauelemente GmbH.",
};

export default function Page() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    Luca Heidemann
                </h1>
                <ul className="flex flex-col items-start gap-x-4 gap-y-2 md:flex-row">
                    <li className="inline-flex items-center gap-x-2 text-sm text-neutral-400">
                        <MapIcon className="h-4 w-4" />
                        <a
                            className="border-b border-neutral-600 hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                            href="https://www.google.com/maps/place/Nordrhein-Westfalen,+Deutschland"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Nordrhein-Westfalen, Deutschland
                        </a>
                    </li>
                    <li className="inline-flex items-center gap-x-2 text-sm text-neutral-400">
                        <MailIcon className="h-4 w-4" />
                        <a
                            className="border-b border-neutral-600 hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                            href="mailto:kontakt@lheidem.net"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            kontakt [at] lheidem [dot] net
                        </a>
                    </li>
                    <li className="inline-flex items-center gap-x-2 text-sm text-neutral-400">
                        <KeyIcon className="h-4 w-4" />
                        <a
                            className="border-b border-neutral-600 hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                            href="/lheidem.asc"
                            download
                        >
                            PGP-Schlüssel herunterladen
                        </a>
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Berufserfahrung
                </h2>
                <p className="text-justify text-sm text-neutral-400">
                    Seit August 2023 absolviere ich meine Ausbildung zum
                    Fachinformatiker für Systemintegration bei der BE
                    Bauelemente GmbH. Das Unternehmen ist ein führender
                    Hersteller hochwertiger Fenster und Türen aus Aluminium und
                    Kunststoff sowie von Rollläden und Insektenschutzsystemen.
                    Die Produkte der BE Bauelemente GmbH stehen für Qualität,
                    Innovation und Langlebigkeit.
                </p>
                <p className="text-sm text-neutral-400">
                    <a
                        className="border-b border-neutral-600 hover:border-rose-600 focus:border-rose-600 focus:outline-none"
                        href="https://be-fenster-tueren.de/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        BE Bauelemente GmbH im Internet
                    </a>
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Kenntnisse
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {[
                        "Active Directory",
                        "C#",
                        "Debian GNU/Linux",
                        "Git",
                        "Microsoft Windows",
                        "Proxmox Virtual Environment",
                    ].map((skill) => (
                        <li
                            key={skill}
                            className="rounded-lg bg-neutral-900 px-3 py-1 text-sm text-neutral-400"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
