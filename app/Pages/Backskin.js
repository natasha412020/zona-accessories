const MOTIFS = [
    {
        image: "/asset/2D-transparent-motif.png",
        title: "2D Transparent Skin",
        badge: "Best Seller",
        description:
            "Tekstur tipis transparan (seperti serat karbon atau aurora) yang tetap mempertahankan warna asli bawaan ponsel sekaligus melindunginya secara penuh.",
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
];

export default function Backskin() {
    return (
        <section id="backskin" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#6B8E6B]">
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

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {MOTIFS.map(({ image, title, badge, description }) => (
                        <div
                            key={title}
                            className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                        >
                            <img
                                src={image}
                                alt={title}
                                className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="p-5">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-base font-bold text-slate-950">
                                        {title}
                                    </h3>
                                    {badge && (
                                        <span className="rounded-full bg-[#EAF0E7] px-2.5 py-0.5 text-[11px] font-semibold text-[#4C6B4C]">
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