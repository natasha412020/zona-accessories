const TYPES = [
    {
        image: "/hydrogel-clear.svg",
        title: "Clear / Ultra HD",
        description:
            "Kejernihan maksimal layaknya layar asli. Sangat transparan dan tidak mengurangi kualitas warna display.",
    },
    {
        image: "/hydrogel-matte.svg",
        title: "Matte / Anti-Glare",
        description:
            "Finishing doff bebas pantulan cahaya & sidik jari. Sangat cocok bagi gamers dan aktivitas luar ruangan.",
    },
    {
        image: "/hydrogel-blueray.svg",
        title: "Anti Blueray",
        description:
            "Menyaring radiasi sinar biru berlebih untuk menjaga kesehatan mata saat menatap smartphone terlalu lama.",
    },
    {
        image: "/hydrogel-privacy.svg",
        title: "Privacy / Spy",
        description:
            "Melindungi privasi layar dari intipan orang di sebelahmu. Hanya terlihat jelas dari sudut pandang lurus.",
    },
    {
        image: "/hydrogel-uv.svg",
        title: "UV Curing HD",
        description:
            "Mengeras setelah disinari lampu UV, memberikan tingkat proteksi benturan lebih tangguh mirip kaca.",
    },
];

export default function HydrogelTypes() {
    return (
        <section className="bg-[#FAFAF9]">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#6B8E6B]">
                        Varian Produk
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">
                        Jenis Hydrogel Kami
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-500">
                        Sesuaikan proteksi layar dengan kenyamanan visual dan aktivitas
                        harian kamu.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                    {TYPES.map(({ image, title, description }) => (
                        <div
                            key={title}
                            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="aspect-square w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-[15px] font-bold text-slate-950">
                                    {title}
                                </h3>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}