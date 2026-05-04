import { Nav } from "@/components/Nav";
import { HeroSlides } from "@/components/HeroSlides";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { UTDWebring } from "@/components/UTDWebring";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-content mx-auto px-6 py-16 md:py-24">
        <HeroSlides site={site} />

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
        <footer className="mt-16 border-t border-border pt-10 pb-14 flex justify-center">
          <UTDWebring />
        </footer>
      </main>
    </>
  );
}
