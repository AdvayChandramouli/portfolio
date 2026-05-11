"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

const CONTACT_PAGE_SIZE = 4;

const icons = {
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  social: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  research: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 7.5v12.75" />
      <path d="M4.5 19.5A2.25 2.25 0 0 1 2.25 17.25V6.75A2.25 2.25 0 0 1 4.5 4.5h4.903a2.25 2.25 0 0 1 1.748.804l1.37 1.71a.375.375 0 0 0 .293.12H12" />
      <path d="M19.5 19.5a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-4.903a2.25 2.25 0 0 0-1.748.804l-1.37 1.71a.375.375 0 0 1-.293.12H12" />
    </svg>
  ),
};

type ContactLinkSub = { label: string; href: string };
type ContactCardItem =
  | { label: string; icon: keyof typeof icons; links: ContactLinkSub[] }
  | {
      label: string;
      icon: keyof typeof icons;
      href: string;
      value: string;
      external: boolean;
    };

const contactCards: ContactCardItem[] = [
  {
    label: "Email",
    icon: "email",
    href: `mailto:${site.links.email}`,
    value: "Drop a message",
    external: false,
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: site.links.linkedin,
    value: "Let's connect",
    external: true,
  },
  {
    label: "GitHub",
    icon: "github",
    href: site.links.github,
    value: "Peek at my repos",
    external: true,
  },
  ...(site.links.googleScholar || site.links.orcid
    ? [
        {
          label: "Research",
          icon: "research" as const,
          links: [
            ...(site.links.googleScholar
              ? [{ label: "Google Scholar", href: site.links.googleScholar }]
              : []),
            ...(site.links.orcid ? [{ label: "ORCID", href: site.links.orcid }] : []),
          ],
        } satisfies ContactCardItem,
      ]
    : []),
  ...(site.links.instagram || site.links.twitter
    ? [
        {
          label: "Social",
          icon: "social" as const,
          links: [
            ...(site.links.instagram ? [{ label: "Instagram", href: site.links.instagram }] : []),
            ...(site.links.twitter ? [{ label: "Twitter", href: site.links.twitter }] : []),
          ],
        } satisfies ContactCardItem,
      ]
    : []),
];

function chunkItems<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

const wideCardColClass = "w-full min-w-0 lg:w-[calc((100%-3rem)/4)] lg:max-w-[calc((100%-3rem)/4)]";

function ContactCardView({ card }: { card: ContactCardItem }) {
  if ("links" in card) {
    return (
      <div className="p-4 bg-glass-bg backdrop-blur-md glass-backdrop-md border border-glass-border rounded-xl shadow-glass transition-all duration-300 ease-out hover:bg-glass-bg-hover hover:border-glass-border-hover hover:shadow-glass hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 h-full">
        <div className="flex justify-center mb-3 text-muted">{icons[card.icon]}</div>
        <h3 className="font-sans text-sm font-medium text-foreground mb-3">{card.label}</h3>
        <div className="flex flex-col gap-2 font-sans text-sm">
          {card.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a
      href={card.href}
      target={card.external ? "_blank" : undefined}
      rel={card.external ? "noopener noreferrer" : undefined}
      className="block p-4 bg-glass-bg backdrop-blur-md glass-backdrop-md border border-glass-border rounded-xl shadow-glass transition-all duration-300 ease-out hover:bg-glass-bg-hover hover:border-glass-border-hover hover:shadow-glass hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 group h-full"
    >
      <div className="flex justify-center mb-3 text-muted group-hover:text-accent transition-colors">
        {icons[card.icon]}
      </div>
      <h3 className="font-sans text-sm font-medium text-foreground mb-2">{card.label}</h3>
      <p className="font-sans text-sm text-muted truncate">{card.value}</p>
    </a>
  );
}

function ContactWideLayout({ pages }: { pages: ContactCardItem[][] }) {
  const slideCount = pages.length;
  const [index, setIndex] = useState(0);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const goTo = useCallback(
    (i: number) => {
      const next = ((i % slideCount) + slideCount) % slideCount;
      setIndex(next);
    },
    [slideCount]
  );

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

  if (slideCount <= 1) {
    const chunk = pages[0] ?? [];
    return (
      <div className="grid lg:grid-cols-4 gap-4 auto-rows-fr lg:[grid-template-rows:auto]">
        {chunk.map((card) => (
          <ContactCardView key={card.label} card={card} />
        ))}
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Contact channels"
      onKeyDown={handleKey}
      className="outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      tabIndex={0}
    >
      <div className="relative grid min-h-[1px]">
        {pages.map((chunk, pageIndex) => {
          const isFull = chunk.length === CONTACT_PAGE_SIZE;
          const isActive = pageIndex === index;
          return (
            <div
              key={`page-${pageIndex}`}
              ref={setSlideRef(pageIndex)}
              className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Page ${pageIndex + 1} of ${slideCount}`}
              aria-hidden={!isActive}
            >
              {isFull ? (
                <div className="grid lg:grid-cols-4 gap-4 items-stretch">
                  {chunk.map((card) => (
                    <div key={card.label} className="min-h-0 min-w-0">
                      <ContactCardView card={card} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-4">
                  {chunk.map((card) => (
                    <div key={card.label} className={wideCardColClass}>
                      <ContactCardView card={card} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-3 flex-wrap justify-center">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous contact page"
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
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to contact page ${i + 1}`}
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
          aria-label="Next contact page"
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
          {index + 1} / {slideCount}
        </span>
      </div>
    </div>
  );
}

export function Contact() {
  const pages = chunkItems(contactCards, CONTACT_PAGE_SIZE);

  const narrowGridClass =
    "grid grid-cols-1 sm:grid-cols-2 gap-4 " +
    "sm:[&>*:last-child:nth-child(odd)]:col-span-2 sm:[&>*:last-child:nth-child(odd)]:justify-self-center sm:[&>*:last-child:nth-child(odd)]:w-full " +
    "sm:[&>*:last-child:nth-child(odd)]:max-w-[calc((100%-1rem)/2)] lg:hidden";

  return (
    <section id="contact" className="scroll-mt-20" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="font-sans text-2xl font-bold tracking-tight text-foreground mb-10"
      >
        Contact
      </h2>
      <p className="font-serif text-[1.05rem] text-muted leading-relaxed mb-6">
        {site.availability}
      </p>

      <div className={narrowGridClass}>
        {contactCards.map((card) => (
          <ContactCardView key={card.label} card={card} />
        ))}
      </div>

      <div className="hidden lg:block">
        <ContactWideLayout pages={pages} />
      </div>
    </section>
  );
}
