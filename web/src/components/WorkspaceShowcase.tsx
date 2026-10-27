import Image from "next/image";
import { BrowserFrame } from "./BrowserFrame";

type WorkspaceShowcasePros = {
    src?: string;
    alt?: string; 
}

export function WorkspaceShowcase({
    src = "/images/showcase/workspace.jpg",
    alt = "A developer workspace with code on the left and a live website preview on the right",
}: WorkspaceShowcasePros){
    return (
        <section className="px-6 pb-24 pt-8 sm:pt-12">
            <div className="mx-auto max-w-6xl">
                <BrowserFrame url="joaoangeline.com">
                    <Image
                        src={src}
                        alt={alt}
                        width={1600}
                        height={800}
                        className="h-auto w-full"
                        loading="eager"
                    />
                </BrowserFrame>
            </div>
        </section>
    )
}