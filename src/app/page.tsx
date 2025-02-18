import { Mail, Map } from "lucide-react";

export default function Page() {
    return (
        <div className="flex min-h-svh bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white">
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-y-16 rounded-lg backdrop-blur-lg">
                <div className="flex flex-col gap-y-6">
                    <header className="flex flex-col gap-y-4">
                        <h1 className="text-4xl font-bold tracking-tight">
                            Luca Heidemann
                        </h1>

                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex items-center gap-x-2">
                                <Map className="h-4 w-4 text-neutral-400" />
                                <a
                                    href="https://www.google.com/maps/place/Nordrhein-Westfalen,+Deutschland"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
}
