import type { ReactNode } from "react";

type BrowserFrameProps = {
    url: string;
    children: ReactNode;
    className?: string;
}

export function BrowserFrame({ url, children, className= "" }: BrowserFrameProps) {
    return(
        <figure className={`rounded-4xl border border-line bg-cream p-3 shadow-[0_30px_80px_-30px_rgba(160,90,60,0.34)] sm:p-4 ${className}`}>
            {/* Title bar: traffic-light dots + address */}
            <div className="flex items-center gap-4 px-3 pt-1 sm:px-5 sm:pb-4 sm:pt-2">
                <div className="flex gap-2" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-[#d98f7a] sm:h-4 sm:w-4" />
                    <span className="h-3 w-3 rounded-full bg-[#e3a37a] sm:h-4 sm:w-4" />
                    <span className="h-3 w-3 rounded-full bg-[#6f8f6a] sm:h-4 sm:w-4" />
                </div>
                <span className="text-base text-muted sm:text-xl">{url}</span>
            </div>

            {/* Screen: the image gets clipped to rounded corners */}
            <div className="overflow-hidden rounded-3xl">{children}</div>
        </figure>
    )
}