type Metric = { value: string; label: string};

type Role = {
    company: string;
    title: string;
    period: string;
    summary: string;
    highlights: string[];
    metrics: Metric[];
};

const roles: Role[] = [
    {
        company: "Rocket.net",
        title: "WordPress Developer & Support",
        period: "2024 - Present",
        summary: "Custom code and hands-on engineering for Standard, Enterprise and VIP WordPress sites on a managed hosting platform.",
        highlights: [
            "Built a custom fix for a WPML bug that deleted media from the database but left orphaned files on disk.",
            "Wrote a custom JavaScript delay script to replace WP Rocket's Delay JS where it broke sites, plus an interactive script that disables plugins one by one to isolate conflicts in minutes.",
            "Engineered .htaccess rule sets for redirects, security headers, and country and IP blocking against bots and attackers.",
            "Migrated sites from WP Engine, Kinsta, Flywheel, Cloudways, raw backups, and migration plugins; authored internal docs on Elementor CSS regeneration and URL replacement.",
        ],
        metrics: [
            { value: "95%+", label: "CSAT" },
            { value: "~700", label: "live chats / month" },
            { value: "VIP", label: "& Enterprise code fixes" },
        ],
    },
    {
        company: "WPForms",
        title: "WordPress Developer & Support",
        period: "2022 - 2024",
        summary: "Custom backend and frontend solutions for VIP and Enterprise customers, alongside high-volume support.",
        highlights: [
            "Delivered custom PHP and JavaScript snippets and full form builds for VIP and Enterprise clients, including payment gateway integrations, with at least two custom projects running at a time.",
            "Reported ~30 bugs that shipped as critical fixes and 50+ improvement requests, and volunteered to help implement several of them.",
            "Shipped every custom solution with documentation and a screen-recorded walkthrough, so customers could own and maintain it.",
        ],
        metrics: [
            { value: "95%+", label: "CSAT" },
            { value: "~200", label: "tickets / week" },
            { value: "2h", label: "avg. first response" },
            { value: "~30", label: "bug fixes shipped" },
        ],
    },
    {
        company: "WP Rocket",
        title: "WordPress Developer & Support",
        period: "2018 - 2022",
        summary: "Performance engineering, every day: taking WordPress sites from red to green on Google PageSpeed.",
        highlights: [
            "Built helper plugins that scan a site and flag performance bottlenecks: heavy files, slow requests, and outdated plugins and themes.",
            "Wrote custom WP Rocket add-ons to tune features like cache preload so they never overloaded a client's hosting.",
            "Combined caching, file and dependency-tree optimization, and image optimization to hit Core Web Vitals targets.",
        ],
        metrics: [
            { value: "40 → 90+", label: "PageSpeed score" },
            { value: "Daily", label: "performance audits" },
        ],
    },
    {
        company: "Theme Punch",
        title: "Technical Support",
        period: "2014 — 2016",
        summary: "Where it started: supporting Revolution Slider customers while teaching myself PHP, WordPress, CSS, and JavaScript.",
        highlights: [
            "Troubleshot Revolution Slider implementations and code conflicts, and taught customers how to build advanced sliders.",
        ],
        metrics: [{ value: "20–25", label: "tickets / day" }],
    },
]

const skillGroups: { label: string; skills: string[] }[] = [
    {
        label: "Languages & frameworks",
        skills: [
            "PHP",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "GraphQL (WPGraphQL)",
            "REST API",
            "Tailwind CSS",
        ],
    },
    {
        label: "WordPress",
        skills: [
            "WordPress",
            "Gutenberg blocks",
            "WooCommerce",
            "WPML",
            "Elementor",
            "WP-CLI",
            "MySQL",
        ],
    },
     {
        label: "Infra & tooling",
        skills: [
            "Git & GitHub Actions",
            "Linux & SSH",
            "Cloudflare",
            "Redis / Object Cache",
            "Core Web Vitals",
            "Jira",
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 md:py-16">
            <h2 id="experience-heading" className="text-5xl font-bold tracking-light text-ink">
                Experience
            </h2>

            <ol className="mt-12 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white/50">
                {roles.map((role) => (
                    <li key={role.company} className="grid gap-4 p-6 md:grid-cols-[14rem_1fr_auto] md:gap-8 md:p-8">
                        {/* Period first on mobile, last column on desktop */}
                        <span className="w-fit rounded-full bg-blush px-4 py-1.5 text-sm font-medium text-terracotta md:order-3 md:self-start">
                            {role.period}
                        </span>

                        <div className="md;order-1">
                            <h3 className="text-xl font-bold text-ink md;text-2xl">
                                {role.company}
                            </h3>
                            <p className="mt-1 text-muted">{role.title}</p>
                        </div>

                        <div className="md:order-2">
                            <p className="mt-1 text-muted">{role.summary}</p>

                            <ul className="mt-4 space-y-2">
                                {role.highlights.map((item) => (
                                    <li key={item} className="flex gap-3 text-muted">
                                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                                {role.metrics.map((m) => (
                                    <div key={m.label} className="flex flex-col">
                                        <dt className="order-2 text-sm text-muted">{m.label}</dt>
                                        <dd className="order-1 text-2xl font-bold text-terracotta"> {m.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </li>
                ))}
            </ol>
            
            <div className="mt-12 space-y-6">
                {skillGroups.map((group) => (
                    <div key={group.label}>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                            {group.label}
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <li key={skill} className="rounded-xl border border-line px-4 py-2 text-ink">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div> 
                ))}
            </div>
        </section>
    )
}