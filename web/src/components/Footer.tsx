export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line px-4 py-10 sm:px-6">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left sm:text-base">
                <p>© {year} Joao Angeline · joaoangeline.com</p>

                <a href="https://github.com/joaovictorangeline/joaoangeline-site" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 rounded-md transition hover:text-terracotta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
                    Know this site behind the scenes on{" "}
                    <span className="font-semibold text-ink group-hover:text-terracotta">GitHub</span>
                    <span aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                </a> 
            </div>
        </footer>
    );
}