"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Hydrogel", href: "#hydrogel" },
    { label: "Backskin", href: "#backskin" },
    { label: "Kenapa Zona?", href: "#kenapa-zona" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#854F0B] text-sm font-bold text-white">
                        Z
                    </span>
                    <span className="text-[17px] font-bold tracking-tight text-slate-900">
                        ZONA Accessories
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 lg:flex">
                    {NAV_LINKS.map((link, i) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`text-[15px] transition-colors ${i === 0
                                    ? "font-medium text-[#854F0B]"
                                    : "text-slate-700 hover:text-slate-950"
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA + menu */}
                <div className="hidden items-center gap-3 lg:flex">
                    <a
                        href="#produk"
                        className="rounded-lg bg-[#854F0B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#623b0a]"
                    >
                        Lihat Produk
                    </a>
                    <button
                        aria-label="Buka menu"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
                    >
                        <Menu size={18} />
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    aria-label="Buka menu"
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 lg:hidden"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {/* Mobile panel */}
            {open && (
                <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
                    <ul className="flex flex-col gap-4">
                        {NAV_LINKS.map((link, i) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block text-[15px] ${i === 0 ? "font-medium text-[#854F0B]" : "text-slate-700"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#produk"
                        className="mt-5 block rounded-lg bg-[#854F0B] px-5 py-2.5 text-center text-sm font-semibold text-white"
                    >
                        Lihat Produk
                    </a>
                </div>
            )}
        </header>
    );
}