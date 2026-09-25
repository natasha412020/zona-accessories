import { Layers, Smartphone, Sparkles, Scan } from "lucide-react";

const FEATURES = [
    {
        icon: Layers,
        title: "Fleksibel",
        description:
            "Menggunakan material TPU elastis yang dapat mengikuti lekukan ekstrim layar curved dengan presisi penuh.",
    },
    {
        icon: Smartphone,
        title: "Ultra Tipis",
        description:
            "Ketebalan minim membuat pelindung layar hampir tidak terlihat dan respons sentuh tetap sensitif & instan.",
    },
    {
        icon: Sparkles,
        title: "Self-Healing",
        description:
            "Goresan-goresan halus akibat pemakaian harian akan memudar dan menghilang secara otomatis dalam waktu singkat.",
    },
    {
        icon: Scan,
        title: "Presisi & Nyaman",
        description:
            "Dipotong menggunakan mesin canggih sehingga ukuran sangat pas di kamera, speaker, dan sudut handphone.",
    },
];

export default function Keunggulan() {
    return (
        <section id="kenapa-zona" className="bg-[#F3F4F1]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#6B8E6B]">
                        Mengapa Pilih Hydrogel?
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">
                        Kenapa Pilih Hydrogel by Antigo?
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-500">
                        Karena setiap layar memiliki kebutuhan yang berbeda, dan kami punya pilihannya.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-6"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF0E7]">
                                <Icon size={18} className="text-[#6B8E6B]" />
                            </div>
                            <h3 className="mt-5 text-base font-bold text-slate-950">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}