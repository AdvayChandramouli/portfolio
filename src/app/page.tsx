import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-content mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <header className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex-1">
            <h1 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
              {site.name}
            </h1>
            <p className="font-serif text-xl text-muted">{site.tagline}</p>
          </div>
          {site.avatar && (
            <div className="mt-6 md:mt-0 flex-shrink-0">
              <Image
                src={site.avatar}
                alt={site.name}
                width={192}
                height={192}
                className="aspect-square w-28 h-28 md:w-44 md:h-44 rounded-xl md:rounded-2xl object-cover border border-border shadow-lg"
                priority
                unoptimized={site.avatar.endsWith(".svg")}
              />
            </div>
          )}
        </header>

        {/* Section dividers with generous spacing */}
        <div className="space-y-24 md:space-y-32">
          <Experience />
          <div className="border-t border-border" aria-hidden />
          <Projects />
          <div className="border-t border-border" aria-hidden />
          <Publications />
          <div className="border-t border-border" aria-hidden />
          <Contact />
        </div>
      </main>
    </>
  );
}
