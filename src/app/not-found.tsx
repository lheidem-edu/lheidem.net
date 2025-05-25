import Link from "next/link";

export default function NotFound() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    Seite nicht gefunden
                </h1>
                <p className="text-sm text-neutral-400">
                    Die angeforderte Seite existiert nicht oder wurde entfernt.
                </p>
            </section>
        </div>
    );
}
