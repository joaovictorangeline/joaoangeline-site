import { WorkspaceShowcase } from "./WorkspaceShowcase";

export default function Hero() {
    return(
        <section id="top" className="relative overflow-hidden" style={{background:  "radial-gradient(60% 50% at 50% 0%, rgba(224,139,80,0.18), transparent 70%)"}}>
            <div className="mx-auto max-w-6x1 px-6 pb-24 pt-20 text-center md:pt-28">
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"><span className="bg-gradient-to-r from-terracotta to-terracotta-light bg-clip-text text-transparent">WordPress</span>{" "} Developer &amp;
                <br />
                Customer Success</h1>

                <p className="mt-8 text-xl. text-muted md:text-2xl">
                    Bringing solutions and building relationships
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <a href="#contact" className="rounded-2xl bg-terracotta px-8 py-4 font-semibold text-white shadow-lg shadow-terracotta/25 transition-transform hover:-translate-y-0.5">
                        Get in touch →
                    </a>

                    <a href="#experience" className="rounded-2xl border border-line bg-white px-8 py-4 font-semibold transition-colors hover:border-terracotta">
                        See Experience
                    </a>
                </div>    
            </div>

            <WorkspaceShowcase />
        </section>
    )
}