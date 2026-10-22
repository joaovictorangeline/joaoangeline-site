const links = [
    { href: "#about", label: "About" },
    { href: "#what-i-do", label: "What I do" },
    { href: "#experience", label: "Experience" },
];

export default function Header() {
    return(
        <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6x1 items-center justify-between px-6">
                <a href="#top" className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-terracotta text-sm font-bold text-white">
                        JA
                    </span>
                    <span className="font-bold tracking-tight text-lg">Joao Angeline</span>
                </a>

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

                <a href="#contact" className="rounded-x1 bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Let's chat
                </a>
            </div>
        </header>
    )
}