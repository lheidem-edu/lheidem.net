import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung - Luca Heidemann",
};

export default function PrivacyPolicy() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-200">
                    Datenschutzerklärung
                </h1>
                <p className="text-sm text-slate-300">
                    Zuletzt aktualisiert im Mai 2025.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Allgemeine Hinweise
                </h2>
                <p className="text-justify text-sm text-slate-300">
                    Diese Datenschutzerklärung informiert Sie über die Art, den
                    Umfang und den Zweck der Verarbeitung von personenbezogenen
                    Daten auf unserer Website.
                </p>
                <p className="text-justify text-sm text-slate-300">
                    Personenbezogene Daten sind alle Daten, die auf Sie
                    persönlich beziehbar sind, wie z.B. Name, Adresse,
                    E-Mail-Adressen, Nutzerverhalten.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Wie Ihre personenbezogenen Daten verarbeitet werden
                </h2>

                <p className="text-justify text-sm text-slate-300">
                    Wir verarbeiten Ihre personenbezogenen Daten nur, wenn dies
                    gesetzlich erlaubt ist. Das bedeutet, dass wir Ihre
                    personenbezogenen Daten nur dann verarbeiten, wenn Sie uns
                    Ihre Einwilligung gegeben haben, die Verarbeitung zur
                    Erfüllung eines Vertrages erforderlich ist oder eine
                    rechtliche Verpflichtung besteht.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Welche Daten werden verarbeitet
                </h2>
                <p className="text-justify text-sm text-slate-300">
                    Wir verarbeiten nur die Daten, die für die Erbringung
                    unserer Dienstleistungen erforderlich sind. Dazu gehören
                    ausschließlich Ihre IP-Adresse in anonymisierter Form,
                    Informationen über Ihren Browsertyp und Ihre Browserversion,
                    das Betriebssystem Ihres Endgerätes und andere Metadaten,
                    die zur Bereitstellung unserer Website erforderlich sind.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
                    Drittanbieter
                </h2>
                <p className="text-justify text-sm text-slate-300">
                    Diese Website nutzt Dienste der Cloudflare Germany GmbH
                    (Rosental 7, c/o Mindspace, 80331 München, Deutschland), um
                    die Sicherheit und die Auslieferungsgeschwindigkeit dieser
                    Website zu erhöhen. Cloudflare ist ein sogenanntes Content
                    Delivery Network (CDN), das Inhalte zwischenspeichert und an
                    Endnutzer ausliefert. Dies entspricht unserem berechtigten
                    Interesse (Art. 6 Abs. 1 lit. f DSGVO), kein eigenes Content
                    Delivery Network betreiben zu müssen.
                </p>
                <p className="text-justify text-sm text-slate-300">
                    Cloudflare ist Empfänger Ihrer personenbezogenen Daten und
                    handelt für uns als Auftragsverarbeiter. Sie haben das
                    Recht, der Verarbeitung zu widersprechen. Ob dem Widerspruch
                    stattgegeben wird, ist im Rahmen einer Interessenabwägung zu
                    bestimmen.
                </p>
                <p className="text-justify text-sm text-slate-300">
                    Die Verarbeitung der in diesem Abschnitt genannten Daten ist
                    weder gesetzlich noch vertraglich vorgeschrieben. Die
                    Funktionalität der Website ist ohne diese Verarbeitung nicht
                    gewährleistet.
                </p>
                <p className="text-justify text-sm text-slate-300">
                    Ihre personenbezogenen Daten werden von Cloudflare so lange
                    gespeichert, wie es für die beschriebenen Zwecke
                    erforderlich ist.
                </p>
            </section>
        </div>
    );
}
