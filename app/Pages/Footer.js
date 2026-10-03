import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const NAVIGASI = [
    { label: "Tentang Kami", href: "#" },
    { label: "Hydrogel", href: "#hydrogel" },
    { label: "Backskin Motif", href: "#backskin" },
    { label: "Reseller Program", href: "#" },
];

const BANTUAN = [
    { label: "Cara Pemasangan", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Hubungi CS", href: "#contact" },
];

const SOCIALS = [
    { icon: FaInstagram, href: "https://www.instagram.com/kedairoxy?stkn=eDZmb3hpa2Vrd29k", label: "Instagram" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@kedairoxy?_r=1&_t=ZS-9A0AXt8C5Yn", label: "Tiktok" },
    { icon: SiShopee, href: "https://id.shp.ee/qjfC5qNE", label: "Shopee" },
    { icon: FaWhatsapp, href: "https://wa.me/6282260123235?text=Halo%20Admin%2C%20saya%20mau%20caritahu%20soal%20hydrogel%20dan%20backskin%20", label: "WhatsApp" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#2E1B08]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#854F0B] text-xs font-bold text-white">
                                Z
                            </span>
                            <span className="text-[15px] font-bold text-white">
                                ZONA Accessories
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-[var(--footer-paragraph)]">
                            Menghadirkan solusi perlindungan layar melalui berbagai pilihan hydrogel screen protector yang presisi dan sesuai kebutuhan.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold-light)]">
                            Navigasi
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {NAVIGASI.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        className="text-sm text-[var(--footer-paragraph)] transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bantuan */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold-light)]">
                            Bantuan
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {BANTUAN.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        className="text-sm text-[var(--footer-paragraph)] transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Temukan kami di */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold-light)]">
                            Temukan Kami Di
                        </h3>
                        <div className="mt-4 flex items-center gap-3">
                            {SOCIALS.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-colors hover:bg-white/20"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-[var(--brand-gold-light)]">
                            Email: <a href="mailto:zonaacchp@gmail.com">zonaacchp@gmail.com</a>
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <p className="text-sm text-[var(--footer-paragraph)]">
                        © 2026 ZONA Accessories. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-sm text-[var(--footer-paragraph)] transition-colors hover:text-slate-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-[var(--footer-paragraph)] transition-colors hover:text-slate-300"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}