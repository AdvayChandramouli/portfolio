import { site } from "@/lib/content";

const icons = {
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  social: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
};

const contactCards = [
  {
    label: "Email",
    icon: "email" as const,
    href: `mailto:${site.links.email}`,
    value: "Drop a message",
    external: false,
  },
  {
    label: "LinkedIn",
    icon: "linkedin" as const,
    href: site.links.linkedin,
    value: "Let's connect",
    external: true,
  },
  {
    label: "GitHub",
    icon: "github" as const,
    href: site.links.github,
    value: "Peek at my repos",
    external: true,
  },
  ...(site.links.instagram || site.links.twitter
    ? [
        {
          label: "Social",
          icon: "social" as const,
          links: [
            ...(site.links.instagram
              ? [{ label: "Instagram", href: site.links.instagram }]
              : []),
            ...(site.links.twitter
              ? [{ label: "Twitter", href: site.links.twitter }]
              : []),
          ],
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 pb-32 md:pb-40"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="font-sans text-2xl font-bold tracking-tight text-foreground mb-10"
      >
        Contact
      </h2>
      <p className="font-serif text-[1.05rem] text-muted leading-relaxed mb-6">
        {site.availability}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactCards.map((card) =>
          "links" in card ? (
            <div
              key={card.label}
              className="p-4 bg-background-light border border-border rounded-lg"
            >
              <div className="flex justify-center mb-3 text-muted">
                {icons[(card as { icon: keyof typeof icons }).icon]}
              </div>
              <h3 className="font-sans text-sm font-medium text-foreground mb-3">
                {card.label}
              </h3>
              <div className="flex flex-col gap-2 font-sans text-sm">
                {((card as { links?: { label: string; href: string }[] }).links ?? []).map((link) => (
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
          ) : (
            <a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="block p-4 bg-background-light border border-border rounded-lg transition-all duration-200 hover:border-accent/50 hover:bg-background-hover hover:shadow-sm group"
            >
              <div className="flex justify-center mb-3 text-muted group-hover:text-accent transition-colors">
                {icons[card.icon]}
              </div>
              <h3 className="font-sans text-sm font-medium text-foreground mb-2">
                {card.label}
              </h3>
              <p className="font-sans text-sm text-muted truncate">
                {card.value}
              </p>
            </a>
          )
        )}
      </div>
    </section>
  );
}
