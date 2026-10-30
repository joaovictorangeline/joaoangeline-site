type Service = {
    title: string;
    description: string;
    featured?: boolean;
}

const services: Service[] = [
    {
        title: "WordPress Development",
        description: "Plugins, themes and code-level debugging across PHP, JavaScript, React, Next.js, Tailwind, and Github Workflow.",
        featured: true,
    },
    {
        title: "Customer Success",
        description: "Clear, empathetic technical support for global small/medium/enterprise clients — tickets, live chat and developer advocacy."
    },
    {
        title: "Performance Optimization",
        description: "Core Web Vitals, LCP, caching and render-blocking fixes for enterprise sites."
    },
    {
        title: "Hosting, DNS & SMTP",
        description: "Terminal-level troubleshooting, DNS configuration and reliable email delivery."
    },
];

export default function Services() {
    return(
        <section id="what-i-do" className="scroll-mt-24 px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-5xl font-bold tracking-tight text-ink sm:text6xl">
                        One person. Code and <br />support.
                    </h2>
                    <p className="mt-5 text-lg text-muted">
                        Everything your WordPress clients need, from the first contact to the launch.
                    </p>
                </div>
            
                <div className="mt-14 grid gap-5 md:grid-cols-2">
                    {services.map((service, index) => (
                        <article key={service.title} className={`rounded-3xl border p-8 transition duration-200 hover:-translate-y-1 sm:p-10 ${
                            service.featured 
                            ? "border-transparent bg-linear-to-br from-terracotta to-[#d98a54] text-white hover:shadow-[0_24px_48px_-12px_rgba(196,100,66,0.45)]"
                            : "border-line bg-cream text-ink hover:shadow-[0_24px_48px_-12px_rgba(60,30,15,0.18)]"
                        }`}
                    >
                        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${
                            service.featured
                            ? "bg-white/20 text-white"
                            : "bg-terracotta/10 text-terracotta"
                        }`}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-8 text-2xl font-bold tracking-tight">
                            {service.title}
                        </h3>
                        <p className={`mt-3 text-lg leading-relaxed ${
                            service.featured ? "text-white/90" : "text-muted"    
                        }`}
                        >
                            {service.description}
                        </p>
                    </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
