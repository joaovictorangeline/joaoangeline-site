export default function Contact() {
    return(
        <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-6xl rounded-4xl bg-linear-to-br from-terracotta to-[#b5583a] px-6 py-16 text-center shadow-[0_30px_80px_-30px_rgba(156,69,48,0.5)] sm:px-12 sm:py-24">
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
                    Let&apos;s build something together.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base text-white sm:text-xl">Development, support, or both — I&apos;m one message away.</p>

                <a href="mailto:hello@joaoangeline.com" className="mt-10 inline-block rounded-2xl bg-white py-5 px-8 text-base font-semibold text-ink shadow-xl transition hover:-translate-y-0.5 hover: shadow-xl focus-visible:outline-2 focus-visible: outline-offset-4 focus-visible:outline-white sm:px-12 sm:py-5 sm:text-lg">
                     hello@joaoangeline.com
                </a>
            </div>
        </section>
    )
}