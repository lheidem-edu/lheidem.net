import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function LegalNotice() {
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
                    Impressum
                </h1>
                <p className="text-sm text-slate-300">
                    Zuletzt aktualisiert im Mai 2025.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Angaben gemäß § 5 DDG
                </h2>
                <div className="space-y-2">
                    <p className="text-sm text-slate-300">Luca Heidemann</p>
                    <p className="text-sm text-slate-300">
                        Hermann-Löns-Weg 19
                    </p>
                    <p className="text-sm text-slate-300">32832 Augustdorf</p>
                    <p className="text-sm text-slate-300">Deutschland</p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Kontaktmöglichkeiten
                </h2>
                <p className="text-sm text-slate-300">
                    E-Mail:{" "}
                    <a
                        className="border-b border-slate-600 hover:border-rose-600"
                        href="mailto:kontakt@lheidem.net"
                    >
                        kontakt [at] lheidem [dot] net
                    </a>
                </p>
                <p className="text-sm text-slate-300">
                    Telefon: +49 1522 26516362
                </p>
                <p className="text-justify text-sm text-slate-300">
                    Die E-Mail-Adresse dient als primärer Kommunikationskanal
                    für die Meldung von rechtlichen Beschwerden. Bitte verwenden
                    Sie diese Adresse, um uns zu kontaktieren. Wir bitten Sie,
                    von Anrufen abzusehen, es sei denn, es handelt sich um eine
                    dringende Angelegenheit.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <div className="space-y-2">
                    <p className="text-sm text-slate-300">Luca Heidemann</p>
                    <p className="text-sm text-slate-300">
                        Hermann-Löns-Weg 19
                    </p>
                    <p className="text-sm text-slate-300">32832 Augustdorf</p>
                    <p className="text-sm text-slate-300">Deutschland</p>
                </div>
            </section>
        </div>
    );
}
