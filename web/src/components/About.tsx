import Image from "next/image";

const stats = [
    { value: "12", label: "Years on the web" },
    { value: "4", label: "WordPress companies" },
    { value: "EN · PT", label: "Languages" },
];

export default function About() {
    return(
        <section id="about" className="scroll-mt-24 px-4 pt-16 pb-20 md:pt-28">
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
            </div>
        </section>
    )
}