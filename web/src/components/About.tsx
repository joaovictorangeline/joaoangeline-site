import Image from "next/image";
import type { ReactNode } from "react";

const stats = [
    { value: "12", label: "Years on the web" },
    { value: "4", label: "WordPress companies" },
    { value: "EN · PT", label: "Languages" },
];

function Mark({children} : { children: ReactNode }) {
    return(
        <mark className="rounded bg-terracotta/15 px-1 font-semibold text-ink [box-decoration-break:clone]">
            {children}
        </mark>
    )
}

export default function About() {
    return(
        <section id="about" className="scroll-mt-24 px-4 pt-2 pb-6 md:pt-12">
            <div className="mx-auto max-w-4xl rounded-3xl bg-blush p-6 text-center sm:p-10 md:p-14">
                {/* Avatar */}
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-cream shadow-lg ring-2 ring-terracotta/30 md:h-32 md:w-32">
                    <Image
                        src="/images/joao-angeline-profile.png"
                        alt="Joao smiling, holding his two small dogs"
                        width={256}
                        height={256}
                        className="h-full w-full object-cover"
                        priority={false}
                    />
                </div>
                {/* Chip */}
                <p className="mx-auto mt-5 inline-block rounded-full bg-cream px-4 py-1.5 text-xs text-muted sm:text-sm">
                    <span className="font-semibold text-terracotta">
                        Joao + the Paw Helpers
                    </span>{" "}
                    · unpaid QA team
                </p>

                {/* Headline */}
                <p className="mt-8 text-sm font-semibold text-terracotta">
                    About me
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
                    WordPress Developer who builds smart solutions, debugs at the code level, optimizes performance, puts security first, and makes every customer feel heard.
                </h2>

                {/* Body copy */}
                <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-base leading-relaxed text-muted md:text-center md:text-lg">

                    <p>
                        I&apos;m a <Mark>WordPress developer with{" "}12 years inside the ecosystem</Mark>, across four WordPress companies, from plugin support/development to hosting infrastructure. I build{" "}<Mark>custom plugins, themes, and Gutenberg blocks</Mark> in PHP, JavaScript, and React, and turn designs into functional sites.
                    </p>
                    <p>
                        Years of debugging other people&apos;s production sites taught me howWordPress actually breaks, so the code I write is built for the real world: <Mark>readable, defensive, and easy to maintain</Mark>
                    </p>
                    <p>
                         Away from the keyboard, you&apos;ll find me in the kitchen testing recipes, with my dogs supervising as my unpaid QA team. I&apos;m endlessly curious, always picking up something new.
                    </p>
   
                </div>

                {/* Stats */}
                <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
                    {stats.map((stat) => 
                        <div key={stat.label} className="rounded-2xl border border-line bg-cream px-2 py-5 sm:py-7">
                            <dt className="sr-only">{stat.label}</dt>
                            <dd className="text-2xl font-bold text-terracotta sm:text-4xl"> {stat.value}</dd>
                            <p className="mt-1 text-xs text-muted sm:text-base" aria-hidden="true">
                                {stat.label}
                            </p>
                        </div>
                    )}
                </dl>
            </div>
        </section>
    )
}