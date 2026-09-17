import { ArrowRight, Droplet } from "lucide-react";

export default function Home() {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
                {/* Left: copy */}
                <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF0E7] px-4 py-1.5 text-sm font-medium text-[#4C6B4C]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6B8E6B]" />
                        Pelopor Screen Protector Fleksibel
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-950 lg:text-[54px]">
                        Kenali Hydrogel, Pelindung Fleksibel untuk Smartphone Kamu
                    </h1>

                    <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
                        Temukan berbagai jenis hydrogel berkualitas tinggi dan backskin
                        motif dekoratif yang dirancang presisi untuk segala jenis tipe
                        smartphone.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a
                            href="#produk"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#6B8E6B] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#5c7c5c]"
                        >
                            Lihat Produk Kami
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-slate-300 px-6 py-3.5 text-[15px] font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                        >
                            Hubungi Kami
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="flex -space-x-2.5">
                            <span className="h-8 w-8 rounded-full border-2 border-white bg-[#6B8E6B]" />
                            <span className="h-8 w-8 rounded-full border-2 border-white bg-[#5B7FD9]" />
                            <span className="h-8 w-8 rounded-full border-2 border-white bg-[#3D4756]" />
                        </div>
                        <p className="text-sm text-slate-500">
                            Dipercaya oleh ribuan smartphone owners &amp; resellers di
                            Indonesia.
                        </p>
                    </div>
                </div>

                {/* Right: product visual */}
                <div className="relative flex items-center justify-center rounded-3xl bg-[#8FA98F] p-10 lg:p-14">
                    <div className="relative w-full max-w-[260px]">
                        {/* Phone */}
                        <div className="relative aspect-[9/18.5] w-full rounded-[2.2rem] border-[6px] border-slate-900 bg-white shadow-xl">
                            <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
                            <svg
                                viewBox="0 0 200 420"
                                className="h-full w-full text-[#6B8E6B]/40"
                                fill="none"
                            >
                                {Array.from({ length: 26 }).map((_, i) => {
                                    const cx = 20 + ((i * 53) % 170);
                                    const cy = 30 + ((i * 97) % 370);
                                    const r = 4 + (i % 4) * 2.5;
                                    return (
                                        <circle
                                            key={i}
                                            cx={cx}
                                            cy={cy}
                                            r={r}
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Dial */}
                        <div className="absolute -bottom-6 left-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-200 bg-gradient-to-br from-slate-100 to-slate-300 shadow-lg">
                            <Droplet size={18} className="text-slate-500" />
                        </div>

                        {/* Brand tag */}
                        <div className="absolute -bottom-7 right-[-2.5rem] rounded-lg bg-white px-4 py-3 shadow-lg">
                            <p className="text-sm font-bold leading-none text-slate-900">
                                HYDRO<span className="font-normal">SHIELD</span>
                            </p>
                            <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">
                                Advanced Screen Protection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}