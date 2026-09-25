import { ArrowRight, Droplet } from "lucide-react";

export default function Home() {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-15">
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
                <div className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-[700px]">
                        <img src="/asset/main-pict.jpeg" className="rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}