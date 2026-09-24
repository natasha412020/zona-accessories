import { Check } from "lucide-react";

const POINTS = [
    "Bahan TPU Elastis & Lembut",
    "Mendukung Layar Curved & Fingerprint Sensor",
];

export default function Knowledge() {
    return (
        <section id="hydrogel" className="bg-[#FAFAF9]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
                {/* Left: image */}
                <div className="overflow-hidden rounded-2xl">
                    <img
                        src="/asset/hydrogel-1.png"
                        alt="Proses pemasangan hydrogel screen protector pada smartphone"
                        className="aspect-[4/3] w-full object-cover"
                    />
                </div>

                {/* Right: copy */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#6B8E6B]">
                        Penjelasan Produk
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">
                        Apa Itu Hydrogel?
                    </h2>

                    <p className="mt-5 leading-relaxed text-slate-500">
                        Hydrogel Screen Protector adalah pelindung layar inovatif
                        berbahan TPU (Thermoplastic Polyurethane) yang sangat fleksibel
                        dan elastis. Berbeda dengan tempered glass yang kaku dan mudah
                        retak, hydrogel mampu menempel dengan sempurna hingga ke bagian
                        tepi layar melengkung (curved screen).
                    </p>

                    <p className="mt-4 leading-relaxed text-slate-500">
                        Selain ultra tipis sehingga tidak mengurangi sensitivitas
                        sentuhan layar, hydrogel memiliki kemampuan self-healing yang
                        dapat menyamarkan goresan halus secara otomatis dalam waktu
                        24–48 jam.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {POINTS.map((point) => (
                            <li key={point} className="flex items-center gap-2.5">
                                <Check size={16} className="shrink-0 text-[#6B8E6B]" />
                                <span className="text-[15px] font-medium text-slate-800">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}