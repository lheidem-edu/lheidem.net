import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum - Luca Heidemann",
};

export default function LegalNotice() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    Impressum
                </h1>
                <p className="text-sm text-neutral-400">
                    Zuletzt aktualisiert im Mai 2025.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Angaben gemäß § 5 DDG
                </h2>
                <div className="space-y-2">
                    <p className="text-sm text-neutral-400">Luca Heidemann</p>
                    <p className="text-sm text-neutral-400">
                        Hermann-Löns-Weg 19
                    </p>
                    <p className="text-sm text-neutral-400">32832 Augustdorf</p>
                    <p className="text-sm text-neutral-400">Deutschland</p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Kontaktmöglichkeiten
                </h2>
                <p className="text-sm text-neutral-400">
                    E-Mail:{" "}
                    <a
                        className="border-b border-neutral-600 hover:border-rose-600"
                        href="mailto:webmaster@lheidem.net"
                    >
                        webmaster [at] lheidem [dot] net
                    </a>
                </p>
                <p className="text-sm text-neutral-400">
                    Telefon: +49 1522 6516362
                </p>
                <p className="text-justify text-sm text-neutral-400">
                    Die E-Mail-Adresse dient als primärer Kommunikationskanal
                    für die Meldung von rechtlichen Beschwerden. Bitte verwenden
                    Sie diese Adresse, um uns zu kontaktieren. Wir bitten Sie,
                    von Anrufen abzusehen, es sei denn, es handelt sich um eine
                    dringende Angelegenheit.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <div className="space-y-2">
                    <p className="text-sm text-neutral-400">Luca Heidemann</p>
                    <p className="text-sm text-neutral-400">
                        Hermann-Löns-Weg 19
                    </p>
                    <p className="text-sm text-neutral-400">32832 Augustdorf</p>
                    <p className="text-sm text-neutral-400">Deutschland</p>
                </div>
            </section>
        </div>
    );
}
