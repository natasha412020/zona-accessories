import { ShoppingBag, MessageCircle } from "lucide-react";
import { SiShopee } from "react-icons/si";


export default function Contact() {
    return (
        <section className="bg-white px-6 py-16 lg:px-10">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#854F0B] px-8 py-16 text-center sm:px-16">
                <div className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full bg-white/5" />

                <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-[38px]">
                    Siap Temukan Hydrogel yang Tepat?
                </h2>
                <p className="relative mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">
                    Tingkatkan proteksi layar dan tampilan casing belakang ponsel
                    kesayangan Anda hari ini. Hubungi tim CS kami atau langsung
                    kunjungi katalog produk terlaris.
                </p>

                <a
                    href="https://wa.me/6281290909185?text=Halo%20Admin%2C%20saya%20mau%20caritahu%20soal%20hydrogel%20dan%20backskin%20"
                    target="_blank"
                    className="inline-flex mt-8 items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                    Hubungi Kami
                    <MessageCircle size={16} />
                </a>
                <div className="relative mt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="https://id.shp.ee/qjfC5qNE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#EE4D2D] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D93F22]"
                    >
                        <SiShopee size={17} />
                        Cek di Shopee
                    </a>

                    <a
                        href="https://tk.tokopedia.com/ZSbRrvF1v/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#03AC0E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#038F0B]"
                    >
                        <ShoppingBag size={17} />
                        Cek di Tokopedia
                    </a>
                </div>
            </div>
        </section>
    );
}