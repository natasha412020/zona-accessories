const MOTIFS = [
    {
        image: "/asset/3d-diamond.png",
        title: "3D Transparent Skin",
        badge: "Best Seller",
        description:
            "Tekstur tipis transparan (seperti serat karbon atau aurora) dengan motif 3D unik yang tetap mempertahankan warna asli bawaan ponsel sekaligus melindunginya secara penuh.",
    },
    {
        image: "/asset/2D-transparent-motif.png",
        title: "2D Transparent Skin",
        description:
            "Tekstur tipis transparan dengan motif 2D unik yang tetap mempertahankan warna asli bawaan ponsel sekaligus melindunginya secara penuh.",
    },
    {
        image: "/asset/3D-motif-gambar.png",
        title: "3D Textured Motif",
        description:
            "Memiliki tekstur nyata yang timbul saat disentuh. Pilihan motif berkelas mulai dari serat kayu, kulit mewah, hingga pola geometris futuristik modern.",
    },
    {
        image: "/asset/motif-3d-Glitter.png",
        title: "Art & Glitter Patterns",
        description:
            "Kombinasi warna-warni artistik dengan kilauan glitter elegan. Tampil beda dan ekspresikan gaya personal unik smartphone kamu.",
    },
    {
        image: "/asset/aurora.png",
        title: "3D Motif Aurora",
        description:
            "Kombinasi warna-warni artistik dengan pantulan aurora yang elegan. Tampil beda dan ekspresikan gaya personal unik smartphone kamu.",
    },
];

export default function Backskin() {
    return (
        <section id="backskin" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#854F0B]">
                        Gaya &amp; Proteksi Belakang
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">
                        Backskin Motif Dekoratif
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-500">
                        Lindungi bagian belakang smartphone kamu dari goresan case dengan
                        motif-motif estetik premium yang presisi.
                    </p>
                </div>

                <div className="mt-14 flex flex-wrap justify-center gap-6">
                    {MOTIFS.map(({ image, title, badge, description }) => (
                        <div
                            key={title}
                            className="
                                w-full
                                overflow-hidden
                                rounded-xl
                                border border-slate-200
                                bg-white
                                sm:w-[calc(33.333%-16px)]
                            "
                        >
                            <img
                                src={image}
                                alt={title}
                                className="aspect-[4/4] w-full object-cover"
                            />
                            <div className="p-5">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-base font-bold text-slate-950">
                                        {title}
                                    </h3>
                                    {badge && (
                                        <span className="rounded-full bg-[#FAEEDA] px-2.5 py-0.5 text-[11px] font-semibold text-[#854F0B]">
                                            {badge}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">
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