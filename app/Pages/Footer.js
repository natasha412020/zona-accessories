import { ShoppingBag, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

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
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: ShoppingBag, href: "#", label: "Shopee" },
    { icon: Phone, href: "#", label: "WhatsApp" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#111827]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6B8E6B] text-xs font-bold text-white">
                                Z
                            </span>
                            <span className="text-[15px] font-bold text-white">
                                ZONA Accessories
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            Menghadirkan solusi perlindungan layar melalui berbagai pilihan hydrogel screen protector yang presisi dan sesuai kebutuhan.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Navigasi
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {NAVIGASI.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-slate-300 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bantuan */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Bantuan
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {BANTUAN.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-slate-300 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Temukan kami di */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Temukan Kami Di
                        </h3>
                        <div className="mt-4 flex items-center gap-3">
                            {SOCIALS.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-colors hover:bg-white/20"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-slate-400">
                            Email: info@zonaaccessories.com
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
                    <p className="text-sm text-slate-500">
                        © 2026 ZONA Accessories. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}