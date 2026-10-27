"use client";

import { useEffect, useState } from "react";

const links = [
    { href: "#about", label: "About" },
    { href: "#what-i-do", label: "What I do" },
    { href: "#experience", label: "Experience" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    // Lock page scroll while the menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        }
    }, [open]);

    // Reset if the viewport grows past the md breakpoint
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
        mq.addEventListener("change", onChange);
        return() => mq.removeEventListener("change", onChange);
    }, []);

    return(
        <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#top" onClick={close} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-terracotta text-sm font-bold text-white">
                        JA
                    </span>
                    <span className="font-bold tracking-tight text-lg">Joao Angeline</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden gap-8 md:flex">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="rounded-full px-4 py-2 font-medium text-muted transition-colors hover:bg-line hover:text-ink"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                
                <div className="flex items-center gap-2">
                    <a href="#contact" className="rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                        Let&apos;s chat
                    </a>

                    {/* Hamburger (below md only) */}
                    <button type="button" className="relative flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-line md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile menu"
                    onClick={() => setOpen((v) => !v)}>
                       <span
                            className="absolute h-0.5 w-5 rounded bg-current transition-transform duration-300"
                            style={{
                                transform: open ? "translateY(0) rotate(45deg)" : "translateY(-6px)",
                            }}
                        />
                        <span
                            className="absolute h-0.5 w-5 rounded bg-current transition-opacity duration-200"
                            style={{ opacity: open ? 0 : 1 }}
                        />
                        <span
                            className="absolute h-0.5 w-5 rounded bg-current transition-transform duration-300"
                            style={{
                                transform: open ? "translateY(0) rotate(-45deg)" : "translateY(6px)",
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Panel */}
            <div id="mobile-menu" className={`absolute inset-x-0 top-full border-b border-line bg-cream shadow-lg transition-all duration-200 md:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
            >
                <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
                    {links.map((l) => (
                        <a 
                            key={l.href}
                            href={l.href}
                            onClick={close}
                            className="border-b border-line py-4 text-lg font-medium text-ink"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a 
                        href="#contact"
                        onClick={close}
                        className="mt-5 rounded-xl bg-terracotta py-3.5 text-center text-lg font-semibold text-white sm:hidden">
                            Let&apos;s chat
                        </a>
                </nav>
            </div>
        </header>
    )
}