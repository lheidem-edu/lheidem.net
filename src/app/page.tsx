import {
    ExternalLinkIcon,
    KeyIcon,
    MailIcon,
    MapIcon,
    SectionIcon,
    UserLockIcon,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="space-y-8">
            <ul className="flex flex-col items-start gap-x-4 gap-y-2 md:flex-row">
                <li className="inline-flex items-center gap-x-2 text-sm tracking-tight text-slate-300">
                    <SectionIcon className="h-4 w-4" />
                    <Link
                        className="border-b border-slate-600 hover:border-rose-600"
                        href="/legal/"
                    >
                        Impressum
                    </Link>
                </li>
                <li className="inline-flex items-center gap-x-2 text-sm tracking-tight text-slate-300">
                    <UserLockIcon className="h-4 w-4" />
                    <Link
                        className="border-b border-slate-600 hover:border-rose-600"
                        href="/privacy/"
                    >
                        Datenschutzerklärung
                    </Link>
                </li>
            </ul>

            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-200">
                    Luca Heidemann
                </h1>
                <ul className="flex flex-col items-start gap-x-4 gap-y-2 md:flex-row">
                    <li className="inline-flex items-center gap-x-2 text-sm text-slate-300">
                        <MapIcon className="h-4 w-4" />
                        <a
                            className="border-b border-slate-600 hover:border-rose-600"
                            href="https://www.google.com/maps/place/Nordrhein-Westfalen,+Deutschland"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Nordrhein-Westfalen, Deutschland
                        </a>
                    </li>
                    <li className="inline-flex items-center gap-x-2 text-sm text-slate-300">
                        <MailIcon className="h-4 w-4" />
                        <a
                            className="border-b border-slate-600 hover:border-rose-600"
                            href="mailto:kontakt@lheidem.net"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            kontakt [at] lheidem [dot] net
                        </a>
                    </li>
                    <li className="inline-flex items-center gap-x-2 text-sm text-slate-300">
                        <KeyIcon className="h-4 w-4" />
                        <a
                            className="border-b border-slate-600 hover:border-rose-600"
                            href="/lheidem.asc"
                            download
                        >
                            PGP-Schlüssel herunterladen
                        </a>
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Berufserfahrung
                </h2>
                <p className="text-justify text-sm text-slate-300">
                    Seit August 2023 absolviere ich meine Ausbildung zum
                    Fachinformatiker für Systemintegration bei der BE
                    Bauelemente GmbH. Das Unternehmen ist ein führender
                    Hersteller hochwertiger Fenster und Türen aus Aluminium und
                    Kunststoff sowie von Rollläden und Insektenschutzsystemen.
                    Die Produkte der BE Bauelemente GmbH stehen für Qualität,
                    Innovation und Langlebigkeit.
                </p>
                <p className="inline-flex items-center gap-x-2 text-sm text-slate-300">
                    <ExternalLinkIcon className="inline h-4 w-4" />
                    <a
                        className="border-b border-slate-600 hover:border-rose-600"
                        href="https://be-fenster-tueren.de/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        BE Bauelemente GmbH im Internet
                    </a>
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
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
                            className="rounded-lg bg-slate-900 px-3 py-1 text-sm text-slate-300"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
