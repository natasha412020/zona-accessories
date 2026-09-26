import { Database, ShieldCheck, Palette, Users, PackageCheck } from "lucide-react";

const REASONS = [
    {
        icon: Database,
        title: "Presisi & Pas untuk Berbagai Layar",
        description:
            "Hydrogel dipotong menggunakan pola yang disesuaikan dengan berbagai model smartphone untuk hasil pemasangan yang rapi dan presi",
    },
    {
        icon: ShieldCheck,
        title: "Kategori Basic hingga Premium",
        description:
            "Kami menyediakan opsi produk dari tingkat standar ekonomis hingga material impor berlapis tangguh kelas atas.",
    },
    {
        icon: Palette,
        title: "Berbagai Macam Motif & Desain",
        description:
            "Puluhan koleksi motif backskin estetik terus diperbarui berkala demi memenuhi gaya kekinian Anda.",
    },
    {
        icon: Users,
        title: "Sangat Cocok untuk Reseller",
        description:
            "Dapatkan penawaran harga grosir khusus kemitraan yang sangat menguntungkan untuk toko aksesoris Anda.",
    },
    {
        icon: PackageCheck,
        title: "Perlengkapan Pemasangan Lengkap",
        description:
            "Setiap paket penjualan ritel dilengkapi tisu alkohol, stiker debu, dan kartu pendorong gratis untuk instalasi mudah di rumah.",
    },
];

export default function WhyZona() {
    return (
        <section id="kenapa-zona-detail" className="bg-[#FAFAF9]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
                {/* Left: image with caption overlay */}
                <div className="relative overflow-hidden rounded-2xl">
                    <img
                        src="/asset/hydrogel-3.png"
                        alt="Proses produksi dan pemasangan produk Zona Accessories"
                        className="aspect-[4/5] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-7">
                        <h3 className="text-xl font-bold leading-snug text-white">
                            Detail Kecil, Perbedaan Besar
                        </h3>
                        <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-200">
                            Dari material hingga proses pemotongan, setiap detail diperhatikan untuk memberikan hasil yang rapi dan nyaman digunakan.
                        </p>
                    </div>
                </div>

                {/* Right: reasons list */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#854F0B]">
                        Nilai Lebih Kami
                    </p>
                    <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">
                        Kenapa Zona Accessories?
                    </h2>

                    <ul className="mt-8 space-y-6">
                        {REASONS.map(({ icon: Icon, title, description }) => (
                            <li key={title} className="flex gap-4">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FAEEDA]">
                                    <Icon size={16} className="text-[#854F0B]" />
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-bold text-slate-950">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                                        {description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}