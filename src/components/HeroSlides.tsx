"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SiteConfig } from "@/lib/types";

const SLIDE_COUNT = 2;

export function HeroSlides({ site }: { site: SiteConfig }) {
  const [index, setIndex] = useState(0);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const goTo = useCallback((i: number) => {
    const next = ((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
    setIndex(next);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === index) {
        el.removeAttribute("inert");
      } else {
        el.setAttribute("inert", "");
      }
    });
  }, [index]);

  function handleKey(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  }

  const setSlideRef = (i: number) => (el: HTMLDivElement | null) => {
    slideRefs.current[i] = el;
  };

  const carouselNav = (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="p-1.5 rounded-md text-muted hover:text-accent transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <div className="flex items-center">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={index === i ? "true" : undefined}
            className="group px-1.5 py-2"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ease-out motion-reduce:transition-none ${
                index === i ? "w-8 bg-accent" : "w-1.5 bg-border group-hover:bg-muted-light"
              }`}
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="p-1.5 rounded-md text-muted hover:text-accent transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <span className="ml-1 font-sans text-xs text-muted-light tabular-nums">
        {index + 1} / {SLIDE_COUNT}
      </span>
    </div>
  );

  return (
    <header
      className="mb-20 md:mb-28"
      role="region"
      aria-roledescription="carousel"
      aria-label="Introduction"
      onKeyDown={handleKey}
    >
      <div className="relative grid">
        {/* Slide 1 — professional intro */}
        <div
          ref={setSlideRef(0)}
          className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
            index === 0
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label="Slide 1 of 2: Introduction"
          aria-hidden={index !== 0}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="flex-1 min-w-0">
              <h1 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
                {site.name}
              </h1>
              <p className="font-serif text-xl text-muted mb-4">{site.tagline}</p>
              <p className="font-serif text-[1.05rem] text-muted leading-relaxed max-w-prose">
                {site.hero.positioning}
              </p>
            </div>
            {site.avatar && (
              <div className="mt-8 mb-2 flex w-full flex-shrink-0 flex-col items-center gap-6 md:mb-0 md:mt-0 md:ml-auto md:w-auto">
                <div className="polaroid-image_wrapepr">
                  <Image
                    src={site.avatar}
                    alt={site.name}
                    width={192}
                    height={192}
                    className="aspect-square w-36 h-36 md:w-44 md:h-44 object-cover"
                    priority
                    unoptimized={site.avatar.endsWith(".svg")}
                  />
                </div>
                {carouselNav}
              </div>
            )}
          </div>
        </div>

        {/* Slide 2 — personal/about */}
        <div
          ref={setSlideRef(1)}
          className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
            index === 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label="Slide 2 of 2: About"
          aria-hidden={index !== 1}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="flex-1 min-w-0">
              <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                A bit about me
              </h2>
              <p className="font-serif text-[1.05rem] text-muted leading-relaxed mb-6 max-w-prose">
                {site.hero.about}
              </p>
              {site.hero.interests.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {site.hero.interests.map((label) => (
                    <span
                      key={label}
                      className="font-sans text-xs px-2.5 py-1 rounded bg-muted-subtle text-muted"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {site.hero.aboutImage && (
              <div className="mt-8 mb-2 flex w-full flex-shrink-0 flex-col items-center gap-6 md:mb-0 md:mt-0 md:ml-auto md:w-auto">
                <div className="polaroid-image_wrapepr">
                  <Image
                    src={site.hero.aboutImage}
                    alt={`${site.name} — casual photo`}
                    width={192}
                    height={192}
                    className="aspect-square w-36 h-36 md:w-44 md:h-44 object-cover"
                    loading="lazy"
                    unoptimized={site.hero.aboutImage.endsWith(".svg")}
                  />
                </div>
                {carouselNav}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
